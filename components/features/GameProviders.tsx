"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import HorizontalScroller from "./HorizontalScroller"; // Import the HorizontalScroller component
import "./style.css";

type Provider = {
    id: number;
    name: string;
    logo: string;
    bgImage: string;
};

const GameProviders: React.FC = () => {
    const [gameProviders, setGameProviders] = useState<Provider[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch("/api/providerHome");

                if (!response.ok) {
                    throw new Error("Failed to fetch providers");
                }

                const data = await response.json();

                if (data && Array.isArray(data.providers)) {
                    setGameProviders(data.providers);
                } else {
                    throw new Error("Unexpected API response format");
                }
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching providers");
            } finally {
                setLoading(false);
            }
        };

        fetchProviders();
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-yellow-500">🏢</span>
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
                        Game Providers
                    </h2>
                </div>
                <Link
                    href="/Games/providers"
                    className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition"
                >
                    <span>See All</span>
                    <span className="font-bold">➤</span>
                </Link>
            </div>

            {/* Loading and Error Handling */}
            {loading && (
                <p className="text-center text-gray-400 animate-fade-in">
                    Loading providers...
                </p>
            )}
            {error && (
                <p className="text-center text-red-500 animate-shake">
                    {error}
                </p>
            )}

            {/* HorizontalScroller Component */}
            {!loading && !error && gameProviders.length > 0 && (
                <HorizontalScroller gameProviders={gameProviders} />
            )}
        </div>
    );
};

export default GameProviders;
