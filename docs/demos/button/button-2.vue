<template>
  <div class="btns-container">
    <narcissus-button :disabled="disabled">
      Default
    </narcissus-button>
    <narcissus-button
      type="primary"
      :disabled="disabled"
    >
      Primary
    </narcissus-button>
    <narcissus-button
      type="dashed"
      :disabled="disabled"
    >
      Dashed
    </narcissus-button>
    <narcissus-button
      type="warn"
      :disabled="disabled"
    >
      Warn
    </narcissus-button>
    <narcissus-button
      type="error"
      :disabled="disabled"
    >
      Error
    </narcissus-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const disabled = ref(true);
</script>

<style lang='scss' scoped>
.btns-container {
  display: flex;
  justify-content: flex-start;

  & > .narcissus-button {
    margin-right: 15px;
  }
}
</style>
