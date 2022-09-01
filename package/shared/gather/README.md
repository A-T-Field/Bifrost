# gather
```javascript
import { defineGather, pluginGather } from "gather";
import { defineTree } from "tree";

const database = [
    {
        id:11,
        pid:0,
        title:"系统管理"
    },
    {
        id:111,
        pid:11,
        title:"负载管理"
    },
    {
        id:112,
        pid:11,
        title:"健康管理"
    }
];

const setupTitle = pluginGather((node, config) => {
    const { title } = node;
    return title.length <= 0 ? "未命名标题" : title;
});
const setupIcon = pluginGather((node, config) => {
    const { icon } = node;
    return icon ? icon : "icon-fill";
});
const setupIsIcon = pluginGather((node, config) => {
    const { icon } = node;
    return icon === "icon-fill" ? false : true;
});

const { gather, create } = defineGather({
    plugins:[setupTitle, setupIcon, setupIsIcon]
});

const data = create(database);
console.log(data);
console.log(gather); // data === gather

// =====================================================

const setupHasChild = pluginGather((node,config) => {
    const {children} = node;
    return Array.isArray(children) && children.length > 0;
});
const tree = defineTree({
    plugins:[setupHasChild]
});
const { gather, create } = defineGather({
    extends:[tree],
    plugins:[setupTitle, setupIcon, setupIsIcon],
});
const tree = create(database);
console.log(tree);
console.log(gather); // tree === gather;
```
## 需求
