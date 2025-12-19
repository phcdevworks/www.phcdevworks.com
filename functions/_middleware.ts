const normalizePath = (pathname: string) => {
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

export async function onRequest({ request, next }: { request: Request; next: () => Promise<Response> }) {
  const { pathname } = new URL(request.url);

  const gone = new Set<string>([
    "/blog/articles/faber-an-elementor-template-kit-built-for-tech-company",
    "/tutorials",
    "/wordpress/optimization",
    "/services/automations",
    "/automate_me",
    "/solutions",
    "/about",
    "/contact",
    "/portfolio",
    "/wordpress/managed-hosting"
  ].map(normalizePath));

  const normalizedPath = normalizePath(pathname);

  if (gone.has(normalizedPath)) {
    return new Response("410 Gone", { status: 410 });
  }

  return next();
}
