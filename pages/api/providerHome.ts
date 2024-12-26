import type { NextApiRequest, NextApiResponse } from "next";

type Provider = {
    id: number;
    name: string;
    logo: string;
    bgImage: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ providers: Provider[] }>
) {
    // Add cache control headers
    res.setHeader("Cache-Control", "no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json({
        providers: [
            {
                id: 1,
                name: "Pocket Games Soft",
                logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658618/33_vcxs69.png",
                bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658486/4_f0lfcu.webp",
            },
            {
                id: 2,
                name: "Joker",
                logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658617/32_xzivzf.png",
                bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658498/32_c3um9v.webp",
            },
            {
                id: 3,
                name: "JILI",
                logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658617/31_k7wnn3.png",
                bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658497/30_usqbvj.webp",
            },
            {
                id: 4,
                name: "Pragmatic Play",
                logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658615/30_cqhp6w.png",
                bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658493/23_ywfkwj.webp",
            },
            {
                id: 5,
                name: "Habanero",
                logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658612/28_vsuioj.png",
                bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658496/29_izpqf9.webp",
            },
            {
                id: 6,
                name: "SA Gaming",
                logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
                bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658493/24_d9x0wc.webp",
            },
            {
                id: 7,
                name: "SA Gaming",
                logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
                bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658492/21_kyhfei.webp",
            },
            {
                id: 8,
                name: "SA Gaming",
                logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
                bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658491/20_kdriue.webp",
            },
        ],
    });
}
