"use client";

import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faSearch, faSlidersH, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import Link from "next/link";
import { useSidebar } from "@/components/Sidebar/SidebarContext";

interface Provider {
  id: number;
  name: string;
  logo: string;
  bgImage: string;
}

interface ApiResponse {
  data: Provider[];
}

const Providers = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { isCollapsed } = useSidebar();

  useEffect(() => {
    // Fetch data from the mocked API
    const fetchProviders = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/provider');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();
        setProviders(result.data); // Access the data property from the response
        console.log('Providers data:', result.data); // Debug log
      } catch (err) {
        setError("Failed to fetch providers. Please try again later.");
        console.error("Error fetching providers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  useEffect(() => {
    // GSAP animation for card entrance
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
    );
  }, [providers]);

  const handleHover = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  return (
    <div className={`max-w-[1200px] mx-auto px-4 py-8 text-white ${isCollapsed ? "ml-[5rem]" : ""}`}>
      {/* Breadcrumb */}
      <nav className="text-gray-400 text-sm mb-4">
        <span>
          <Link href="/">Home</Link>
        </span>{" "}
        <span className="text-gray-500">/</span>{" "}
        <span className="text-white font-semibold">Providers</span>
      </nav>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        {/* Title Section */}
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <FontAwesomeIcon icon={faBuilding} className="mr-2" />
            Providers
          </h1>
          <p className="text-gray-400 text-sm mt-1">{providers.length} Providers</p>
        </div>

        {/* Search Section */}
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full max-w-[300px]">
          <input
            type="text"
            placeholder="Find your provider"
            className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none"
          />
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />
          <FontAwesomeIcon icon={faSlidersH} className="text-gray-400 ml-4 cursor-pointer" />
        </div>
      </div>

      {/* Loading and Error Handling */}
      {loading && <p className="text-center text-gray-400">Loading providers...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Providers Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.isArray(providers) && providers.map((provider, index) => (
            <div
              key={provider.id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
              className="relative p-6 rounded-lg shadow-lg transition-transform flex flex-col justify-between items-start overflow-hidden"
              style={{
                backgroundImage: `url(${provider.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "340px",
                height: "190px",
              }}
            >
              {/* Top Section: Logo & Labels */}
              <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <img src={provider.logo} alt={provider.name} className="w-[150px] h-auto" />
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    NEW
                  </span>
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    HOT
                  </span>
                </div>
              </div>

              {/* Bottom Section: Button */}
              <div className="w-full absolute bottom-4 left-4 flex items-center justify-start">
                <button className="flex items-center gap-2 bg-white text-black font-bold py-2 px-6 rounded-full transition hover:bg-yellow-500 hover:text-black">
                  <FontAwesomeIcon icon={faGamepad} />
                  PLAY
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Providers;
