import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "th", "hi", "zh", "kh", "id", "ms", "sg", "vi", "ph", "mm", "lo"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    
  };
});






// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";

// const locales = ["en", "th", "hi", "zh_vsxplu", "kh", "id", "ms", "sg", "vi", "ph", "mm", "lo"];

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale as any)) notFound();

//   const response = await fetch(
//     `https://res.cloudinary.com/dfxqagrkk/raw/upload/v1733048281/${locale}.json`
//   );

//   if (!response.ok) {
//     notFound();
//   }

//   const messages = await response.json();

//   return {
//     messages,
//   };
// });



// https://res.cloudinary.com/dfxqagrkk/raw/upload/v1733048281/