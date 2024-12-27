import type { NextApiRequest, NextApiResponse } from "next";
import rtpslot from "@/data/rtpslot";

type RTPSlot = {
  id: number;
  title: string;
  provider: string;
  image: string; // Ensure this matches the frontend
  category: string;
  percentage: string;
};

type ApiResponse = {
  data: RTPSlot[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  const { category, search } = req.query;

  let filteredSlots = rtpslot.map((slot) => ({
    ...slot,
    image: slot.image.src, // Convert `image` object to string
  }));

  // Filter by category if provided
  if (category && category !== "allGames") {
    filteredSlots = filteredSlots.filter(
      (slot) => slot.category.toLowerCase() === (category as string).toLowerCase()
    );
  }

  // Filter by search term if provided
  if (search) {
    filteredSlots = filteredSlots.filter((slot) =>
      slot.title.toLowerCase().includes((search as string).toLowerCase())
    );
  }

  // Prevent caching of the response
  res.setHeader("Cache-Control", "no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  res.status(200).json({ data: filteredSlots });
}
