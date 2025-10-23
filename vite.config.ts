// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/", // ✅ correct for Netlify (serves from root)
  build: {
    outDir: "dist", // ✅ Netlify expects your build here
    assetsDir: "assets", // keeps assets organized
  },
  server: {
    port: 5173, // optional (for local dev)
  },
});
