import { http } from "msw";
import provider from "@/data/provider";

export const handlers = [
  http.get("/api/provider", () => {
    console.log("[MSW] Request intercepted for /api/provider");
    const responseData = { data: provider };
    console.log("[MSW] Responding with:", responseData);
    
    return new Response(
      JSON.stringify(responseData),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        },
      }
    );
  }),
];
