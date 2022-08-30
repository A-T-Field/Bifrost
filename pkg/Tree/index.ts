/*
 * @FilePath: \Bifrost\pkg\tree\index.ts
 * @Author: maggot-code
 * @Date: 2022-08-24 13:28:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-30 15:51:27
 * @Description:
 */
import { merge } from "@pkg/shared/merge";
const head = {
    a: {
        aa: {
            value: 1,
        },
    },
    b: {},
};
const body = {
    a: {
        aa: {
            val: 1,
        },
    },
    b: {
        bb: {
            value: 2,
        },
    },
};

console.log(merge({}, [head, body, { name: "zz" }]));
console.log(merge({}, head, body, { name: "yy" }));
console.log(merge({}));

export default {};
