import type { NextApiRequest, NextApiResponse } from "next";
import providers from "@/data/provider";
type Provider = {
    id: number;
    name: string;
    logo: string;
    bgImage: string;
};

type Data = {
    data: Array<Provider>;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Add cache control headers
    res.setHeader('Cache-Control', 'no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    res.status(200).json({
        data: providers
    });
}