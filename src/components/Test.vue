<!--
 * @FilePath: /Bifrost/src/components/Test.vue
 * @Author: maggot-code
 * @Date: 2022-08-29 11:03:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-09-04 23:03:28
 * @Description: 
-->
<script setup lang='ts'>
import {OperatorFunction,Observable,lastValueFrom,map} from "rxjs";

// service
function getNumber():Promise<number>{
    const number = Math.random();
    return new Promise((resolve)=>{
        // setTimeout(()=>resolve(number),1000);
        resolve(number)
    })
}

// bff
// [biz]
const toFixed3 :OperatorFunction<number,number> = (value) => {
    return value.pipe(map((value)=>Number(value.toFixed(3))));
}
// [biz]
const toUnit:OperatorFunction<number,string> = (value) => {
    return value.pipe(map((value)=>`${value}元`));
}
// [gather]
async function requestNumber(){
    const res = await getNumber();
    return new Observable<number>((subscriber)=>{
        subscriber.next(res);
        subscriber.complete();
        return subscriber;
    }).pipe(toFixed3,toUnit);
}

// interface (to vue)
function useNumber(){
    const number = ref<string | number>(0);
    async function handler(){
        number.value = await lastValueFrom(await requestNumber());

        console.log(unref(number));
    }
    return {
        value:number,
        handler
    };
}

// application
const {value,handler} = useNumber();

// view
onMounted(()=>{
    handler();
});
</script>

<template>
    <h1 @click="handler">Test</h1>
    <p>{{value}}</p>
</template>

<style scoped lang='scss'>
</style>
