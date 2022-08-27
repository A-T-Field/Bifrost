/*
 * @FilePath: /Bifrost/pkg/Tree/usecase/tree.ts
 * @Author: maggot-code
 * @Date: 2022-08-28 00:55:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-28 00:56:52
 * @Description: 
 */
export function useTree() {
    function setupTree(datasource: any) {
        console.log(datasource);
        return [];
    }
    return {
        setupTree
    }
}

export default useTree;
