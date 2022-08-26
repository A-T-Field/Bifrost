/*
 * @FilePath: \Bifrost\pkg\Tree\__test__\node.test.ts
 * @Author: maggot-code
 * @Date: 2022-08-26 16:50:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-26 17:54:11
 * @Description:
 */
import { describe, it } from "vitest";
import { v4 as uuidv4 } from "uuid";
import v1 from "@pkg/Tree/json/v1.test.json";
import v2 from "@pkg/Tree/json/v2.test.json";
import v3 from "@pkg/Tree/json/v3.test.json";

describe("Test Node", () => {
    it("node entity", () => {
        console.log("node entity");
        console.log(uuidv4());
    });

    it.skip("test data", () => {
        console.log(v1);
        console.log(v2);
        console.log(v3);
    });
});
