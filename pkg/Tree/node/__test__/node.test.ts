/*
 * @FilePath: /Bifrost/pkg/Tree/node/__test__/node.test.ts
 * @Author: maggot-code
 * @Date: 2022-08-28 17:54:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-28 18:06:22
 * @Description: 
 */
import { useNode } from "../usecase/useNode";

describe("node test", () => {
    test("use node", () => {
        const node = useNode();
        console.log(node);
    });
});
