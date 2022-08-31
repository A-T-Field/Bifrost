/*
 * @FilePath: \Bifrost\pkg\tree\root.node.ts
 * @Author: maggot-code
 * @Date: 2022-08-30 14:56:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-31 14:22:16
 * @Description:
 */
import { v4 as uuidv4 } from "uuid";
import { KindNode } from "./enum";
import { RootNode } from "./interface";

const kind = KindNode.ROOT_NODE;

export function createRootNode(): RootNode {
    const key = uuidv4();

    return { kind, key };
}

export default createRootNode;
