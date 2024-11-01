<script lang="ts" setup name="narcissus-button">
import { computed, ref } from 'vue';
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

// loading状态
const loading = computed(() => {
  return props.loading;
});

// loading定制样式
const loadingStyle = computed(() => {
  return buttonStyle.value ? { [`loading--${props.type}`]: props.type } : '';
});

// loading定制大小
const loadingSize = computed(() => {
  return buttonSize.value ? { [`loading--${props.size}`]: props.size } : '';
});
</script>

<template>
  <button
    :class="[buttonStyle, { disabled: disabled }, buttonSize]"
    class="narcissus-button"
    :disabled="disabled || loading"
  >
    <i
      v-if="loading"
      :class="[loadingStyle, loadingSize]"
      class="loading"
    />
    <span><slot /></span>
  </button>
</template>

<style scoped lang="scss">
@import '../../scss/components/_button.module.scss';

.narcissus-button {
  display: inline-block;
  white-space: nowrap;
  line-height: calc(#{$button-height} / 2);
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
    height: $size-medium-height;
    padding: $size-medium-padding;
  }

  &--small  {
    height: $size-small-height;
    padding: $size-small-padding;
  }

  &--mini  {
    height: $size-mini-height;
    padding: $size-mini-padding;
  }

  &--primary {
    color: $color-primary;
    background-color: $color-primary-bgc;
    border-color: $color-primary;

    &:hover {
      background: $color-primary-hover;
      border-color: $color-primary-hover-border;
      color: $color-primary;
    }
  }

  &--primary.disabled {
    background-color: $color-primary-disabled;
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
    background-color: $color-warn-bgc;
    border-color: $color-warn-border;
    &:hover {
      border: 1px solid $color-warn-hover-border;
      background-color: $color-warn-hover-bgc;
    }
  }

  &--warn.disabled {
    background-color: $color-warn-disabled;
    border: 1px solid  rgb(255, 255, 255);
  }

  &--error {
    color: #fff;
    border-color:$color-error-border;
    background-color: $color-error-bgc;
    &:hover {
      border: 1px solid $color-error-hover-border;
      background-color:  $color-error-hover-bgc;
    }
  }

  &--error.disabled {
    background-color: $color-error-disabled;
    border: 1px solid  rgb(255, 255, 255);
  }

  // loading相关
  .loading {
    border: 2px solid rgba(189, 179, 179, 0.5);
    border-top: 2px solid black;
    border-radius: 50%;
    width: $loading-default-width;
    height: $loading-default-height;
    animation: spin 1s linear infinite;
    margin-right: 8px;
    display: inline-block;

    &--primary {
      border:  2px solid #fff;
      border-top: 2px solid $color-primary-bgc;
    }

    &--warn {
      border:  2px solid #fff;
      border-top: 2px solid $color-warn-bgc;
    }

    &--error {
      border:  2px solid #fff;
      border-top: 2px solid $color-error-bgc;
    }

    &--mini {
      width: $loading-mini-width;
      height: $loading-mini-height;
    }

    &--small {
      width: $loading-small-width;
      height: $loading-small-height;
    }

    &--medium {
      width: $loading-medium-width;
      height: $loading-medium-height;
    }

    &--mini {
      width: $loading-mini-width;
      height: $loading-mini-height;
    }

  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

}

</style>
