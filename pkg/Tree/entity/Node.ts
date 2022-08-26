export type Key = string | number;

export enum Kind {
    BASIC_NODE = 0,
    ROOT_NODE = 1,
    TREE_NODE = 2,
    STATE_NODE = 3,
}

export interface BasicNode {
    readonly kind: Kind.BASIC_NODE;
    id: Key;
    pid?: Key;
    children?: BasicNode[];
    [key: string]: unknown;
}

export interface TreeNode {
    readonly kind: Kind.TREE_NODE;
    readonly key: Key;
    parent: TreeNode | RootNode;
    children?: TreeNode[];
    siblings?: TreeNode[];
    isLeaf?: boolean;
    isFirstChild?: boolean;
    isLastChild?: boolean;
    hasChild?: boolean;
    hasChildOnlyone?: boolean;
}

export interface StateNode {
    readonly kind: Kind.STATE_NODE;
    skip?: boolean;
    show?: boolean;
    hide?: boolean;
    usable?: boolean;
    unusable?: boolean;
}

export type RootNode = Omit<
    TreeNode,
    "kind" | "parent" | "siblings" | "isLeaf" | "isFirstChild" | "isLastChild"
> & {
    readonly kind: Kind.ROOT_NODE;
};
