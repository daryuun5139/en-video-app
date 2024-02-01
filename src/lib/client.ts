import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "depehd8n92",
  apiKey: process.env.API_KEY || "",
});
