"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH, faGamepad, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSidebar } from "@/components/Sidebar/SidebarContext";
import { useSession } from "next-auth/react";
import SignupModal from "@/components/Navbar/SignUpModal";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Providers");

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
    setSelectedFilter(type);
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

  const filterPanelVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
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
          <Link href="/">{t("home")}</Link>
        </span>{" "}
        <span className="text-gray-500">/</span>{" "}
        <span className="text-white font-semibold">{t("title")}</span>
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
            {t("title")}
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            {filteredProviders.length} {t("title")}
          </p>
        </div>

        {/* Search Section */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full max-w-[300px]">
            <input
              type="text"
              placeholder={t("search")}
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
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="fixed inset-0 flex justify-end z-[200] bg-black bg-opacity-50 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={filterPanelVariants}
          >
            <div className="flex-grow bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)} />
            <div className="bg-black p-4 md:p-6 w-full md:w-[350px] overflow-auto">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex justify-between items-center">
                  <span className="text-t-secondary text-base font-bold">{t("Filters")}</span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-gray-400 cursor-pointer hover:text-gray-200"
                    onClick={() => setIsFilterOpen(false)}
                  />
                </div>
                <div className="w-full h-px bg-horizontal-rule my-2"></div>
                <div className="flex flex-col gap-5">
                  <span className="text-t-secondary text-sm font-bold">{t("SortBy")}</span>
                  <div className="grid grid-cols-2 gap-3">
                    {["A-Z", "Z-A", "Hot", "New"].map((type) => (
                      <button
                        key={type}
                        className={`rounded-full h-[36px] border text-t-secondary text-sm font-semibold px-5 py-2 ${selectedFilter === type
                          ? "bg-yellow-500 text-black"
                          : "bg-third hover:bg-gray-700"
                          }`}
                        onClick={() => handleSort(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading and Error Messages */}
      {loading && (
        <motion.div
          className="flex flex-col items-center justify-center text-gray-400 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <svg
            className="animate-spin h-8 w-8 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <p className="text-center text-gray-400 text-lg font-semibold">
            Loading providers...
          </p>
        </motion.div>
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
