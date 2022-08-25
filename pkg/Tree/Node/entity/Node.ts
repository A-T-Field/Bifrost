/*
 * @FilePath: \Bifrost\pkg\Tree\Node\entity\Node.ts
 * @Author: maggot-code
 * @Date: 2022-08-25 14:46:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-25 17:28:57
 * @Description:
 */
export type Key = string | number;

export interface RawNode {
    key: Key;
    children: Array<RawNode>;
    [key: string]: unknown;
}

export interface TreeNode<R extends RawNode = RawNode> {
    // 要素属性
    readonly key: Key;
    index: number;
    level: number;
    sort: number;
    rawNode: R;
    // 状态属性
    skip: boolean;
    show: boolean;
    hide: boolean;
    usable: boolean;
    unusable: boolean;
    // 关系属性
    parent: TreeNode<R> | null;
    siblings: Array<TreeNode<R>>;
    children: Array<TreeNode<R>>;
    childNumber: number;
    isLeaf: boolean;
    isFirstChild: boolean;
    isLastChild: boolean;
    hasParent: boolean;
    hasSibling: boolean;
    hasChild: boolean;
    hasChildOnlyone: boolean;
}

type StatePick = "skip" | "show" | "hide" | "usable" | "unusable";
type NodeState = Pick<TreeNode<RawNode>, StatePick>;
export interface TreeNodeState extends NodeState {}

type FamilyPick =
    | "isLeaf"
    | "isFirstChild"
    | "isLastChild"
    | "hasParent"
    | "hasSibling"
    | "hasChild"
    | "hasChildOnlyone";
type NodeFamily = Pick<TreeNode<RawNode>, FamilyPick>;
export interface TreeNodeFamily extends NodeFamily {}
