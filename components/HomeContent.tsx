// "use client";

// import { useTranslations } from "next-intl";
// import Carousel from "@/components/Carousel";
// import MenuBar from "@/components/Menubar/MenuBar";
// import PopularGames from "@/components/features/PopularGames";
// import NewGames from "@/components/features/NewGames";
// import PromotionsSection from "@/components/features/Promotions";
// import LiveCasinoSection from "@/components/features/LiveCasinoSection";
// import GameProviders from "@/components/features/GameProviders";
// import JackpotBanner from "@/components/features/JackpotBanner";
// import AllGames from "@/components/features/AllGames";
// import Notification from "@/components/Notification";
// import MyPromotions from "@/components/MyPromotions";
// import React, { useState, useEffect } from "react";

// export default function HomeContent({ locale }: { locale: string }) {
//     const t = useTranslations("HomePage");
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
//     // Check login status from localStorage on mount
//     useEffect(() => {
//         const loginStatus = localStorage.getItem("isLoggedIn") === "true";
//         setIsLoggedIn(loginStatus);
//     }, []);

//     return (
//         <>
//             <Notification />
//             <Carousel />

//             {/* Show MyPromotions only if the user is logged in */}
//             {isLoggedIn && (
//                 <section className="mb-6">
//                     <MyPromotions />
//                 </section>
//             )}

//             <div className="px-4 sm:px-6 lg:px-8">
//                 <section className="mb-6">
//                     <MenuBar locale={locale} />
//                 </section>

//                 <section className="mb-6">
//                     <PopularGames />
//                 </section>

//                 <section className="mb-6">
//                     <NewGames />
//                 </section>

//                 <section className="mb-6">
//                     <PromotionsSection />
//                 </section>

//                 <section className="mb-6">
//                     <LiveCasinoSection />
//                 </section>

//                 <section className="mb-6">
//                     <GameProviders />
//                 </section>

//                 <section className="mb-6">
//                     <JackpotBanner />
//                 </section>

//                 <section className="mb-6">
//                     <AllGames />
//                 </section>
//             </div>
//         </>
//     );
// }




"use client";

import { useTranslations } from "next-intl";
import Carousel from "@/components/Carousel";
import MenuBar from "@/components/Menubar/MenuBar";
import PopularGames from "@/components/features/PopularGames";
import NewGames from "@/components/features/NewGames";
import PromotionsSection from "@/components/features/Promotions";
import LiveCasinoSection from "@/components/features/LiveCasinoSection";
import GameProviders from "@/components/features/GameProviders";
import JackpotBanner from "@/components/features/JackpotBanner";
import AllGames from "@/components/features/AllGames";
import Notification from "@/components/Notification";
import MyPromotions from "@/components/MyPromotions"; // Add this import
import React from "react";
import { useSession } from "next-auth/react"; // Import to check user session

export default function HomeContent({ locale }: { locale: string }) {
    const t = useTranslations("HomePage");
    const { data: session } = useSession(); // Get session data to check if the user is logged in

    return (
        <>
            <div className="z-10">
                <Notification />
                <Carousel />

                {/* Show MyPromotions only if the user is logged in */}
                {session && (
                    <section className="mb-6">
                        <MyPromotions />
                    </section>
                )}

                <div className="px-4 sm:px-6 lg:px-8">
                    <section className="mb-6">
                        <MenuBar locale={locale} />
                    </section>

                    <section className="mb-6">
                        <PopularGames />
                    </section>

                    <section className="mb-6">
                        <NewGames />
                    </section>

                    <section className="mb-6">
                        <PromotionsSection />
                    </section>

                    <section className="mb-6">
                        <LiveCasinoSection />
                    </section>

                    <section className="mb-6">
                        <GameProviders />
                    </section>

                    <section className="mb-6">
                        <JackpotBanner />
                    </section>

                    <section className="mb-6">
                        <AllGames />
                    </section>
                </div>
            </div>
        </>
    );
}
