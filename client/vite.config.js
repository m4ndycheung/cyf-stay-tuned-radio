import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const url = import.meta.env.VITE_SERVER_URL

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: url,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
