import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// http://localhost:3001
// https://vitejs.dev/config/

// "/api": {
//         target: "https://stay-tuned-radio-server.onrender.com",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      api: "https://stay-tuned-radio-server.onrender.com",
    },
  },
});
