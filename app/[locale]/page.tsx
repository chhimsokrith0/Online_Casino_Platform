import { getMessages } from "next-intl/server";
import HomeContent from "@/components/HomeContent";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return <HomeContent locale={locale} />;
}





// "use client";

// import React, { useState } from "react";
// import SignupModal from "@/components/Navbar/SignUpModal";

// export default function Home() {
//   const [isModalOpen, setModalOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <button
//         onClick={() => setModalOpen(true)}
//         className="bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Sign In / Sign Up
//       </button>
//       {isModalOpen && (
//         <SignupModal
//           activeTab="signIn"
//           onClose={() => setModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// }
