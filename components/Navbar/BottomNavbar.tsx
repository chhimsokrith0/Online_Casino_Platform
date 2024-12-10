import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


const BottomNavbar = () => {
    return (

        <div
            className="fixed top-10 left-0  w-full flex justify-between items-center p-6"
        >
            {/* Icons Section */}
            <div className="flex space-x-4">
                {[
                    {
                        src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733827397/quests_hyjihx.svg",
                        alt: "Target Icon",
                        bg: "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700",
                    },
                    {
                        src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733827398/reward_obkas0.svg",
                        alt: "Gift Icon",
                        bg: "bg-gradient-to-r from-green-600 via-green-500 to-green-700",
                    },
                    {
                        src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733827394/promo_gug0zx.svg",
                        alt: "Promo Icon",
                        bg: "bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500",
                    },
                    {
                        src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733827393/levels_bxszta.svg",
                        alt: "Crown Icon",
                        bg: "bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-700",
                    },
                ].map((icon, index) => (
                    <button
                        key={index}
                        className={`${icon.bg} p-2 rounded-lg shadow-lg hover:scale-105 transform transition duration-200 flex items-center justify-center`}
                    >
                        <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
                    </button>
                ))}
            </div>


            {/* Notification Section */}
            <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faBell} className="text-gray-400 text-lg" />
            </button>

        </div>
    )
}

export default BottomNavbar