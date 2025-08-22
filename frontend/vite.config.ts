import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    // NOTE: This is now set to 5000.
    // Ensure your backend is running on a DIFFERENT port to avoid conflicts.
    port: 5000,
    // Proxy configuration to redirect /api requests
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Example: Backend now on 5001
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    // Your path alias
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
