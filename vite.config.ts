/*
 * @FilePath: \Bifrost\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-08-24 11:17:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-24 11:31:22
 * @Description:
 */
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    test: {},
});
