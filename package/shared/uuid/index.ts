/*
 * @FilePath: /Bifrost/package/shared/uuid/index.ts
 * @Author: maggot-code
 * @Date: 2022-09-01 22:58:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-09-02 00:48:52
 * @Description: 
 * 91333e2a-1929-41ef-a65b-e102bfa3e3cf
 * 00000000-0000-0000-0000-000000000000
 */
import { v4 as uuidv4, NIL } from "uuid";
import { Common } from "@pkg/shared/enum/kind";

export type KeyValue = string | number;
export type UUIDValue = string;
export type HasUUID = [UUIDValue,boolean];
export abstract class UUID {
    readonly kind: Common.UUIDV4;
    readonly value: UUIDValue;
}

export function isUUID(uuid:UUID): boolean {
    return uuid?.kind === Common.UUIDV4;
}

export function notUUID(uuid: UUID): boolean {
    return !isUUID(uuid);
}

export function hasUUID(uuid: UUID): HasUUID {
    const state = isUUID(uuid);
    const value = state ? uuid.value : NIL;
    return [value,state];
}

export function toClean(uuid: UUID): UUIDValue {
    const [value,error] = hasUUID(uuid);

    if (!error) console.warn(`${uuid} is not a UUID`);

    return value.split("-").join("");
}

export function toFormat(uuid: UUID): UUIDValue {
    const [value,error] = hasUUID(uuid);

    if (!error) console.warn(`${uuid} is not a UUID`);

    return value.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5");
}

export function uuid(): UUID {
    const value = uuidv4();

    return {
        kind: Common.UUIDV4,
        value,
    };
}

export default uuid;
