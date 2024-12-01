"use client";

import React from "react";

const promotions = [
    {
        title: "REBATE",
        description: "คืนยอดเดิมพัน เกมคาสิโน ( จ่าย 0.3-0.8% ) โบนัส Member Level (ลำดับขั้น)",
        image: "/img-promo/1.webp", // Replace with your actual image path
    },
    {
        title: "CASHBACK",
        description: "💸 โบนัสคืนยอดเสีย สูงสุด 7% ทุกวัน 💸 โบนัส Member Level (ลำดับขั้น) สูงสุด",
        image: "/img-promo/2.webp", // Replace with your actual image path
    },
    {
        title: "REFERRAL",
        description: "👥 รับคอมมิชชั่น 3% ทุกวัน 💰 เงินค่าคอมสามารถถอนเข้ากระเป๋าหลัก ทำเทิร์นได้",
        image: "/img-promo/3.webp", // Replace with your actual image path
    },
];

const PromotionsSection: React.FC = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat py-12 px-4"
            style={{
                backgroundImage: "url('/img-promo/bg.png')", // Replace with your actual background image path
            }}
        >
            <div className="max-w-[1200px] mx-auto text-center">
                <h1 className="text-4xl font-bold text-white mb-4">PROMOTIONS</h1>
                <p className="text-gray-400 text-lg mb-8">
                    Experience heightened excitement and rewards through our exclusive bonus at PlayGame168,
                    ensuring that every moment is filled with additional enjoyment and rewards.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {promotions.map((promo, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-[320px] md:w-[360px]"
                        >
                            <img
                                src={promo.image}
                                alt={promo.title}
                                className="w-full h-[160px] object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-yellow-400">{promo.title}</h2>
                                <p className="text-gray-200 mt-2 text-sm">{promo.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromotionsSection;
