const BLOCKED_PATHS = [
  /^\/AGENTS\.md$/i,
  /^\/seo-action-plan\.zh-CN\.md$/i,
  /^\/.*\.zh-CN\.md$/i,
  /^\/\.codex(?:\/|$)/i,
  /^\/supabase(?:\/|$)/i,
  /^\/tools(?:\/|$)/i,
  /^\/\.git(?:\/|$)/i,
];

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Frame-Options": "SAMEORIGIN",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy":
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'; form-action 'self' mailto: https://wa.me; frame-ancestors 'self'; base-uri 'self'; object-src 'none'",
};

function withSecurityHeaders(response, status = response.status) {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  return new Response(response.body, {
    status,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (BLOCKED_PATHS.some((pattern) => pattern.test(url.pathname))) {
      const notFound = await env.ASSETS.fetch(new URL("/404.html", url));
      return withSecurityHeaders(notFound, 404);
    }

    return withSecurityHeaders(await env.ASSETS.fetch(request));
  },
};
