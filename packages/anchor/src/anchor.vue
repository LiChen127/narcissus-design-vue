<script lang="ts" setup name="narcissus-anchor">
import { AnchorProps, AnchorItem } from './types';
import { defineProps, computed, ref, onMounted, onUnmounted } from 'vue';
const { nafix, bounds, container, activeAnchorColor, offsetBottom, offsetTop, targetOffset, items, direction, customTitle, href, target, title } = defineProps<AnchorProps>();

// 锚点区域边界bound定义css变量
const containerPadding = computed(() => {
  return bounds ? `var(--bound-padding, ${bounds}px)` : 'var(--bound-padding, 5px)';
});
// 固定模式?
const nafixStyle = computed(() => {
  return nafix ? 'fixed' : '';
});
// 定义锚点列表方向
const directionStyle = computed(() => {
  return direction === 'vertical' ? 'column' : 'row';
});
// 高亮锚点颜色
const activeAnchorColorStyle = computed(() => {
  return `var(--active-anchor-color, ${activeAnchorColor})`;
});
// 锚点控制的滚动容器
const handleScrollContainer = () => {
  if (container) {
    return container;
  }
  return document.body;
};
// 距离容器底部达到指定偏移量后触发
const handleOffsetBottom = () => {
  if (offsetBottom) {
    return offsetBottom;
  }
  return 0;
};
// 距离容器顶部达到指定偏移量后触发
const handleOffsetTop = () => {
  if (offsetTop) {
    return offsetTop;
  }
  return 0;
};
// customTitle
const handleCustomTitle = () => {
  return customTitle ? customTitle() : '';
};
// 锚点链接
const handleHref = () => {
  return href ? href : '';
};
// 锚点链接target
const handleTarget = () => {
  return target ? target : '';
};
// 锚点链接title
const handleTitle = () => {
  return title ? title : '';
};
// 点击锚点
const handleClick = (item: AnchorItem) => {
  // 获取当前锚点
  const currentAnchorMap = getCurrentAnchor(item.key);
};
// 监听锚点链接改变
const handleChange = (item: AnchorItem) => {
  console.log(item);
};
// 一个记录当前锚点的数据结构Map记录对应的key,和长度
const currentAnchorMap = ref(new Map<string, string>());
// 挂载函数
const handleSetAnchorMap = (arr: Array<AnchorItem>) => {
  arr.forEach((item) => {
    if (!item.children) {
      // 获取实际的宽度
      const span = document.createElement('span');
      span.innerText = item.title;
      document.body.appendChild(span);
      // 获取实际的宽度
      const width = span.offsetWidth;
      document.body.removeChild(span);
      const result = `var(--anchor-width, ${width}px)`;
      // 设置currentAnchorMap
      currentAnchorMap.value.set(String(item.key), result);
    } else {
      // 递归处理子元素
      handleSetAnchorMap(item.children);
    }
  });
};
// 挂载
onMounted(() => {
  // 根据items生成currentAnchorMap
  handleSetAnchorMap(items as Array<AnchorItem>);
});
// 卸载
onUnmounted(() => {
  currentAnchorMap.value.clear();
});
</script>

<template>
  <div
    class="narcissus-anchor"
  >
    <div
      v-for="item in items"
      :key="item.key"
      class="narcissus-anchor-list"
    >
      <a
        :href="item.href"
        :target="item.target"
        :title="item.title"
        @click="handleClick(item)"
        @change="handleChange(item)"
      >
        {{ item.title }}
      </a>
      <span
        class="narcissus-anchor-list-bottom"
        :style="{
          width: currentAnchorMap.get(String(item.key)),
        }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .narcissus-anchor {
    // 尺寸由外部控制
    width: 100%;
    height: 100%;
    padding: v-bind(containerPadding);
    position: v-bind(nafixStyle);
    display: flex;
    flex-direction: v-bind(directionStyle);
    // 滚动条
    overflow-y: auto;
    // 滚动条样式
    scrollbar-width: thin;
    scrollbar-color: #000 #fff;

    &-list {
      a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #000;
      }

      &-bottom {
        background-color: v-bind(activeAnchorColorStyle);
        height: 2px;
      }
    }
  }
</style>
