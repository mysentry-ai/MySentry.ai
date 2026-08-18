#!/usr/bin/env python3
"""
Migrate all remote image URLs in MySentry website source code to local client/public/ paths.
Also generate a SQL dump for updating blog_posts heroImageUrl/ogImageUrl columns.
"""
import os, re, subprocess, hashlib, json, shutil
from pathlib import Path
from urllib.parse import urlparse

PROJECT = Path("/home/ubuntu/mysentry-website")
PUBLIC = PROJECT / "client" / "public"
ARCHIVE = PROJECT / "website-image-archive"
SRC_DIRS = [PROJECT / "client" / "src"]
REMOTE_URL_FILE = Path("/tmp/all_remote_urls.txt")

MIGRATE_DOMAINS = {"files.manuscdn.com", "d2xsxph8kpxj0f.cloudfront.net", "static.thenounproject.com"}

def url_to_local_path(url):
    parsed = urlparse(url)
    domain = parsed.netloc
    path_part = parsed.path.lstrip("/")
    if domain == "d2xsxph8kpxj0f.cloudfront.net":
        filename = path_part.split("/")[-1]
        return f"/images/cdn/{filename}"
    elif domain == "files.manuscdn.com":
        filename = path_part.split("/")[-1]
        return f"/images/cdn/{filename}"
    elif domain == "static.thenounproject.com":
        filename = path_part.split("/")[-1]
        return f"/images/icons/{filename}"
    else:
        filename = path_part.split("/")[-1]
        return f"/images/external/{filename}"

def find_archive_source(url):
    url_hash = hashlib.sha256(url.encode()).hexdigest()[:12]
    remote_dir = ARCHIVE / "remote"
    if remote_dir.exists():
        for f in remote_dir.iterdir():
            if f.name.startswith(url_hash):
                return f
    return None

all_urls = [u.strip() for u in REMOTE_URL_FILE.read_text().splitlines() if u.strip()]
migrate_urls = [u for u in all_urls if urlparse(u).netloc in MIGRATE_DOMAINS]
print(f"Total remote URLs: {len(all_urls)}")
print(f"URLs to migrate: {len(migrate_urls)}")

url_map = {}
for url in migrate_urls:
    local_path = url_to_local_path(url)
    url_map[url] = local_path

for lp in set(url_map.values()):
    (PUBLIC / lp.lstrip("/")).parent.mkdir(parents=True, exist_ok=True)

copied = 0
missing = []
for url, local_path in url_map.items():
    dest = PUBLIC / local_path.lstrip("/")
    if dest.exists():
        copied += 1
        continue
    src = find_archive_source(url)
    if src and src.exists():
        shutil.copy2(src, dest)
        copied += 1
    else:
        missing.append(url)

print(f"Copied from archive: {copied}")
print(f"Missing (need download): {len(missing)}")

downloaded = 0
for url in missing:
    local_path = url_map[url]
    dest = PUBLIC / local_path.lstrip("/")
    try:
        result = subprocess.run(
            ["curl", "-fL", "--retry", "2", "--connect-timeout", "15", "--max-time", "90", "-sS", url, "-o", str(dest)],
            capture_output=True, timeout=120
        )
        if result.returncode == 0 and dest.exists() and dest.stat().st_size > 0:
            downloaded += 1
        else:
            print(f"  FAILED: {url}")
    except Exception as e:
        print(f"  ERROR: {url} - {e}")

print(f"Downloaded: {downloaded}")

source_files = []
for src_dir in SRC_DIRS:
    for ext in ("*.tsx", "*.ts", "*.css"):
        source_files.extend(src_dir.rglob(ext))
source_files.extend((PROJECT / "client" / "public").rglob("*.html"))
source_files.extend((PROJECT / "client").glob("*.html"))

replacements_made = 0
files_modified = set()
for fpath in source_files:
    try:
        content = fpath.read_text()
    except Exception:
        continue
    new_content = content
    for url, local_path in url_map.items():
        if url in new_content:
            new_content = new_content.replace(url, local_path)
            replacements_made += 1
            files_modified.add(str(fpath.relative_to(PROJECT)))
    if new_content != content:
        fpath.write_text(new_content)

print(f"Source replacements: {replacements_made}")
print(f"Files modified: {len(files_modified)}")

sql_statements = []
sql_statements.append("-- MySentry Blog Posts Image URL Migration")
sql_statements.append("-- Generated for offline execution - does NOT run against live database")
sql_statements.append("-- Updates heroImageUrl and ogImageUrl from CDN URLs to local /images/cdn/ paths")
sql_statements.append("-- Execute this SQL manually on your AWS database after deploying the updated code")
sql_statements.append("")
sql_statements.append("START TRANSACTION;")
sql_statements.append("")

for url, local_path in url_map.items():
    escaped_url = url.replace("'", "\\'")
    escaped_local = local_path.replace("'", "\\'")
    sql_statements.append(f"UPDATE blog_posts SET heroImageUrl = '{escaped_local}' WHERE heroImageUrl = '{escaped_url}';")
    sql_statements.append(f"UPDATE blog_posts SET ogImageUrl = '{escaped_local}' WHERE ogImageUrl = '{escaped_url}';")

sql_statements.append("")
sql_statements.append("COMMIT;")
sql_statements.append("")
sql_statements.append(f"-- Total URL mappings: {len(url_map)}")
sql_statements.append("-- Affected columns: heroImageUrl, ogImageUrl")

sql_dump_path = PROJECT / "migrate_blog_images_to_local.sql"
sql_dump_path.write_text("\n".join(sql_statements))
print(f"\nSQL dump written to: {sql_dump_path}")
print(f"SQL statements: {len([s for s in sql_statements if s.startswith('UPDATE')])}")

mapping_path = PROJECT / "image_url_migration_map.json"
mapping_path.write_text(json.dumps(url_map, indent=2))
print(f"URL mapping written to: {mapping_path}")

cdn_dir = PUBLIC / "images" / "cdn"
icons_dir = PUBLIC / "images" / "icons"
print(f"\n=== MIGRATION SUMMARY ===")
print(f"Remote URLs migrated to local: {len(url_map)}")
print(f"Images in client/public/images/cdn/: {len(list(cdn_dir.glob('*'))) if cdn_dir.exists() else 0}")
print(f"Images in client/public/images/icons/: {len(list(icons_dir.glob('*'))) if icons_dir.exists() else 0}")
print(f"Source files updated: {len(files_modified)}")
print(f"SQL dump for database: migrate_blog_images_to_local.sql")
