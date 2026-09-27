// Vite development and build settings. React support is enabled below.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/portfolio/' when hosted under that path, or '/' for a domain root.
  base: "/",
});
