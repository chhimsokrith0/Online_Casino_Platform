
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // List of supported locales
  locales: [
    "en", "th", "hi", "zh", "kh", "id", "ms", "sg", "vi", "ph",
    "mm", "lo", "bn", "ko", "tw", "ur", "hk","pt", "au", "ca",
  ],
  defaultLocale: "en", // Default locale
});

export const config = {
  // Ensure middleware only applies to localized routes
  matcher: [
    "/",
    "/((?!api|_next|favicon.ico).*)", // Exclude API routes, assets, and favicon
    "/(th|en|hi|zh|kh|id|ms|sg|vi|ph|mm|lo|bn|ko|tw|ur|hk|pt|au|ca)/:path*", // Include localized paths
  ],
};







// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "th" , "hi" , "zh_vsxplu", "kh", "id", "ms", "sg", "vi", "ph", "mm", "lo"],
//   defaultLocale: "en",
// });

// export const config = {
//   matcher: ["/", "/(th|en|hi|zh_vsxplu|kh|id|ms|sg|vi|ph|mm|lo)/:path*"],
// };
