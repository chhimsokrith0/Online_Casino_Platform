import type { NextApiRequest, NextApiResponse } from "next";
import virtual from "@/data/virtual";

type virtual = {
    id: number;
    title: string;
    provider: string;
    image: string;
    category: string;
};

type ApiResponse = {
    data: virtual[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    const { category, search } = req.query;

    let filteredvirtual = virtual; // Use the correct variable

    // Filter by category if provided
    if (category && category !== "allGames") {
        filteredvirtual = filteredvirtual.filter(
            (virtual) => virtual.category.toLowerCase() === (category as string).toLowerCase()
        );
    }

    // Filter by search term if provided
    if (search) {
        filteredvirtual = filteredvirtual.filter((virtual) =>
            virtual.title.toLowerCase().includes((search as string).toLowerCase())
        );
    }

    // Prevent caching of the response
    res.setHeader("Cache-Control", "no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json({ data: filteredvirtual });
}
