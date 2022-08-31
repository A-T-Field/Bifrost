/*
 * @FilePath: \Bifrost\package\shared\uuid\index.ts
 * @Author: maggot-code
 * @Date: 2022-08-31 16:03:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-31 18:05:00
 * @Description:
 */
import { v4 as uuidv4 } from "uuid";

export type Key = string | number;
export type ToEqual = (uuid: UUID) => boolean;
export abstract class UUID {
    readonly value: Key;
    public toEqual: ToEqual;
}

export function useUUID(): UUID {
    const value: Key = uuidv4();
    const toEqual: ToEqual = (uuid) => {
        return uuid.value === value;
    };

    return {
        value,
        toEqual,
    };
}

export default {};
