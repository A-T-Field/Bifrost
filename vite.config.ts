/*
 * @FilePath: \Bifrost\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-08-24 11:17:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-09-23 10:53:49
 * @Description:
 */
/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";

const alias = {
    "@": resolve(__dirname, "src"),
    "@pkg": resolve(__dirname, "package"),
};
const importsLodash = ["isArray", "toArray", "cloneDeep", "merge"];

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".proto"],
        dedupe: ["vue"],
        alias,
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
        alias,
    },
});
