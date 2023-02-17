import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";
import globalData from "@/style/global.less";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [/\.ts$/, /\.vue$/],
      imports: ["vue", "vue-router"],
      dts: "./types/auto-imports.d.ts",
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: globalData,
      },
    },
  },

  server: {
    proxy: {
      "/api": "https://pokeapi.co/",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
