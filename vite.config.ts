import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: "REACT_APP_",
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3000,
  },
});

// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react-swc";

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')

//   return {
//     plugins: [react()],
//     // vite config
//     define: {
//       ...Object.keys(env).reduce((prev, key) => {
//         const sanitizedKey = key.replace(/[^a-zA-Z0-9_]/g, "_");

//         prev[`process.env.${sanitizedKey}`] = JSON.stringify(env[key]);

//         return prev;
//       }, {}),
//     },
//   }
// })
