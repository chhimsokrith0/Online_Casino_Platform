"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SignupModal from "@/components/Navbar/SignUpModal";
import { useSession } from "next-auth/react";

const ENJOY_OUR_PROMOTIONS = ({ t }: { t: any }) => {

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    // Session hook to check if user is authenticated
    const { data: session } = useSession();
    const handleOpenSignupModal = () => setIsSignupModalOpen(true);
    const handleCloseSignupModal = () => setIsSignupModalOpen(false);

    return (

        <div className="px-6 py-10">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden p-8">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4"> {t("enjoyOurPromotions.title")} </h2>
                    <p className="text-gray-400 mb-6">
                        {t("enjoyOurPromotions.description")}
                    </p>

                    {session ? (
                        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                            {t("enjoyOurPromotions.button")}
                        </button>
                    ) : (

                        <button onClick={handleOpenSignupModal} className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                            {t("enjoyOurPromotions.button")}
                        </button>
                    )}

                </div>

                {/* Image */}
                <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
                    <Image
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733644740/step2.Cae0iGKU_aqmve6.svg" // Replace with the correct path for your image
                        alt="Promotions Illustration"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
            {isSignupModalOpen && (
                <SignupModal activeTab="signUp" onClose={handleCloseSignupModal} zIndex={10000} />
            )}
        </div>
    )
}

export default ENJOY_OUR_PROMOTIONS;