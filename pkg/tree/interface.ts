/*
 * @FilePath: \Bifrost\pkg\tree\interface.ts
 * @Author: maggot-code
 * @Date: 2022-08-30 13:26:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-30 14:53:37
 * @Description:
 */
import { KindNode } from "./enum";

export type Key = string | number;

export type RawNode = {
    id?: Key;
    pid?: Key;
    children?: RawNodes;
    [key: string]: unknown;
};
export type RawNodes = Array<RawNode>;
export type RawNodeProps = RawNode | RawNodes;

export abstract class BasicNode {
    readonly kind: KindNode;
    readonly key: Key;
    [key: string]: unknown;
}

export abstract class RootNode extends BasicNode {
    declare readonly kind: KindNode.ROOT_NODE;
}

export abstract class Node extends BasicNode {
    declare readonly kind: KindNode.NODE;
    root: RootNode;
    parent: BasicNode;
}

export default {};
