# narcissus-design-vue

## 项目介绍及其架构介绍
该项目是一个基于monorepo架构的Vue3+TS+Scss的Vue3组件库

根目录下有五个文件夹<br>
cli: 命令行相关模块<br>
docs: 组件库文档模块<br>
examples: 开发测试模块<br>
packages: 组件核心库<br>
lib: 用于组件库打包最后上传到npm<br>

### CSS架构,主要分为四层
base层: 整个CSS结构最基础的层级, 包括基础样式和定制基础样式<br>
tools层: 提供通用工具函数<br>
acss层: 定义原子样式类, 比如flex, margin...等样式基础类<br>
components: 实现各个组件的样式,命名方式采用BEM方式<br>

#### BEM介绍
核心思想: 通过组件名的唯一性来说保证选择器的唯一性，从而保证样式不会污染到组件外<br>
简单了解： 命名层级与命名规定<br>
命名层次, BEM规定将所有的组件分为三个层级:<br>
1.Block: 代表页面中独立可复用的底层组件;<br>
2.Element: Block 内部的组成元素，通常用于定义块的内部结构和样式;<br>
3.Modifier: 用于改变Block/Element的外观和行为;<br>
命名规定,BEM三层架构之下, 我们用命名规范来体现这种层级关系<br>
所有命名通常都用小写字母，单词之间用 单个短线（-） 分隔，不用大驼峰、小驼峰等方式。<br>
Element 名以所属的 Block 名称为前缀，用 双下划线（__） 分隔；<br>
Modifier 名以其修饰的 Block 或 Elment 名称为前缀，用 双连字符（--） 分隔。<br>

### packages模块介绍
packages下面用于放置narcissus-design-vue组件库聚合文件,和一系列组件，scss用于存放组件样式,utils用于封装全局的通用组件函数

### example模块介绍
examples这个文件是一个经典的用vite构建的vue3+ts项目，定义为组件库测试站点
在开发过程中，通过workspace特性去更新组件库测试

### docs模块介绍
docs模块是一个用于vitepress构建的组件库文档用于展示组件功能给其他开发人员使用,定义组件使用方法，样式，prop，插槽，API等等
目录架构:
.vitepress: 用于存放vitepress配置文件
public: 公共资源目录
components: 组件文档描述
demos: 文档中的demo
guide: 组件库中的其他文件说明

### cli模块介绍
cli用于自动化我们开发一个组件的流程: 通过一行命令实现一个组件basic的建设

## 如何开发组件
基本命令介绍
命令中 **-C** 实现了根目录可以完成各种操作
从构建组件到测试到写文档到发布到npm的操作流程

### 如何利用cli脚本构建一个组件
pnpm run gen:component
这一行命令会通过一个命令构建一个完整的组件，只需要提供组件名，组件中文名，组件类型，即可完成组件注册和文档搭建

### 如何开发?
在生成的packages的组件下面进行组件开发<br>
以Button举个例子<br>
packages/src/Button下面的文件挨个分析<br>
package.json下面的name **@narcissus-design-vue/@Buttton**就代表这个组件的名字<br>
Button/index.ts 入口文件, 用于提供利用vue特性提供install方法注入<br>
Button/Button.vue就是组件的核心模块<br>
Button/types.ts用于定义各种prop，其他的组件需要的类型，prop类型等等<br>

### 如何测试?
测试分为三种，一种是开发阶段测试，一种是本地部署测试，还有上传到npm测试<br>
当然开发阶段的测试是pre-important的,一定是最前置的，优先级要最高<br>
必须要做测试<br>

#### 如何开发阶段测试?
只需要在exaples这个同步测试站点下面进行组件库包的同步更新即可<br>
如何启动测试站点<br>
pnpm run dev:dev<br>
进行相关组件的使用即可<br>

#### 如何发包
本地发包<br>
首先登录verdaccio进行登录<br>
pnpm run start:verdaccio<br>
pnpm run build:lib 首先进行打包lib<br>
pnpm run publish:local利用verdaccio，进行本地部署发包<br>
利用本地verdaccio进行测试<br>

发包到npm<br>
同样需要build<br>
pnpm run build:lib<br>
pnpm run publish:serve<br>
