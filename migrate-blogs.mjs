/**
 * Migration script: Import existing static blog posts from blogs.ts into the database.
 * Run: node migrate-blogs.mjs
 */
import 'dotenv/config';
import mysql from 'mysql2/promise';

// Static blog data - extracted from client/src/lib/blogs.ts
// We'll read the file and parse it
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

// Parse the blogs.ts file to extract blog data
const blogsContent = readFileSync(join(__dirname, 'client/src/lib/blogs.ts'), 'utf-8');

// Extract each blog object
function extractBlogs(content) {
  const blogs = [];
  // Find all blog objects between { and the closing }
  const regex = /\{\s*id:\s*'(\d+)',\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)',\s*category:\s*'([^']+)',\s*image:\s*'([^']*)',\s*excerpt:\s*'([\s\S]*?)',\s*date:\s*'([^']+)',\s*readTime:\s*'([^']+)',\s*content:\s*`([\s\S]*?)`\s*\}/g;
  
  let match;
  while ((match = regex.exec(content)) !== null) {
    blogs.push({
      id: match[1],
      slug: match[2],
      title: match[3],
      category: match[4],
      image: match[5],
      excerpt: match[6].replace(/\\'/g, "'"),
      date: match[7],
      readTime: match[8],
      content: match[9].trim(),
    });
  }
  return blogs;
}

const blogs = extractBlogs(blogsContent);
console.log(`Found ${blogs.length} blog posts to migrate`);

// Category mapping
const categoryMap = {
  'Senior Care': { name: 'Senior Care', slug: 'senior-care', description: 'Articles about senior safety, aging in place, and elderly care' },
  'Females': { name: 'Women\'s Safety', slug: 'womens-safety', description: 'Articles about personal safety for women' },
  'Families': { name: 'Family Safety', slug: 'family-safety', description: 'Articles about family protection and peace of mind' },
  'Business': { name: 'Business & Employers', slug: 'business-employers', description: 'Articles about workplace safety and employer solutions' },
};

function computeReadTime(html) {
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function computeWordCount(html) {
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  return text.split(' ').filter(Boolean).length;
}

function parseDate(dateStr) {
  // "Jan 15, 2026" -> Date
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return new Date();
  return d;
}

async function migrate() {
  const connection = await mysql.createConnection(DATABASE_URL);
  
  try {
    // Create categories
    console.log('\n--- Creating categories ---');
    const categoryIds = {};
    
    for (const [key, cat] of Object.entries(categoryMap)) {
      try {
        const [existing] = await connection.execute(
          'SELECT id FROM blog_categories WHERE slug = ?',
          [cat.slug]
        );
        if (existing.length > 0) {
          categoryIds[key] = existing[0].id;
          console.log(`  Category "${cat.name}" already exists (id: ${existing[0].id})`);
        } else {
          const [result] = await connection.execute(
            'INSERT INTO blog_categories (name, slug, description) VALUES (?, ?, ?)',
            [cat.name, cat.slug, cat.description]
          );
          categoryIds[key] = result.insertId;
          console.log(`  Created category "${cat.name}" (id: ${result.insertId})`);
        }
      } catch (err) {
        console.error(`  Error creating category "${cat.name}":`, err.message);
      }
    }
    
    // Import blog posts
    console.log('\n--- Importing blog posts ---');
    let imported = 0;
    let skipped = 0;
    
    for (const blog of blogs) {
      try {
        // Check if slug already exists
        const [existing] = await connection.execute(
          'SELECT id FROM blog_posts WHERE slug = ?',
          [blog.slug]
        );
        
        if (existing.length > 0) {
          console.log(`  Skipped "${blog.title}" (slug already exists)`);
          skipped++;
          continue;
        }
        
        const categoryId = categoryIds[blog.category] || null;
        const readTime = computeReadTime(blog.content);
        const wordCount = computeWordCount(blog.content);
        const publishedAt = parseDate(blog.date);
        
        // Generate basic SEO fields from existing data
        const metaTitle = blog.title.length > 60 ? blog.title.substring(0, 57) + '...' : blog.title;
        const metaDescription = blog.excerpt.length > 160 ? blog.excerpt.substring(0, 157) + '...' : blog.excerpt;
        
        await connection.execute(
          `INSERT INTO blog_posts (
            title, slug, categoryId, status, excerpt,
            heroImageUrl, heroImageAlt,
            contentHtml, 
            metaTitle, metaDescription,
            authorName, readTimeMinutes, wordCount,
            publishedAt, isIndexed, isFollowed
          ) VALUES (?, ?, ?, 'published', ?, ?, ?, ?, ?, ?, 'MySentry Editorial Team', ?, ?, ?, true, true)`,
          [
            blog.title,
            blog.slug,
            categoryId,
            blog.excerpt,
            blog.image || null,
            blog.title,
            blog.content,
            metaTitle,
            metaDescription,
            readTime,
            wordCount,
            publishedAt,
          ]
        );
        
        imported++;
        console.log(`  Imported: "${blog.title}" (${blog.category})`);
      } catch (err) {
        console.error(`  Error importing "${blog.title}":`, err.message);
      }
    }
    
    console.log(`\n--- Migration Complete ---`);
    console.log(`Imported: ${imported}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Total: ${blogs.length}`);
    
  } finally {
    await connection.end();
  }
}

migrate().catch(console.error);
