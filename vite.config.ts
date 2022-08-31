/*
 * @FilePath: \Bifrost\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-08-24 11:17:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-31 16:01:32
 * @Description:
 */
/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";

const importsLodash = ["isArray", "toArray", "cloneDeep", "merge"];

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".proto"],
        dedupe: ["vue"],
        alias: {
            "@": resolve(__dirname, "src"),
            "@pkg": resolve(__dirname, "package"),
        },
        preserveSymlinks: false,
    },
    plugins: [
        vue(),
        autoImport({
            imports: [
                "vue",
                "vue-router",
                "vitest",
                {
                    "lodash-es": importsLodash,
                },
            ],
            dts: true,
        }),
    ],
    test: {
        globals: true,
        environment: "jsdom",
        alias: {
            "@": resolve(__dirname, "src"),
            "@pkg": resolve(__dirname, "package"),
        },
    },
});
