<template>
  <div class="btns-container">
    <narcissus-button>Default</narcissus-button>
    <narcissus-button type="primary">
      Primary
    </narcissus-button>
    <narcissus-button type="dashed">
      Dashed
    </narcissus-button>
    <narcissus-button type="warn">
      Warn
    </narcissus-button>
    <narcissus-button type="error">
      Error
    </narcissus-button>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.btns-container {
  display: flex;
  justify-content: flex-start;
  flex: 1;
  align-content: space-evenly;

  & > .narcissus-button {
    margin-right: 15px;
  }
}
</style>
