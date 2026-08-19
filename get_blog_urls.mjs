
import mysql from 'mysql2/promise';
import { readFileSync, writeFileSync } from 'fs';
import { config } from 'dotenv';
config({ path: '/home/ubuntu/mysentry-website/.env' });

const url = process.env.DATABASE_URL;
if (!url) { console.error('No DATABASE_URL in .env'); process.exit(1); }

const conn = await mysql.createConnection(url);
const [rows] = await conn.execute(
  `SELECT DISTINCT heroImageUrl AS url FROM blog_posts WHERE heroImageUrl IS NOT NULL AND heroImageUrl LIKE 'https://%'
   UNION
   SELECT DISTINCT ogImageUrl AS url FROM blog_posts WHERE ogImageUrl IS NOT NULL AND ogImageUrl LIKE 'https://%'`
);
await conn.end();

const urls = rows.map(r => r.url).filter(Boolean);
writeFileSync('/tmp/blog_image_urls.json', JSON.stringify(urls, null, 2));
console.log(`Found ${urls.length} unique blog image URLs`);
