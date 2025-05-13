import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "/aym-custom-react-hooks/",
  root: resolve(__dirname, "src/app"),
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
  },
  build: {
    outDir: resolve(__dirname, "dist/aym-custom-react-hooks/"),
    rollupOptions: {
      input: [
        resolve(__dirname, "src/app/index.html"),
        ...["useToggle", "useDebounce"].map((page) => resolve(__dirname, `src/app/${page}/index.html`)),
      ],
    },
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
