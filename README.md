# DataV Vue3+TS+Vite版

[![Author](https://img.shields.io/badge/Author-heroes2016-brightgreen "Author")](https://github.com/heroes2016 "Author") 

[![NPM](https://nodei.co/npm/@heroes2016/yike.png?mini=true)](https://www.npmjs.com/package/@heroes2016/yike)


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


