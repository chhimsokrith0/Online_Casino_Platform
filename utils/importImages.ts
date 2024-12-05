// const importAll = (context: __WebpackModuleApi.RequireContext) => {
//     return context.keys().map((key) => ({
//       src: context(key)?.default || context(key), // Fallback if `default` is not available
//       name: key.replace('./', ''), // Extracts file name from the path
//     }));
//   };
  
//   // Dynamically import all images from the specified folder
//   const images = importAll(
//     require.context('../assets/img_Demo', false, /\.(png|jpg|jpeg|webp|gif)$/)
//   );
  
//   export default images;
  