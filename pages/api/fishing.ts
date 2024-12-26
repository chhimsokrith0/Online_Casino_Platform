import type { NextApiRequest, NextApiResponse } from "next";
import fishing from "@/data/fishing";

type fishing = {
    id: number;
    title: string;
    provider: string;
    image: string;
    category: string;
};

type ApiResponse = {
    data: fishing[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    const { category, search } = req.query;

    let filteredfishing = fishing; // Use the correct variable

    // Filter by category if provided
    if (category && category !== "allGames") {
        filteredfishing = filteredfishing.filter(
            (fishing) => fishing.category.toLowerCase() === (category as string).toLowerCase()
        );
    }

    // Filter by search term if provided
    if (search) {
        filteredfishing = filteredfishing.filter((fishing) =>
            fishing.title.toLowerCase().includes((search as string).toLowerCase())
        );
    }

    // Prevent caching of the response
    res.setHeader("Cache-Control", "no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json({ data: filteredfishing });
}
