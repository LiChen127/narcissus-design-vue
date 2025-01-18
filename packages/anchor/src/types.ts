import { ExtractPropTypes } from 'vue';
// import type { HTMLElement } from 'vue';
/**
 * 锚点prop
 */
export const anchorProps = {
  // 固定模式
  nafix: {
    required: false,
    type: Boolean,
    default: false,
  },
  // 锚点区域边界
  // 单位px, 默认是5px
  bounds: {
    required: false,
    type: Number,
    default: 0,
  },
  // 指定滚动的容器
  container: {
    required: false,
    type: HTMLElement,
    default: null,
  },
  // 自定义高亮的锚点
  getCurrentAnchor: {
    required: false,
    type: Function,
    default: (activeAnchor: string) => {
      return activeAnchor;
    },
  },
  // 高亮锚点颜色
  activeAnchorColor: {
    required: false,
    type: String,
    default: '#000',
  },
  // 距离窗口底部达到指定偏移量后触发
  offsetBottom: {
    required: false,
    type: Number,
    default: 0,
  },
  // 距离窗口顶部达到指定偏移量后触发
  offsetTop: {
    required: false,
    type: Number,
    default: 0,
  },
  // 锚点滚动量
  targetOffset: {
    required: false,
    type: Number,
    default: 0,
  },
  // 数据化配置选项内容，支持通过children嵌套
  items: {
    required: false,
    type: Array,
    default: [],
  },
  // 导航方向
  // vertival | horizontal
  direction: {
    required: false,
    type: String,
    default: 'horizontal',
  },
  // 使用插槽自定义选项title
  customTitle: {
    required: false,
    type: Function,
    default: () => { },
  },
  // Link Prop
  // 锚点链接
  href: {
    require: false,
    type: String,
    default: '',
  },
  target: {
    require: false,
    type: String,
    default: '',
  },
  title: {
    require: false,
    type: String,
    default: '',
  },
} as const;

// 定义锚点item的type
export type AnchorItem = {
  // 唯一标识
  key: string | number;
  // 标题
  title: string;
  // 链接
  href: string;
  // 链接目标
  target: string;
  // 子节点
  children: AnchorItem[];
};

// 定义锚点组件的事件注册
// export const anchorEmits = {
//   click: (e: MouseEvent, link: object) => true,
//   change: (link: object) => true,
// } as const;

export type AnchorProps = ExtractPropTypes<typeof anchorProps>;
// export type AnchorEmits = {
//   click: [e: MouseEvent, link: object];
//   change: [link: object];
// };
