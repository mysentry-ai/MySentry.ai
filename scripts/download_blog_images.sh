#!/bin/bash
# Download all blog post images from CDN to local /images/blog/ directory
# Run this BEFORE executing migrate_blog_images_to_local_v2.sql
# Usage: bash scripts/download_blog_images.sh <DB_HOST> <DB_USER> <DB_PASSWORD> <DB_NAME>

set -e

DB_HOST="${1:-localhost}"
DB_USER="${2:-root}"
DB_PASS="${3}"
DB_NAME="${4:-mysentry}"

OUTPUT_DIR="client/public/images/blog"
mkdir -p "$OUTPUT_DIR"

echo "Fetching blog image URLs from database..."

# Get all unique heroImageUrl values that are remote
URLS=$(mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" -N -e "
  SELECT DISTINCT heroImageUrl FROM blog_posts 
  WHERE heroImageUrl LIKE 'https://%'
  UNION
  SELECT DISTINCT ogImageUrl FROM blog_posts 
  WHERE ogImageUrl LIKE 'https://%' AND ogImageUrl IS NOT NULL
")

TOTAL=$(echo "$URLS" | grep -c 'https://' || true)
echo "Found $TOTAL remote image URLs to download"

COUNT=0
FAILED=0

while IFS= read -r url; do
  [ -z "$url" ] && continue
  FILENAME=$(basename "$url")
  DEST="$OUTPUT_DIR/$FILENAME"
  
  if [ -f "$DEST" ]; then
    COUNT=$((COUNT + 1))
    continue
  fi
  
  if curl -fL --retry 2 --connect-timeout 15 --max-time 90 -sS "$url" -o "$DEST" 2>/dev/null; then
    COUNT=$((COUNT + 1))
  else
    echo "  FAILED: $url"
    FAILED=$((FAILED + 1))
  fi
done <<< "$URLS"

echo ""
echo "=== Download Complete ==="
echo "Downloaded/existing: $COUNT"
echo "Failed: $FAILED"
echo "Images saved to: $OUTPUT_DIR/"
echo ""
echo "Next step: Run migrate_blog_images_to_local_v2.sql against your database"
