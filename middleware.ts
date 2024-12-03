import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "th" , "hi" , "zh", "kh", "id", "ms", "sg", "vi", "ph", "mm", "lo", "bn", "ko", "tw" , "ur", "hk"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(th|en|hi|zh|kh|id|ms|sg|vi|ph|mm|lo|bn|ko|tw|ur|hk)/:path*"],
};




// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "th" , "hi" , "zh_vsxplu", "kh", "id", "ms", "sg", "vi", "ph", "mm", "lo"],
//   defaultLocale: "en",
// });

// export const config = {
//   matcher: ["/", "/(th|en|hi|zh_vsxplu|kh|id|ms|sg|vi|ph|mm|lo)/:path*"],
// };
