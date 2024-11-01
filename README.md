# narcissus-design-vue

## 项目介绍及其架构介绍
该项目是一个基于monorepo架构的Vue3+TS+Scss的Vue3组件库

根目录下有五个文件夹
cli: 命令行相关模块
docs: 组件库文档模块
examples: 开发测试模块
packages: 组件核心库
lib: 用于组件库打包最后上传到npm

### CSS架构,主要分为四层
base层: 整个CSS结构最基础的层级, 包括基础样式和定制基础样式
tools层: 提供通用工具函数
acss层: 定义原子样式类, 比如flex, margin...等样式基础类
components: 实现各个组件的样式,命名方式采用BEM方式

#### BEM介绍
核心思想: 通过组件名的唯一性来说保证选择器的唯一性，从而保证样式不会污染到组件外
简单了解： 命名层级与命名规定
命名层次, BEM规定将所有的组件分为三个层级:
1.Block: 代表页面中独立可复用的底层组件;
2.Element: Block 内部的组成元素，通常用于定义块的内部结构和样式;
3.Modifier: 用于改变Block/Element的外观和行为
命名规定,BEM三层架构之下, 我们用命名规范来体现这种层级关系
所有命名通常都用小写字母，单词之间用 单个短线（-） 分隔，不用大驼峰、小驼峰等方式。
Element 名以所属的 Block 名称为前缀，用 双下划线（__） 分隔；
Modifier 名以其修饰的 Block 或 Elment 名称为前缀，用 双连字符（--） 分隔。

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

### cli
cli用于自动化我们开发一个组件的流程: 通过一行命令实现一个组件basic的建设

## 如何开发组件
基本命令介绍
命令中 **-C** 实现了根目录可以完成各种操作
从构建组件到测试到写文档到发布到npm的操作流程

### 如何利用cli脚本构建一个组件
pnpm run gen:component
这一行命令会通过一个命令构建一个完整的组件，只需要提供组件名，组件中文名，组件类型，即可完成组件注册和文档搭建

如何发包到npm
本地发包流程
登录verdaccio：首先，你需要登录到你的私有npm仓库，这里使用的是verdaccio。使用命令行登录：

sh
pnpm login --registry http://localhost:4873/
输入你的用户名和密码。

打包lib：在发布之前，需要先构建你的组件库。使用以下命令进行打包：

sh
pnpm run build:lib
这将生成打包后的文件，准备发布。

发布到本地仓库：使用以下命令将你的组件库发布到本地的verdaccio仓库：

sh
pnpm run publish:local
这将使你的组件库在本地仓库可用，便于测试。

测试本地发布：确保你的组件库可以从 http://localhost:4873/ 下载并正常使用。

发包到npm流程
构建组件库：与本地发包相同，首先需要构建你的组件库：

sh
pnpm run build:lib
发布到npm：使用以下命令将你的组件库发布到npm：

sh
pnpm run publish:serve
这将使你的组件库在npm上可用。

注意事项
确保在发布之前，你的组件库已经通过了所有的测试。
在发布到npm之前，确保你的 package.json 文件中的 name、version 和其他元数据是正确的。
如果你还没有npm账号，需要先注册一个。
如果你使用的是私有仓库，确保你的仓库地址和认证信息是正确的。
发布到npm后，其他人可以通过 npm install 或 pnpm add 命令安装你的组件库。
通过上述步骤，你可以将你的 narcissus-design-vue 组件库发布到本地仓库或npm，供其他开发者使用。

