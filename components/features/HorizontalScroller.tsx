import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useSession } from "next-auth/react";
import SignupModal from "@/components/Navbar/SignUpModal";

const HorizontalScroller = ({ gameProviders }: { gameProviders: any[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const { data: session } = useSession();
    const [showSignUpModal, setShowSignUpModal] = React.useState(false);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.cursor = "grabbing";
        };

        const handleMouseLeave = () => {
            isDown = false;
            container.style.cursor = "grab";
        };

        const handleMouseUp = () => {
            isDown = false;
            container.style.cursor = "grab";
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5; // Drag sensitivity
            container.scrollLeft = scrollLeft - walk;
        };

        const animateScroll = () => {
            gsap.to(container, {
                scrollBehavior: "smooth", // Smooth scrolling
                scrollTrigger: {
                    trigger: container,
                    scrub: true,
                    start: "top center",
                },
                duration: 1,
            });
        };

        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mouseleave", handleMouseLeave);
        container.addEventListener("mouseup", handleMouseUp);
        container.addEventListener("mousemove", handleMouseMove);

        animateScroll();

        return () => {
            container.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("mouseleave", handleMouseLeave);
            container.removeEventListener("mouseup", handleMouseUp);
            container.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex justify-start items-start gap-[18px] w-full pt-4 overflow-auto select-none no-scrollbar"
            style={{
                cursor: "grab",
                scrollBehavior: "smooth", // Smooth scroll CSS
            }}
        >
            {gameProviders.map((provider, index) => (
                <div key={provider.id}>
                    <div className="relative flex flex-col gap-3.5 items-start justify-center">
                        <div className="relative rounded-[20px] w-[340px] h-[190px] mr-[15px] overflow-hidden transition-transform duration-500 ease-out group">
                            <Image
                                draggable={false}
                                className="absolute bottom-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                src={provider.bgImage}
                                alt={`${provider.name} background`}
                                layout="fill"
                            />
                            <div className="absolute top-0 left-0 px-3.5 py-3">
                                <Image
                                    draggable={false}
                                    src={provider.logo}
                                    alt={`${provider.name} logo`}
                                    width={120}
                                    height={60}
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 px-3.5 py-3 cursor-pointer">
                                <div
                                    className="w-fit h-[36px] group rounded-full border border-black-500 
                                            hover:border-transparent hover:bg-gradient-to-r from-yellow-400 to-yellow-500 
                                            px-3 py-1.5 md:px-4 md:py-2 gap-2 flex flex-row justify-center items-center 
                                            transition-all duration-300 ease-in-out shadow-md">

                                    <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1735448647/freepik__background__32998_prowuj.png"
                                        width={25} height={25} alt="" />

                                    {session ? (
                                        <span
                                            className="text-[10px] md:text-sm font-bold md:font-semibold text-white
                                                group-hover:text-white transition-colors duration-300 ease-in-out">
                                            Play
                                        </span>
                                    ) : (
                                        <span onClick={() => setShowSignUpModal(true)}
                                            className="text-[10px] md:text-sm font-bold md:font-semibold text-white
                                                group-hover:text-white transition-colors duration-300 ease-in-out">
                                            Play
                                        </span>
                                    )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}

            {showSignUpModal && (
                <SignupModal activeTab="signIn" onClose={() => setShowSignUpModal(false)} />
            )}
        </div>
    );
};

export default HorizontalScroller;
