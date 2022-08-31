/*
 * @FilePath: \Bifrost\pkg\tree\index.ts
 * @Author: maggot-code
 * @Date: 2022-08-24 13:28:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-31 15:55:20
 * @Description:
 */
import TestData from "./json/v1.test.json";

import { createTree } from "./tree";

const tree = createTree();
console.log(tree);

export default {};
