/*
 * @FilePath: \Bifrost\pkg\tree\tree.ts
 * @Author: maggot-code
 * @Date: 2022-08-31 15:09:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-31 15:57:17
 * @Description:
 */
import { v4 as uuidv4 } from "uuid";
import { Tree } from "./interface";

export function createTree(): Tree {
    const key = uuidv4();

    return {
        key,
    };
}

export default createTree;
