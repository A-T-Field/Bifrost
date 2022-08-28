/*
 * @FilePath: /Bifrost/pkg/Tree/node/usecase/useNode.ts
 * @Author: maggot-code
 * @Date: 2022-08-28 17:51:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-28 18:07:34
 * @Description: 
 */
import { Key,Node } from "../entity/Node";
import {v4 as uuidv4} from "uuid";

export function useNode(): Node {
    const key: Key = uuidv4();
    console.log(key);
    console.log(11);

    return {
        key
    };
}

export default useNode;
