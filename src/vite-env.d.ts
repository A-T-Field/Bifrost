/*
 * @FilePath: \Bifrost\src\vite-env.d.ts
 * @Author: maggot-code
 * @Date: 2022-08-24 11:15:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-24 11:20:03
 * @Description:
 */
/// <reference types="vite/client" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
