/*
 * @FilePath: \Bifrost\pkg\tree\node\__test__\root.node.test.ts
 * @Author: maggot-code
 * @Date: 2022-08-29 10:53:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-29 11:09:41
 * @Description:
 */
import { RootNode } from "../RootNode";

describe("root node test", () => {
    test("create root node", () => {
        const rootnode = RootNode();
        console.log(rootnode);
    });
});

export default {};
