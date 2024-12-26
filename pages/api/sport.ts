import type { NextApiRequest, NextApiResponse } from "next";
import sport from "@/data/sport";

type sport = {
    id: number;
    title: string;
    provider: string;
    image: string;
    category: string;
};

type ApiResponse = {
    data: sport[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    const { category, search } = req.query;

    let filteredsport = sport; // Use the correct variable

    // Filter by category if provided
    if (category && category !== "allGames") {
        filteredsport = filteredsport.filter(
            (sport) => sport.category.toLowerCase() === (category as string).toLowerCase()
        );
    }

    // Filter by search term if provided
    if (search) {
        filteredsport = filteredsport.filter((sport) =>
            sport.title.toLowerCase().includes((search as string).toLowerCase())
        );
    }

    // Prevent caching of the response
    res.setHeader("Cache-Control", "no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json({ data: filteredsport });
}
