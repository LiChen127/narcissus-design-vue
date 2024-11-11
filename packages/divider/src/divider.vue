<script lang="ts" setup name="narcissus-divider">
import { dividerProps } from './types';
import { computed, ref } from 'vue';
const props = defineProps(dividerProps);
const dashedStatus = computed(() => {
  return props.dashed ? 'dashed' : '';
});
</script>

<template>
  <hr
    :class="[{ dashed: dashedStatus }]"
    class="narcissus-divider"
  >
</template>

<style scoped lang="scss">
.narcissus-divider {
  &.dashed {
    border-top: 2px dashed #e8e8e8;
  }
}
</style>
