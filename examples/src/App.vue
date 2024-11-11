<script setup lang='ts'>
import { useRoute } from 'vue-router';
const route = useRoute();
const currentPath = route.fullPath;
</script>

<template>
  <div class="site">
    <h1 v-if="!currentPath">组件库测试站点 narcissus-design-vue</h1>
    <!-- <hr> -->
    <RouterView v-else/>
  </div>
</template>

<style lang='scss' scoped>
.site {
  padding: 10px;
}

.test-btns {
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex: 1;

  & > button {
    margin-right: 15px;
  }
}
</style>
