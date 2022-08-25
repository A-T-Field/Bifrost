/*
 * @FilePath: \Bifrost\pkg\Tree\__test__\index.test.ts
 * @Author: maggot-code
 * @Date: 2022-08-25 15:54:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-25 16:10:09
 * @Description:
 */
import { test, expect } from "vitest";

function genNumber(min: number, max: number): number[] {
    const result: number[] = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

test("hello vitest", () => {
    expect(1).toBe(1);
    console.log(11);

    expect(genNumber(2, 20)).toMatchInlineSnapshot(`
      [
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
      ]
    `);
});
