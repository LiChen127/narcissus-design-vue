import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
// import eslintPlugin from 'vite-plugin-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'], // 使用解构确保正确导入配置
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off', // 关闭多词组件名的规则
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-debugger': 'warn',
      'no-console': 'warn',
    },
  },
];
