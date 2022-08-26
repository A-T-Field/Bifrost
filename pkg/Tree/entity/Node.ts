export type Key = string | number;

export enum Kind {
    RAW_NODE = -1,
    BASIC_NODE = 0,
    ROOT_NODE = 1,
    TREE_NODE = 2,
    STATE_NODE = 3,
}

export interface RawNode {
    readonly kind: Kind.RAW_NODE;
}

export interface BasicNode {
    readonly kind: Kind.BASIC_NODE;
}

export interface RootNode {
    readonly kind: Kind.ROOT_NODE;
}

export interface TreeNode {
    readonly kind: Kind.TREE_NODE;
}

export interface StateNode {
    readonly kind: Kind.STATE_NODE;
}
