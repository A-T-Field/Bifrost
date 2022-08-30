/*
 * @FilePath: \Bifrost\pkg\tree\shared.ts
 * @Author: maggot-code
 * @Date: 2022-08-30 14:58:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-30 14:59:09
 * @Description:
 */
import { KindNode } from "./enum";

export function toKind(kind: KindNode) {
    return { kind };
}
