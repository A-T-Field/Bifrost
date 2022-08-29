/*
 * @FilePath: \Bifrost\pkg\Tree\node\RawNode.ts
 * @Author: maggot-code
 * @Date: 2022-08-29 09:49:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-29 11:23:24
 * @Description:
 */
import { IRawNode } from "./shared/interface";
import { v4 as uuidv4 } from "uuid";

export function RawNode(): IRawNode {
    const id = uuidv4();
    return { id };
}

export default RawNode;
