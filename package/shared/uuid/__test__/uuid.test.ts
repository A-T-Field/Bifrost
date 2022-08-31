/*
 * @FilePath: \Bifrost\package\shared\uuid\__test__\uuid.test.ts
 * @Author: maggot-code
 * @Date: 2022-08-31 17:14:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-31 18:06:42
 * @Description:
 */
import { uuid } from "@pkg/shared/uuid";

describe("UUID", () => {
    test("create", () => {
        const uid = uuid();
        console.log(uid);
        expect(uid);
    });
});
