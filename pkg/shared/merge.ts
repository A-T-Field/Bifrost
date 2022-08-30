/*
 * @FilePath: \Bifrost\pkg\shared\merge.ts
 * @Author: maggot-code
 * @Date: 2022-08-30 14:59:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-30 16:01:01
 * @Description: 从 formily 复制过来的
 * https://github.com/alibaba/formily/blob/formily_next/packages/shared/src/merge.ts
 */
const assign = Object.assign;
export function deepmerge(target: object, ...source: Array<object>) {
    if (source.length <= 0) return target;
    // 扁平数组
    source = source.flat(1);

    return {};
}

export const merge = deepmerge;
export default deepmerge;
