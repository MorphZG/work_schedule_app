/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "./src/views"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@src": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@misc": path.resolve(__dirname, "./misc"),
      "@variables": path.resolve(__dirname, "./src/styles/utils/variables"),
      "@router": path.resolve(__dirname, "./src/router"),
    },
  },
});
