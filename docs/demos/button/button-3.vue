<template>
  <div class="btns-container">
    <narcissus-button size="mini">
      mini按钮
    </narcissus-button>
    <narcissus-button size="small">
      small按钮
    </narcissus-button>
    <narcissus-button size="medium">
      medium按钮
    </narcissus-button>
    <narcissus-button>
      默认按钮
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
