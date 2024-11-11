import { DefaultTheme, defineConfig } from 'vitepress';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
import { components } from '../components';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const build = argv.build || false;

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/button' },
];

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
      ],
    },
  ],
  '/components': [{
    items: [
      ...components,
    ],
  }],
};

export default defineConfig({
  title: 'narcissus-design-vue',
  description: 'Narcissus-Desigin-Vue Vue3+Ts组件库',
  lang: 'cn-ZH',
  base: build ? '/narcissus-design-vue/' : '/', // 1.修改组件库上下文路径 2.添加dev/build判断取得base的值
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'NARCISSUS-DESIGN-VUE',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiChen127/narcissus-design-vue' },
    ],
    nav,
    sidebar,
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
});
