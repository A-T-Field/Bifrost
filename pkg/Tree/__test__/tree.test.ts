/*
 * @FilePath: /Bifrost/pkg/Tree/__test__/tree.test.ts
 * @Author: maggot-code
 * @Date: 2022-08-28 00:47:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-28 01:26:59
 * @Description: 
 */
import v1 from "@pkg/Tree/json/v1.test.json";
import { useTree } from "@pkg/Tree/usecase/tree";

describe("Tree", () => {
    it("use tree", () => {
        const {setupTree} = useTree();
        const tree = setupTree(v1);
        console.log(tree);
    });
});
