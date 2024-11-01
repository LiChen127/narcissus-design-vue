<template>
  <div class="btns-container">
    <narcissus-button
      type="primary"
      loading="true"
    >
      primary-loading
    </narcissus-button>
    <narcissus-button
      type="warn"
      loading="true"
    >
      warn-loading
    </narcissus-button>
    <narcissus-button
      size="medium"
      loading="true"
    >
      medium-loading
    </narcissus-button>
    <narcissus-button
      type="error"
      loading="true"
    >
      default-loading
    </narcissus-button>
  </div>
</template>

<script lang="ts" setup>
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
