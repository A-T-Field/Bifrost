/*
 * @FilePath: \Bifrost\package\shared\uuid\index.ts
 * @Author: maggot-code
 * @Date: 2022-08-31 16:03:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-31 17:12:12
 * @Description:
 */
import { v4 as uuidv4 } from "uuid";

export type Key = string | number;

export function useUUID() {
    const value: Key = uuidv4();

    return {
        value,
    };
}

export default {};
