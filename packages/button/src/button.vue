<script lang="ts" setup name="narcissus-button">
import { computed, ref } from 'vue';
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

// 是否禁用
const disabled = computed(() => {
  return props.disabled;
});

// buttonSize
const buttonSize = computed(() => {
  return {
    [`narcissus-button--${props.size}`]: props.size,
  };
});
</script>

<template>
  <button
    :class="[buttonStyle, { disabled: disabled }, buttonSize]"
    class="narcissus-button"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.narcissus-button {
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 8px;
  -webkit-appearance: none;
  color: #000;
  padding: 8px 12px;
  font-weight: 500;
  transition: 0.1s;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    border: 1px solid  rgba(51, 40, 40, 0.5);
    background-color:  rgba(189, 179, 179, 0.5);
  }

  &:hover {
    background-color: rgb(230, 229, 226);
  }

  &--medium  {
    height: 38px;
    line-height: 15px;
    padding: 6px 10px;
  }

  &--small  {
    height: 35px;
    padding: 4px 8px;
  }

  &--mini  {
    height: 30px;
    padding: 2px 4px;
  }

  &--primary {
    color: #fff;
    background-color: rgb(71, 149, 254);
    border-color: white;

    &:hover {
      background: rgb(19, 112, 235);
      border-color: rgb(71, 149, 254);
      color: #fff;
    }
  }

  &--primary.disabled {
    background-color: rgba(10, 106, 231, 0.849);
    border: 1px solid #fff;
  }

  &--dashed {
    &:hover{
      border: 1px dashed #000;
    }
  }

  &---dashed.disabled {
    border: 1px dashed rgba(51, 40, 40, 0.5);
    background-color: #c404044d;
  }

  &--warn {
    color: #fff;
    background-color: rgba(243, 212, 34, 0.884);
    border-color: rgb(255, 230, 162);
    &:hover {
      border: 1px solid  rgb(243, 208, 111);
      background-color: rgb(255, 190, 13);
    }
  }

  &--warn.disabled {
    background-color: rgb(238, 238, 78);
    border: 1px solid  rgb(255, 255, 255);
  }

  &--error {
    color: #fff;
    border-color: rgb(248, 52, 52);
    background-color: rgba(245, 50, 50, 0.829);
    &:hover {
      border: 1px solid rgb(247, 111, 111);
      background-color:  rgb(245, 9, 9);
    }
  }

  &--error.disabled {
    background-color: rgba(200, 0, 0, 0.5);
    border: 1px solid  rgb(255, 255, 255);
  }
}

</style>
