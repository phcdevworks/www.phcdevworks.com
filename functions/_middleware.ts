export async function onRequest({ request, next }: { request: Request; next: () => Promise<Response> }) {
  const { pathname } = new URL(request.url);

  const gone = new Set<string>([
    "/blog/articles/faber-an-elementor-template-kit-built-for-tech-company",
    "/blog/articles/faber-an-elementor-template-kit-built-for-tech-company/",
    "/tutorials",
    "/wordpress/optimization",
    "/wordpress/optimization/",
    "/services/automations/",
    "/automate_me/",
    "/solutions/",
    "/about/",
    "/contact/",
    "/portfolio/",
    "/wordpress/managed-hosting/"
  ]);

  const p = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;

  if (gone.has(p)) {
    return new Response("410 Gone", { status: 410 });
  }

  return next();
}
