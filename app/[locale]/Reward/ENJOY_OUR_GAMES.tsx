"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SignupModal from "@/components/Navbar/SignUpModal";
import { useSession } from "next-auth/react";
const ENJOY_OUR_GAMES = ({ t }: { t: any }) => {

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    // Session hook to check if user is authenticated
    const { data: session } = useSession();
    const handleOpenSignupModal = () => setIsSignupModalOpen(true);
    const handleCloseSignupModal = () => setIsSignupModalOpen(false);


    return (
        <div className="px-6 py-10">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden p-8">
                {/* Image */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <Image
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733644740/step1.BO1ggvpX_mti3xt.svg" // Replace with the actual path to the image
                        alt="Game Wallet"
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">  {t("enjoyOurGames.title")} </h2>
                    <p className="text-gray-400 mb-6">
                        {t("enjoyOurGames.description")}
                    </p>

                    {session ? (
                        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                            {t("enjoyOurGames.button")}
                        </button>
                    ) : (
                        <button onClick={handleOpenSignupModal} className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                            {t("enjoyOurGames.button")}
                        </button>
                    )}
                </div>
            </div>
            {isSignupModalOpen && (
                <SignupModal activeTab="signUp" onClose={handleCloseSignupModal} zIndex={10000} />
            )}
        </div>
    );
};

export default ENJOY_OUR_GAMES;