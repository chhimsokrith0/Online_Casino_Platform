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
    // Extract the query parameter
    const { name } = req.query;

    // Filter providers based on the `name` query parameter
    const filteredProviders = name
        ? providers.filter(provider =>
            provider.name.toLowerCase().includes((name as string).toLowerCase())
        )
        : providers;

    // Add cache control headers
    res.setHeader('Cache-Control', 'no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.status(200).json({
        data: filteredProviders,
    });
}
