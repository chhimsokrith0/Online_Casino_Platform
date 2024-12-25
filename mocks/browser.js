import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
export const worker = typeof window !== 'undefined' 
  ? setupWorker(...handlers)
  : null;