/*
 * @FilePath: \Bifrost\pkg\Tree\Node\__test__\node.test.ts
 * @Author: maggot-code
 * @Date: 2022-08-25 16:49:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-25 18:14:14
 * @Description:
 */
import TestData from "@pkg/Tree/json/v1.test.json";
import { describe, it } from "vitest";
import { NIL, parse, version, validate, v4 } from "uuid";

const id = v4();

describe("Node", () => {
    it("test", () => {
        const { UAParser } = require("ua-parser-js");
        const ua = UAParser(navigator.userAgent);
        console.log(ua);

        console.log(TestData);
        console.log(id);
        console.log(NIL);
        console.log(parse(id));
        console.log(version(id));
        console.log(validate(id), validate("123"));
    });
});
