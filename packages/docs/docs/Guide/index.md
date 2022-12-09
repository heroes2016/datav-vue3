# DataV Vue3+TS+Vite版

[![Author](https://img.shields.io/badge/Author-kjgl77-red.svg "Author")](https://github.com/vaemusic "Author")

[![LICENSE](https://img.shields.io/github/license/vaemusic/yike "LICENSE")](https://github.com/vaemusic/yike/blob/master/LICENSE "LICENSE")

[![NPM](https://nodei.co/npm/@heroes2016/yike.png?mini=true)](https://www.npmjs.com/package/@heroes2016/yike)

由于之前大佬写的 [DataV](http://datav.jiaminghi.com/) 不支持Vue3 Vite2.x，现部分代码用Vue3+TS重构。

文档地址：https://yike.netlify.app

Gitee地址：https://gitee.com/kjgl77/yike

Github地址：https://github.com/vaemusic/yike

Demo预览地址：https://yike-demo.netlify.app/

Demo Gitee地址：https://gitee.com/kjgl77/electronic-file

Demo Github地址：https://github.com/vaemusic/electronic-file

## 使用方法
- 安装，此处使用pnpm工具，也可以yarn,npm等
```shell
pnpm install @heroes2016/yike
```
## 全局引入

```js
// main.ts中全局引入
import { createApp } from 'vue'
import DataVVue3 from '@heroes2016/yike'

const app = createApp(App)

app.use(DataVVue3)
app.mount('#app')
```
引入后在.vue文件中可以直接使用
```html
<dv-decoration-1 :color="['pink','yellow']" style="width:200px;height:50px;" />
```

## 局部引入
```vue
<!-- 在.vue文件的script中import部分组件 -->
<script lang="ts" setup>
import { Decoration1, Decoration2 } from '@heroes2016/yike'
</script>
<template>
  <!-- 引入之后就可以在vue的template中直接使用 -->
  <decoration-1 :color="['pink','yellow']" style="width:200px;height:50px;" />
  <decoration-2 :reverse="true" style="width:5px;height:150px;" />
</template>
```

新的组件库开发根据大佬的 [MY-Kit](https://github.com/jrainlau/MY-Kit) 开发。支持脚本生成基础文件，文档，可使用Markdown一边开发源码一边写文档。详情可见MY-Kit文档。

## 文档样式说明
- 文档部分 demo 的 CSS 样式使用 [UnoCSS](https://github.com/unocss/unocss) 构建，文档里使用的一些 **UnoCSS** 的 **shortcuts**，例如：**`demo-bg`**、**`dv-bg`**、**`small-bg`**、 见 UnoCSS 配置文件：**`unocss.config.ts`**，路径：**`packages/docs/unocss.config.ts`**
