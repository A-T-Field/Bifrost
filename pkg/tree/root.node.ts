/*
 * @FilePath: \Bifrost\pkg\tree\root.node.ts
 * @Author: maggot-code
 * @Date: 2022-08-30 14:56:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-30 15:44:29
 * @Description:
 */
import { RootNode } from "./interface";
import { toKind } from "./shared";
import { merge } from "@pkg/shared/merge";
import { v4 as uuidv4 } from "uuid";

export function setupRootNode(): RootNode {
    const key = uuidv4();

    return {};
}

export default setupRootNode;
