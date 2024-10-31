<script setup lang='ts'>
import { defineProps, toRefs } from 'vue';
import { fooProps } from './type';

const props = defineProps(fooProps);
const { msg } = toRefs(props);

const onClick = () => {
  console.log('点击按钮测试', msg.value);
};
</script>

<template>
  <div class="narcissus-button">
    <h1>水仙花</h1>
    <div class="narcissus-button__description">
      msg is {{ msg }}
    </div>
    <el-button
      type="primary"
      @click="onClick"
    >
      点击我
    </el-button>
  </div>
</template>

<style lang='scss' scoped>
.narcissus-button {
  padding: 0;
  margin: 0;
  font-size: 20px;
  color: azure;
  background-color: black;

  el-button {
    font-size: 25px;
    color: aquamarine;
  }
}
</style>
