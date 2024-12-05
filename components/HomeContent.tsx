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
import SignupModal from "@/components/Navbar/SignUpModal";
import GamesHeader from "./GamesHeader/GamesHeader";
import React, { useState, useEffect } from "react";

export default function HomeContent({ locale }: { locale: string }) {
    const t = useTranslations("HomePage");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false); // Modal state
    const [modalType, setModalType] = useState<"signUp" | "signIn" | null>(null);
    // Check login status from localStorage on mount
    useEffect(() => {
        const loginStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loginStatus);
    }, []);

    return (
        <>
            <Notification />
            <Carousel />

            {/* Show MyPromotions only if the user is logged in */}
            {isLoggedIn && (
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

            {/* Button to Open Signup Modal */}
            {!isLoggedIn && (
                <button
                    onClick={() => setIsSignupModalOpen(true)}
                    className="fixed bottom-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-full shadow-md hover:opacity-90"
                >
                    Sign In / Sign Up
                </button>
            )}
        </>
    );
}
