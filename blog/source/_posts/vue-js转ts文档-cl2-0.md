---
title: vue js转ts文档 cl2.0
date: 2020-01-28 15:14:48
tags: [vue]
categories: [web前端]
thumbnail: /images/posts/vue-logo.png
---


**_第一步_**
```textmate
npm install babel-plugin-transform-decorators-legacy --save-dev
```

<!--more-->

_**第二步**_
![](/images/vue-js-ts/图片-1.png "vue js组件转ts")

**_第三步_**
```textmate
npm install --save-dev typescript npm install --save-dev ts-loader
```

_**第四步**_
![](/images/vue-js-ts/图片-3.png "vue js组件转ts")

_**第五步**_

`最后把 .ts 后缀添加上就OK了，在webpack.base.conf.js文件下`

![](/images/vue-js-ts/图片-6.png "vue js组件转ts")

**_第六步_**
```text
npm install --save vue-class-component
```

![](/images/vue-js-ts/图片-7.png "vue js组件转ts")

![](/images/vue-js-ts/图片-8.png "vue js组件转ts")

![](/images/vue-js-ts/图片-9.png "vue js组件转ts")

_**第七步**_
```text
npm install @types/node --save-dev
```

_**第八步**_

`这个文件放在根目录`  [tsconfig.json](https://github.com/blackKr/source/blob/master/tsconfig.json)


_**第九步**_

`这个文件放在src下`  [vue-shims.d.ts](https://github.com/blackKr/source/blob/master/vue-shims.d.ts)


_**第十步**_

`将主入口的js文件改成ts文件`
