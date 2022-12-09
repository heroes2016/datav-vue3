# yike 组件库

[![Author](https://img.shields.io/badge/Author-heroes2016-brightgreen "Author")](https://github.com/heroes2016 "Author") 



[Github地址](https://github.com/heroes2016/yike-vue3)：https://github.com/heroes2016/yike-vue3


## 使用方法
- 安装，此处使用pnpm工具，也可以yarn,npm等
```shell
pnpm install @heroes2016/yike
```
### 全局引入

```ts
// main.ts中全局引入
import { createApp } from 'vue'
import Yike from '@heroes2016/yike'

const app = createApp(App)

app.use(Yike)
app.mount('#app')
```
引入后在.vue文件中可以直接使用
```html
<dv-decoration-1 :color="['pink','yellow']" style="width:200px;height:50px;" />
```

### 局部引入
```html
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
