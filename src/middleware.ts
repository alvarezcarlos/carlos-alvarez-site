import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, esCountries, locales } from "./i18n/dictionaries";

function getLocale(request: NextRequest): string {
  // 1. Check Vercel IP Country Header for Geo-Routing
  const country = request.headers.get("x-vercel-ip-country");
  if (country && esCountries.includes(country)) {
    return "es";
  }

  // 2. Fallback to Accept-Language Header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    if (acceptLanguage.toLowerCase().startsWith("es")) return "es";
    if (acceptLanguage.toLowerCase().startsWith("en")) return "en";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files, Next.js internals, and API routes
  if (
    pathname.match(/\.(.*)$/) ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico"
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
