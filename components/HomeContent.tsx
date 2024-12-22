

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
import MyPromotions from "@/components/MyPromotions";
import React from "react";
import { useSession } from "next-auth/react";
import { useSidebar } from "@/components/Sidebar/SidebarContext"; // Import SidebarContext

export default function HomeContent({ locale }: { locale: string }) {
    const t = useTranslations("HomePage");
    const { data: session } = useSession();
    const { isCollapsed } = useSidebar(); // Access isCollapsed state

    return (
        <>
            <div className={`z-10 ${isCollapsed ? "ml-[-15rem]" : ""}`}>
                <Notification />
                <Carousel />

                {/* Show MyPromotions only if the user is logged in */}
                {session && (
                    <section className="mb-6">
                        <MyPromotions />
                    </section>
                )}

                {/* Dynamic padding adjustment */}
                <div className={`px-4 sm:px-6 lg:px-${isCollapsed ? "2" : "8"}`}>
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
