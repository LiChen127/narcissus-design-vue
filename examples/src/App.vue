<script setup lang='ts'>
import { ref } from 'vue';
const msg = ref('hello world');

</script>

<template>
  <div class="site">
    <h1>组件库测试站点 narcissus-design-vue</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <narcissus-button :msg="msg"></narcissus-button>
  </div>
</template>

<style lang='scss' scoped>
.site {
  padding: 20px;
}
</style>