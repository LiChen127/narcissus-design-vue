<script setup lang='ts'>
import { ref } from 'vue';
const disabled = ref(true)
// const
</script>

<template>
  <div class="site">
    <h1>组件库测试站点 narcissus-design-vue</h1>
    <hr>
    <div class="test-btns">
      <narcissus-button :disabled="disabled">Default</narcissus-button>
      <narcissus-button>Default</narcissus-button>
      <narcissus-button type="primary">Primary</narcissus-button>
      <narcissus-button type="primary" :disabled="disabled">Primary</narcissus-button>
      <narcissus-button type="dashed">Dashed</narcissus-button>
      <narcissus-button type="dashed" :disabled="disabled">Dashed</narcissus-button>
      <narcissus-button type="warn">Warn</narcissus-button>
      <narcissus-button type="warn" :disabled="disabled">Warn</narcissus-button>
      <narcissus-button type="error">Error</narcissus-button>
      <narcissus-button type="error" :disabled="disabled">Error</narcissus-button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.site {
  padding: 20px;
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
