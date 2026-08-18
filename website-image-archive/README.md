# MySentry Website Image Archive

This folder archives the image assets referenced by the MySentry website source at the time of collection. The existing website image URLs are not changed by this archive.

## Validation summary

| Item | Verified count |
|---|---:|
| Local images copied from `client/public` | 313 |
| Remote image files downloaded and MIME-validated | 70 |
| Total archived image files | 383 |
| Referenced remote URL that returned HTML rather than an image | 1 |

## Files

- `local/`: exact copy of image assets from `client/public`, preserving paths.
- `remote/`: image assets retrieved from CDN and other external URLs, named with a URL hash prefix to prevent collisions.
- `image-sources.tsv`: raw source-to-archive mapping for all inventory entries.
- `image-manifest.tsv`: size, SHA-256 checksum, MIME type, and validation result for each source entry.
- `image-checksums.sha256`: integrity checksums for all archived image files.
- `exceptions.md`: documented remote URL that returned HTML and its local image counterpart.
