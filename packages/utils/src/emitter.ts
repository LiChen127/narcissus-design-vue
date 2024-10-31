import mitt from 'mitt';
const Mitt = mitt;
export const emitter: mitt.Emitter = new Mitt();

export default emitter;
/**
 * 类似Vue2使用EventBus作为全局事件总线
 * Vue3可以使用mitt。mitt支持全部事件的监听和批量移除，不依赖实例.
 * 这个工具函数负责导出mitt对象
 */