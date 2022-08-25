/*
 * @FilePath: \Bifrost\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-08-24 11:17:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-25 15:58:03
 * @Description:
 */
/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        autoImport({
            imports: ["vue", "vue-router", "vitest"],
            dts: true,
        }),
    ],
    test: {
        globals: true,
        alias: {
            "@": resolve(__dirname, "src"),
            "@pkg": resolve(__dirname, "pkg"),
        },
    },
});