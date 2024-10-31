<script setup lang='ts'>
import { ref } from 'vue';
const msg = ref('hello narcissus-design-vue');
</script>

<template>
 <div>
    <narcissus-button :msg="msg"></narcissus-button>
 </div>
</template>

<style lang='scss' scoped>

</style>