import type { NextApiRequest, NextApiResponse } from "next";
import liveCasino from "@/data/liveCasino";

type liveCasino = {
    id: number;
    title: string;
    provider: string;
    image: string;
    category: string;
};

type ApiResponse = {
    data: liveCasino[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    const { category, search } = req.query;

    let filteredliveCasino = liveCasino; // Use the correct variable

    // Filter by category if provided
    if (category && category !== "allGames") {
        filteredliveCasino = filteredliveCasino.filter(
            (liveCasino) => liveCasino.category.toLowerCase() === (category as string).toLowerCase()
        );
    }

    // Filter by search term if provided
    if (search) {
        filteredliveCasino = filteredliveCasino.filter((liveCasino) =>
            liveCasino.title.toLowerCase().includes((search as string).toLowerCase())
        );
    }

    // Prevent caching of the response
    res.setHeader("Cache-Control", "no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json({ data: filteredliveCasino });
}
