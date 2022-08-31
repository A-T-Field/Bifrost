/*
 * @FilePath: \Bifrost\pkg\tree\node.ts
 * @Author: maggot-code
 * @Date: 2022-08-30 14:50:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-31 15:14:30
 * @Description:
 */
import { v4 as uuidv4 } from "uuid";
import { KindNode } from "./enum";
import { RootNode, Node, SetupMeta } from "./interface";

const kind = KindNode.NODE;

export function createNode(root: RootNode): Node {
    const key = uuidv4();
    const meta = {};
    const setupMeta: SetupMeta = (raw) => merge(meta, raw);

    return {
        kind,
        key,
        root,
        parent: root,
        meta,
        setupMeta,
    };
}

export default createNode;
