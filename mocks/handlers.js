import { http } from "msw";
import provider from "@/data/provider";
import slots from "@/data/slots";
import liveCasino from "@/data/liveCasino";
import sport from "@/data/sport";
import virtual from "@/data/virtual";
import fishing from "@/data/fishing";
import crash from "@/data/crash";

export const handlers = [
  http.get("/api/provider", () => {
    console.log("[MSW] Serving provider data", provider);
    return new Response(
      JSON.stringify(provider),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
  http.get("/api/providerHome", () => {
    console.log("[MSW] Serving provider data", provider);
    return new Response(
      JSON.stringify(provider),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
  http.get("/api/slots", () => {
    console.log("[MSW] Serving provider data", slots);
    return new Response(
      JSON.stringify(slots),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
  http.get("/api/liveCasino", () => {
    console.log("[MSW] Serving provider data", liveCasino);
    return new Response(
      JSON.stringify(liveCasino),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
  http.get("/api/sport", () => {
    console.log("[MSW] Serving provider data", sport);
    return new Response(
      JSON.stringify(sport),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
  http.get("/api/virtual", () => {
    console.log("[MSW] Serving provider data", virtual);
    return new Response(
      JSON.stringify(virtual),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
  http.get("/api/fishing", () => {
    console.log("[MSW] Serving fishing data", fishing);
    return new Response(
      JSON.stringify(fishing),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
  http.get("/api/crash", () => {
    console.log("[MSW] Serving crash data", crash);
    return new Response(
      JSON.stringify(crash),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
];
