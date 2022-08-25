/*
 * @FilePath: \Bifrost\pkg\Tree\entity\Gather.ts
 * @Author: maggot-code
 * @Date: 2022-08-25 15:34:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-25 15:36:20
 * @Description:
 */
import { Key, RawNode, TreeNode } from "./Node";

export type TreeNodeMap<R extends RawNode> = Map<Key, TreeNode<R>>;
