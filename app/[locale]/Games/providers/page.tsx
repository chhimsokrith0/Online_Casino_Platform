"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH, faGamepad, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSidebar } from "@/components/Sidebar/SidebarContext";
import { useSession } from "next-auth/react";
import SignupModal from "@/components/Navbar/SignUpModal";
interface Provider {
  id: number;
  name: string;
  logo: string;
  bgImage: string;
}

interface ApiResponse {
  data: Provider[];
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const Providers = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>(""); // State for active filter
  const { isCollapsed } = useSidebar();
  const { data: session } = useSession();
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/provider");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();
        setProviders(result.data);
        setFilteredProviders(result.data);
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
    const filtered = providers.filter((provider) =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProviders(filtered);
  }, [searchTerm, providers]);

  const handleSort = (type: string) => {
    setSelectedFilter(type); // Set the active filter
    let sortedProviders = [...providers];
    if (type === "A-Z") {
      sortedProviders.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "Z-A") {
      sortedProviders.sort((a, b) => b.name.localeCompare(a.name));
    } else if (type === "Hot") {
      sortedProviders = providers.filter((provider) => provider.name.includes("Hot"));
    } else if (type === "New") {
      sortedProviders = providers.filter((provider) => provider.name.includes("New"));
    }
    setFilteredProviders(sortedProviders);
    setIsFilterOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <div
      className={`max-w-[1200px] mx-auto px-4 py-8 text-white ${isCollapsed ? "ml-[2rem]" : ""
        }`}
    >
      {/* Breadcrumb */}
      <nav className="text-gray-400 text-sm mb-4">
        <span>
          <Link href="/">Home</Link>
        </span>{" "}
        <span className="text-gray-500">/</span>{" "}
        <span className="text-white font-semibold">Providers</span>
      </nav>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        {/* Title */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center">
            <div
              className="w-10 h-10 mr-2 flex items-center justify-center bg-white rounded-full"
              style={{ backgroundColor: "#ffffff" }} // Ensure the background is white
            >
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1735306186/book_dwfhg9.png"
                alt="Providers Icon"
                className="w-8 h-8"
              />
            </div>
            Providers
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            {filteredProviders.length} Providers
          </p>
        </div>

        {/* Search Section */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full max-w-[300px]">
            <input
              type="text"
              placeholder="Find your provider"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none"
            />
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />
          </div>
          <FontAwesomeIcon
            icon={faSlidersH}
            className="text-gray-400 cursor-pointer"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          />
        </div>
      </div>

      {/* Filter Panel */}
      {isFilterOpen && (
        <motion.div
          className={`fixed ${isMobile ? "inset-0" : "absolute top-[205px] right-4 sm:right-8 lg:right-60"} ${isCollapsed ? "mr-[8rem]" : ""} bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-lg ${isMobile ? "w-screen h-screen" : "w-full sm:w-80 lg:w-64"
            } z-50`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base sm:text-lg font-semibold">Filters</h3>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-gray-400 cursor-pointer hover:text-gray-200"
              onClick={() => setIsFilterOpen(false)}
            />
          </div>
          <h4 className="text-sm sm:text-base font-medium mb-2">Sort By</h4>
          <div className="flex flex-wrap gap-2">
            {['A-Z', 'Z-A', 'Hot', 'New'].map((type) => (
              <button
                key={type}
                className={`text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition ${selectedFilter === type
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                onClick={() => handleSort(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

      )}

      {/* Loading and Error Messages */}
      {loading && (
        <motion.p
          className="text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Loading providers...
        </motion.p>
      )}
      {error && (
        <motion.p
          className="text-center text-red-500"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: [0, -5, 5, -5, 0], opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            x: { duration: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        >
          {error}
        </motion.p>
      )}

      {/* Providers Grid */}
      {!loading && !error && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3   gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredProviders.map((provider) => (
            <motion.div
              key={provider.id}
              className="relative p-6 rounded-lg shadow-lg transition-transform flex flex-col justify-between items-start overflow-hidden"
              style={{
                backgroundImage: `url(${provider.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "190px",
              }}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Provider Details */}
              <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="w-[100px] lg:w-[150px] h-auto"
                />
              </div>
              <div className="w-full absolute bottom-4 left-4 flex items-center justify-start">
                {session ? (
                  <button className="flex items-center gap-2 bg-white text-black font-bold py-2 px-4 lg:px-6 rounded-full transition hover:bg-yellow-500 hover:text-black">
                    <FontAwesomeIcon icon={faGamepad} />
                    PLAY
                  </button>
                ) : (
                  <button
                    className="flex items-center gap-2 bg-white text-black font-bold py-2 px-4 lg:px-6 rounded-full transition hover:bg-yellow-500 hover:text-black"
                    onClick={() => setShowSignUpModal(true)}
                  >
                    <FontAwesomeIcon icon={faGamepad} />
                    PLAY
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {showSignUpModal && (
        <SignupModal activeTab="signIn" onClose={() => setShowSignUpModal(false)} />
      )}
    </div>

  );
};

export default Providers;
