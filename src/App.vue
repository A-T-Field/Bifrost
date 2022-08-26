<!--
 * @FilePath: \Bifrost\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-08-24 11:15:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-26 09:42:41
 * @Description: 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from "vue";
import { UAParser } from "ua-parser-js";

onMounted(() => {
    // UAParser
    const ua = new UAParser(navigator.userAgent);
    console.log(ua.getResult());
})
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
