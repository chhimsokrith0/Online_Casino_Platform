import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import QuestsModal from "@/app/[locale]/Quests/QuestsModal";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const BottomNavbar = () => {
    const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false);
    const { data: session } = useSession();

    const handleQuestsClick = () => {
        setIsQuestsModalOpen(true);
    };

    const closeModal = () => {
        setIsQuestsModalOpen(false);
    };

    return (
        <div className="fixed top-10 left-0 w-full flex justify-between items-center p-6">
            {/* Icons Section */}
            <div className="flex space-x-4">
                {[
                    {
                        src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733827397/quests_hyjihx.svg",
                        alt: "Target Icon",
                        bg: "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700",
                        onClick: handleQuestsClick, // Open modal
                    },
                    {
                        src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733827398/reward_obkas0.svg",
                        alt: "Gift Icon",
                        bg: "bg-gradient-to-r from-green-600 via-green-500 to-green-700",
                        href: session ? "/Reward/random-card" : "/Reward", // Link to the Rewards page
                    },
                    {
                        src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733827394/promo_gug0zx.svg",
                        alt: "Promo Icon",
                        bg: "bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500",
                        href: "/promo", // Link to the Promotions page
                    },
                    {
                        src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733827393/levels_bxszta.svg",
                        alt: "Crown Icon",
                        bg: "bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-700",
                        href: "/member-level", // Link to the Levels page
                    },
                ].map((icon, index) => (
                    <div key={index}>
                        {icon.onClick ? (
                            <button
                                onClick={icon.onClick}
                                className={`${icon.bg} p-2 rounded-lg shadow-lg hover:scale-105 transform transition duration-200 flex items-center justify-center`}
                            >
                                <Image src={icon.src} alt={icon.alt} width={32} height={32} />
                            </button>
                        ) : (
                            <Link href={icon.href}>
                                <div
                                    className={`${icon.bg} p-2 rounded-lg shadow-lg hover:scale-105 transform transition duration-200 flex items-center justify-center`}
                                >
                                    <Image src={icon.src} alt={icon.alt} width={32} height={32} />
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            {/* Notification Section */}
            <Link href="account-information/forum/inbox">
                <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBell} className="text-gray-400 text-lg" />
                </button>
            </Link>

            {/* Quests Modal */}
            {isQuestsModalOpen && (
                <QuestsModal isOpen={isQuestsModalOpen} onClose={closeModal} />
            )}
        </div>
    );
};

export default BottomNavbar;
