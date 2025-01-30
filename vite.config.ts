import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "brotliCompress", ext: ".br" }), // Brotli compression
    compression({ algorithm: "gzip", ext: ".gz" }), // Gzip compression
    imagetools(), // Image optimizations
  ],
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false, // Avoid large source maps in production
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0];
          }
        },
        assetFileNames: (assetInfo) => {
          if (/\.(woff2|woff|ttf)$/.test(assetInfo.name ?? "")) {
            return "fonts/[name]-[hash][extname]"; // Cache fonts efficiently
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    hmr: true,
    headers: {
      "Cache-Control": "max-age=31536000, immutable",
    },
    proxy: {
      "/tiktok": {
        target: "https://api-tiktokdownloader-dev.prach.org",
        changeOrigin: true, // To make the target server think the request is coming from itself
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq, req) => {
            const fullUrl = proxyReq.protocol + "//" + proxyReq.host + req.url;
            console.log("Full Proxy URL:", fullUrl);
          });
        },
      },
    },
  },
});
