"use client";
import React from "react";
import Image from "next/image";
const ENJOY_OUR_GAMES = ({t}: {t: any}) => {

    
    return (
        <div className="px-6 py-10">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden p-8">
                {/* Image */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <Image
                        src="/img-reward/step1.BO1ggvpX.svg" // Replace with the actual path to the image
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
                    <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                        {t("enjoyOurGames.button")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ENJOY_OUR_GAMES;