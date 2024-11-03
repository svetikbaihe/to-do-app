import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      typescript: true,
    },
    esbuildOptions: {
      loader: "tsx",
    },
    include: "**/*.svg?react",
  }),],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@constants": path.resolve("src/constants"),
      "@components": path.resolve("src/components"),
      "@elements": path.resolve("src/elements"),
      "@modules": path.resolve("src/modules"),
      "@pages": path.resolve("src/pages"),
      "@utils": path.resolve("src/utils"),
      "@services": path.resolve("src/services"),
      "@state": path.resolve("src/state"),
      "@theme": path.resolve("src/theme"),
      "@mock": path.resolve("src/mock"),
      "@router": path.resolve("src/router"),
      "@assets": path.resolve("src/assets"),
      "@app": path.resolve("src/app"),
      "@hooks": path.resolve("src/hooks"),
    },
  },
});
