/*
 * @FilePath: /Bifrost/package/shared/uuid/__test__/uuid.test.ts
 * @Author: maggot-code
 * @Date: 2022-09-01 23:42:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-09-02 00:43:14
 * @Description: 
 */
import {
    uuid,
    isUUID,
    notUUID,
    hasUUID,
    toClean,
    toFormat
} from "../index";

describe("UUID", () => {
    const uid = uuid();

    test("log", () => {
        console.log(uid);
    });

    test("is uuid", () => {
        expect(isUUID(uid)).toBe(true);
    });

    test("not uuid", () => {
        expect(notUUID(uid)).toBe(false);
    });

    test("has uuid", () => {
        const [value,error] = hasUUID(uid);
        expect(value).toBe(uid.value);
        expect(error).toBe(true);
    });

    test("to clean", () => {
        expect(toClean(uid)).toBe(uid.value.split("-").join(""));
    });
    
    test("to format", () => {
        expect(toFormat(uid)).toBe(uid.value.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5"));
    });
});
