import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const target = new Date(targetDate);
            const difference = target.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft(
                    `${days}D ${hours.toString().padStart(2, "0")} Hrs ${minutes
                        .toString()
                        .padStart(2, "0")} Mins ${seconds
                            .toString()
                            .padStart(2, "0")} Sec`
                );
            } else {
                setTimeLeft("Expired");
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="text-yellow-300 text-sm flex items-center gap-2 bg-gray-800 p-2 rounded-md shadow-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span className="font-bold tracking-wider text-lg">{timeLeft}</span>
        </div>

    );
};

export default CountdownTimer;
