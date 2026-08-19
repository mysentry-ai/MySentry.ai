-- MySentry Blog Posts Image URL Migration v2
-- Generated for offline execution - does NOT run against live database
-- This version uses REPLACE() to convert any CloudFront or manuscdn URL
-- to a local /images/blog/ path by extracting just the filename.
-- Execute this SQL manually on your AWS database after deploying the updated code.

START TRANSACTION;

-- Strategy: Extract the filename from the full URL and prepend /images/blog/
-- This handles ALL blog-images regardless of the exact path structure.

-- Step 1: Update heroImageUrl for CloudFront blog-images
UPDATE blog_posts 
SET heroImageUrl = CONCAT('/images/blog/', SUBSTRING_INDEX(heroImageUrl, '/', -1))
WHERE heroImageUrl LIKE 'https://d2xsxph8kpxj0f.cloudfront.net%';

-- Step 2: Update heroImageUrl for manuscdn images
UPDATE blog_posts 
SET heroImageUrl = CONCAT('/images/blog/', SUBSTRING_INDEX(heroImageUrl, '/', -1))
WHERE heroImageUrl LIKE 'https://files.manuscdn.com%';

-- Step 3: Update ogImageUrl for CloudFront blog-images
UPDATE blog_posts 
SET ogImageUrl = CONCAT('/images/blog/', SUBSTRING_INDEX(ogImageUrl, '/', -1))
WHERE ogImageUrl LIKE 'https://d2xsxph8kpxj0f.cloudfront.net%';

-- Step 4: Update ogImageUrl for manuscdn images
UPDATE blog_posts 
SET ogImageUrl = CONCAT('/images/blog/', SUBSTRING_INDEX(ogImageUrl, '/', -1))
WHERE ogImageUrl LIKE 'https://files.manuscdn.com%';

COMMIT;

-- Verification query (run after to confirm):
-- SELECT id, heroImageUrl FROM blog_posts WHERE heroImageUrl LIKE '/images/blog/%' LIMIT 10;
-- Expected: All heroImageUrl values should now start with /images/blog/

-- IMPORTANT: Before running this SQL, ensure all blog images have been downloaded
-- to your server's public directory at /images/blog/
-- You can download them using the companion script: scripts/download_blog_images.sh
