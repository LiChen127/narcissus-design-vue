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
      <narcissus-button loading="true">Default</narcissus-button>
      <narcissus-button type="primary" loading="true">Primary</narcissus-button>
      <narcissus-button type="primary" :disabled="disabled" loading="true">Primary</narcissus-button>
      <narcissus-button type="dashed" loading="true">Dashed</narcissus-button>
      <narcissus-button type="dashed" :disabled="disabled" loading="true">Dashed</narcissus-button>
      <narcissus-button type="warn" loading="true">Warn</narcissus-button>
      <narcissus-button type="warn" :disabled="disabled" loading="true">Warn</narcissus-button>
      <narcissus-button type="error" loading="true">Error</narcissus-button>
      <narcissus-button type="error" :disabled="disabled" loading="true">Error</narcissus-button>
      <narcissus-button type="error" :disabled="disabled" loading="true">Error</narcissus-button>
      <narcissus-button type="error" :disabled="disabled" size="mini" loading="true">Error</narcissus-button>
      <narcissus-button type="error" :disabled="disabled" size="small" loading="true">Error</narcissus-button>
      <narcissus-button type="error" :disabled="disabled" size="medium" loading="true">Error</narcissus-button>
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
