<script lang="ts" setup name="narcissus-button">
import { computed } from 'vue';
import '../../scss/components/_button.module.scss';
import { buttonProps } from './types';
const props = defineProps(buttonProps);
// 注入

// button样式
const buttonStyle = computed(() => {
  return {
    [`narcissus-button--${props.type}`]: props.type,
  };
});
</script>

<template>
  <button
    :class="buttonStyle"
    class="narcissus-button"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.narcissus-button {
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
  height: 35px;
  cursor: pointer;
  background-color: #fff;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 8px;
  -webkit-appearance: none;
  color: #000;
  padding: 8px 12px;
  font-weight: 500;
  transition: 0.1s;
}

.narcissus-button--primary {
  color: #fff;
  background-color: rgb(71, 149, 254);
  border-color: white;

  &:hover {
    background: rgb(19, 112, 235);
    border-color: rgb(71, 149, 254);
    color: #fff;
  }
}
.narcissus-button--dashed {
  &:hover{
    border: 1px dashed #000;
  }
}

.narcissus-button--warn {
  color: #fff;
  background-color: rgba(243, 212, 34, 0.884);
  border-color: rgb(255, 230, 162);
  &:hover {
    border: 1px solid  rgb(243, 208, 111);
    background-color: rgb(255, 190, 13);
  }
}

.narcissus-button--error {
  color: #fff;
  border-color: rgb(248, 52, 52);
  background-color: rgba(245, 50, 50, 0.829);
  &:hover {
    border: 1px solid rgb(247, 111, 111);
    background-color:  rgb(245, 9, 9);
  }
}
</style>
