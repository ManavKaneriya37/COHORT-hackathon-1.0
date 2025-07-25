import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy"; // No tailwindcss plugin needed here

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/_redirects", // Make sure the file exists at this path
          dest: ".", // This puts it in root of dist/
        },
      ],
    }),
  ],
  build: {
    outDir: "dist",
  },
});
