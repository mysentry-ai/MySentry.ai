import homepageDocument from "../../../public/mysentry-homepage-v17.html?raw";

// First-party approved markup only. Never accept user/DB HTML here.
function extract(pattern: RegExp): string {
  const match = homepageDocument.match(pattern);
  if (!match) throw new Error("Approved homepage shell is missing");
  return match[0].replace(/src="assets\//g, 'src="/assets/');
}

export const PUBLIC_HEADER_HTML = extract(
  /<header class="site-header"[\s\S]*?<\/header>/
);
export const PUBLIC_BANNER_HTML = extract(
  /<section aria-label="MySentry and Ring announcement"[\s\S]*?<\/section>/
);
export const PUBLIC_FOOTER_HTML = extract(
  /<footer class="site-footer"[\s\S]*?<\/footer>/
);
