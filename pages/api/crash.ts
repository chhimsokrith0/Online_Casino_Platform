import type { NextApiRequest, NextApiResponse } from "next";
import crash from "@/data/crash";

type crash = {
    id: number;
    title: string;
    provider: string;
    image: string;
    category: string;
};

type ApiResponse = {
    data: crash[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    const { category, search } = req.query;

    let filteredcrash = crash; // Use the correct variable

    // Filter by category if provided
    if (category && category !== "allGames") {
        filteredcrash = filteredcrash.filter(
            (crash) => crash.category.toLowerCase() === (category as string).toLowerCase()
        );
    }

    // Filter by search term if provided
    if (search) {
        filteredcrash = filteredcrash.filter((crash) =>
            crash.title.toLowerCase().includes((search as string).toLowerCase())
        );
    }

    // Prevent caching of the response
    res.setHeader("Cache-Control", "no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json({ data: filteredcrash });
}
