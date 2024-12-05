import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "th" , "hi" , "zh", "kh", "id", "ms", "sg", "vi", "ph", "mm", "lo", "bn", "ko", "tw" , "ur", "hk"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(th|en|hi|zh|kh|id|ms|sg|vi|ph|mm|lo|bn|ko|tw|ur|hk)/:path*"],
};






// import { NextRequest, NextResponse } from 'next/server';

// const PUBLIC_FILE = /\.(.*)$/;

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Skip static files
//   if (PUBLIC_FILE.test(pathname)) return NextResponse.next();

//   // Locale from the `next-intl` cookie
//   const locale = req.cookies.get('NEXT_LOCALE') || 'en';

//   // Add the locale if not present
//   if (!pathname.startsWith(`/${locale}`)) {
//     return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'],
// };










// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "th" , "hi" , "zh_vsxplu", "kh", "id", "ms", "sg", "vi", "ph", "mm", "lo"],
//   defaultLocale: "en",
// });

// export const config = {
//   matcher: ["/", "/(th|en|hi|zh_vsxplu|kh|id|ms|sg|vi|ph|mm|lo)/:path*"],
// };
