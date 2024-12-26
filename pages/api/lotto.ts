import type { NextApiRequest, NextApiResponse } from "next";
import lotto from "@/data/lotto";

type lotto = {
    id: number;
    title: string;
    provider: string;
    image: string;
    category: string;
};

type ApiResponse = {
    data: lotto[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    const { category, search } = req.query;

    let filteredlotto = lotto; // Use the correct variable

    // Filter by category if provided
    if (category && category !== "allGames") {
        filteredlotto = filteredlotto.filter(
            (lotto) => lotto.category.toLowerCase() === (category as string).toLowerCase()
        );
    }

    // Filter by search term if provided
    if (search) {
        filteredlotto = filteredlotto.filter((lotto) =>
            lotto.title.toLowerCase().includes((search as string).toLowerCase())
        );
    }

    // Prevent caching of the response
    res.setHeader("Cache-Control", "no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json({ data: filteredlotto });
}
