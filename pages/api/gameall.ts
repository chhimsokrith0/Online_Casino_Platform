import type { NextApiRequest, NextApiResponse } from "next";
import gameall from "@/data/gameall";

type Gameall = {
    id: number;
    title: string;
    provider: string;
    image: string;
    category: string;
};

type ApiResponse = {
    data: Gameall[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    const { category, search } = req.query;

    let filteredGameall = gameall; // Use the correct variable

    // Filter by category if provided
    if (category) {
        filteredGameall = filteredGameall.filter(
            (gameall) => gameall.category.toLowerCase() === (category as string).toLowerCase()
        );
    }

    // Filter by search term if provided
    if (search) {
        filteredGameall = filteredGameall.filter((slot) =>
            slot.title.toLowerCase().includes((search as string).toLowerCase())
        );
    }

    // Prevent caching of the response
    res.setHeader("Cache-Control", "no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json({ data: filteredGameall });
}
