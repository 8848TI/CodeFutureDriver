---
title: UniApp入门（一）
createTime: 2025/03/18 15:47:51
permalink: /article/xuh966w3/
---



# UniApp 入门（一）



**介绍：** `uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。



# 1. 环境搭建

[uni-app 官网](https://uniapp.dcloud.net.cn/)

[HBuilder X 开发工具](https://dcloud.io/hbuilderx.html)

[VS Code 开发工具](https://code.visualstudio.com/)

[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)



## 1.1 工具的下载

在开发之前，我们需要下载趁手的工具。阿婆主更推荐使用 ==HBuilder X== 这款开发工具，相比 VS Code ，

HBuilder X 更加的傻瓜式，即下即用。

点击上方给到的链接可以直通 HBuilder X 的官网，点击下载，然后解压到，您存放工具的目录。

最后点击后缀为 ==.exe== 的文件启动。

记得发送快捷方式到桌面，这样更加方便开发。

![](/asserts/image/移动端/UniApp/UniApp1.png)



如果你还想开发微信小程序呢，我们需要安装微信开发者工具，也是同样的点击上方链接，下载安装即可。

除此之外呢，还有抖音小程序，百度小程序，快手小程序等等。



## 1.2 创建项目

点击左上角的文件 $\longrightarrow$ 新建 $\longrightarrow$ 项目

![](/asserts/image/移动端/UniApp/UniApp2.png)



### 目录结构

一个uni-app工程，默认包含如下目录及文件：

```
┌─uniCloud              云空间目录，支付宝小程序云为uniCloud-alipay，阿里云为uniCloud-aliyun，腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─utssdk                存放uts文件（已废弃）
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源都应存放于此目录
├─uni_modules           存放uni_module 详见
├─platforms             存放各平台专用页面的目录，详见
├─nativeplugins         App原生语言插件 详见
├─nativeResources       App端原生资源目录
│  ├─android            Android原生资源目录 详见
|  └─ios                iOS原生资源目录 详见
├─hybrid                App端存放本地html文件的目录，详见
├─wxcomponents          存放微信小程序、QQ小程序组件的目录，详见
├─mycomponents          存放支付宝小程序组件的目录，详见
├─swancomponents        存放百度小程序组件的目录，详见
├─ttcomponents          存放抖音小程序、飞书小程序组件的目录，详见
├─kscomponents          存放快手小程序组件的目录，详见
├─jdcomponents          存放京东小程序组件的目录，详见
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
├─AndroidManifest.xml   Android原生应用清单文件 详见
├─Info.plist            iOS原生应用配置文件 详见
└─uni.scss              内置的常用样式变量
```



## 1.3 运行配置

### 1.3.1 配置外部浏览器

![](/asserts/image/移动端/UniApp/UniApp3.png)



第一次运行往往都要配置浏览器的路径，我们可以直接点击运行 $\longrightarrow$ 运行到浏览器 $\longrightarrow$ Chrome，也可以点击工具里的设置 。

在运行配置中，浏览器配置，配置Chrome浏览的路径。

![](/asserts/image/移动端/UniApp/UniApp4.png)



### 1.3.2 配置微信开发者工具

我们还是在同样的地方来配置微信开发者工具，第一次启动会需要扫码登录

如果运行微信开发者工具后，仍无法显示，我们可以：

在上方的设置 $\longrightarrow$ 代理设置 $\longrightarrow$ 安全里面，点击服务端口                                              



### 1.3.3 pages.json 页面路由

`pages.json` 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。

导航栏高度为 44px (不含状态栏)，tabBar 高度为 50px (不含安全区)。

它类似微信小程序中`app.json`的**页面管理**部分。注意定位权限申请等原属于`app.json`的内容，在uni-app中是在manifest中配置。



**配置列表：**

|                             属性                             |     类型     | 必填 |          描述          | 平台兼容 |
| :----------------------------------------------------------: | :----------: | :--: | :--------------------: | :------: |
| [globalStyle](https://uniapp.dcloud.net.cn/collocation/pages#globalstyle) |    Object    |  否  | 设置默认页面的窗口表现 |          |
| [pages](https://uniapp.dcloud.net.cn/collocation/pages#pages) | Object Array |  是  | 设置页面路径及窗口表现 |          |
| [easycom](https://uniapp.dcloud.net.cn/collocation/pages#easycom) |    Object    |  否  |    组件自动引入规则    |  2.5.5+  |
| [tabBar](https://uniapp.dcloud.net.cn/collocation/pages#tabbar) |    Object    |  否  |  设置底部 tab 的表现   |          |

**pages：**

`uni-app` 通过 pages 节点配置应用由哪些页面组成，pages 节点接收一个数组，数组每个项都是一个对象，其属性值如下：

| 属性      | 类型    | 默认值 | 描述                                                         |
| --------- | ------- | ------ | ------------------------------------------------------------ |
| path      | String  |        | 配置页面路径                                                 |
| style     | Object  |        | 配置页面窗口表现，配置项参考下方 [pageStyle](https://uniapp.dcloud.net.cn/collocation/pages#style) |
| needLogin | Boolean | false  | 是否需要登录才可访问                                         |

创建新的页面可以通过右键 ==pages== 文件夹，点击新建页面

![](/asserts/image/移动端/UniApp/UniApp5.png)



[](https://uniapp.dcloud.net.cn/collocation/pages.html)

::: tip 提示

[具体请参照 uni-app 官网](https://uniapp.dcloud.net.cn/collocation/pages.html) `pages`

:::



# 2. 内置组件

在 uni-app 中提供了一些内置组件，例如 `view` 、 `text` 、 `swiper` 等等，

这些组件相比原来的 WEB 中的 `div` 这些，无论是功能还是性能都有显著的提升，

例如 uni-app中的 `swiper` 组件就能很快的帮我们实现轮播图的效果。

以下只是简单概括常用的一些组件，具体可以参照[uni-app官网 - 内置组件篇](https://uniapp.dcloud.net.cn/component/)



## 2.1 view

容器组件，代替我们WEB中的 `div` 标签，用于布局，包裹各种元素内容。



**属性说明：**

|         属性名         |  类型   | 默认值 |                             说明                             |
| :--------------------: | :-----: | :----: | :----------------------------------------------------------: |
|      hover-class       | String  |  none  | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 |
| hover-stop-propagation | Boolean | false  | 指定是否阻止本节点的祖先节点出现点击态，App、<br/>H5、支付宝小程序、百度小程序不支持（支付宝小程序、<br/>百度小程序文档中都有此属性，实测未支持） |
|    hover-start-time    | Number  |   50   |                按住后多久出现点击态，单位毫秒                |
|    hover-stay-time     | Number  |  400   |              手指松开后点击态保留时间，单位毫秒              |



**Example：**

```
<template>
	<view class="content" hover-class="active-content" hover-stay-time="0">
		<view class="inner" hover-class="active-inner" hover-stop-propagation>
			
		</view>
	</view>
</template>

		
<style>
.content {
	width: 300rpx;
	height: 300rpx;
	background-color: red;
}

.active-content {
	width: 400rpx;
	background-color: yellow;
}

.content .inner {
	width: 100rpx;
	height: 100rpx;
	background-color: green;
}

.active-inner {
	width: 200rpx;
	background-color: purple;
}
</style>
```



## 2.2 text

文本组件。用于包裹文本内容。

**属性说明：**

|   属性名    |  类型   | 默认值 |     说明     |        平台差异        |
| :---------: | :-----: | :----: | :----------: | :--------------------: |
| selectable  | Boolean | false  | 文本是否可选 |                        |
| user-select | Boolean | false  | 文本是否可选 |       微信小程序       |
|    space    | String  |        | 显示连续空格 |    钉钉小程序不支持    |
|   decode    | Boolean | false  |   是否解码   | 百度、钉钉小程序不支持 |

**Example：**

```

```



## 2.3 scroll-view

可滚动视图区域。用于区域滚动。



**属性说明：**

| 属性名   | 类型    | 默认值 | 说明         |
| -------- | ------- | ------ | ------------ |
| scroll-x | Boolean | false  | 允许横向滚动 |
| scroll-y | Boolean | false  | 允许纵向滚动 |

[](https://uniapp.dcloud.net.cn/component/scroll-view.html)

::: tip 提示

[具体请参照 uni-app 官网](https://uniapp.dcloud.net.cn/component/scroll-view.html) `区域滚动`

:::



## 2.4 swiper

滑块视图容器。

一般用于左右滑动或上下滑动，比如banner轮播图。

注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换。swiper下的每个swiper-item是一个滑动切换区域，不能停留在2个滑动区域之间。



**属性说明：**

| 属性名                 | 类型    | 默认值            | 说明                 |平台差异|
| ---------------------- | ------- | ----------------- | -------------------- | ---------------------- |
| indicator-dots         | Boolean | false             | 是否显示面板指示点   ||
| indicator-color        | Color   | rgba(0, 0, 0, .3) | 指示点颜色           ||
| indicator-active-color | Color   | #000000           | 当前选中的指示点颜色 ||
| autoplay               | Boolean | false             | 是否自动切换         ||
| interval               | Number  | 5000              | 自动切换时间间隔     ||
| duration               | Number  | 500               | 滑动动画时长         |app-nvue不支持|
| circular | Boolean | false | 是否采用衔接滑动，即播放到末尾后重新回到开头 ||



**Example：**

```
<template>
	<view class="content">
		<swiper circular indicator-dots autoplay :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">1</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">2</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">3</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<style>
.content {
	color: #fff;
	font-size: 38rpx;
	height: 300rpx;
	text-align: center;
}	

swiper-item {
	line-height: 300rpx;
}

swiper-item:first-child {
	background-color: red;
}

swiper-item:nth-child(2) {
	background-color: green;
}

swiper-item:last-child {
	background-color: blue;
}
</style>
```

::: tip 提示

[具体请参照 uni-app 官网](https://uniapp.dcloud.net.cn/component/swiper.html) `uni-app`

:::



## 2.5 image

图片组件。用来代替WEB中的 `img` 标签

| 属性名    | 类型    | 默认值        | 说明                                                         | 平台差异说明                                   |
| --------- | ------- | ------------- | ------------------------------------------------------------ | ---------------------------------------------- |
| src       | String  |               | 图片资源地址                                                 |                                                |
| mode      | String  | 'scaleToFill' | 图片裁剪、缩放的模式                                         |                                                |
| lazy-load | Boolean | false         | 图片懒加载。只针对page与scroll-view下的image有效             | 微信小程序、百度小程序、抖音小程序、飞书小程序 |
| fade-show | Boolean | true          | 图片显示动画效果                                             | 仅App-nvue 2.3.4+ Android有效                  |
| webp      | boolean | false         | 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明 | 微信小程序2.9.0                                |

::: tip 提示

[具体请参照 uni-app 官网](https://uniapp.dcloud.net.cn/component/image.html) `image`

:::



## 2.6 navigator

页面跳转。

该组件类似HTML中的`<a>`组件，但只能跳转本地页面。目标页面必须在pages.json中注册。

除了组件方式，API方式也可以实现页面跳转，另见：<https://uniapp.dcloud.io/api/router?id=navigateto>



| 属性名                 | 类型    | 默认值   | 说明                                                         | 平台差异说明               |
| ---------------------- | ------- | -------- | ------------------------------------------------------------ | -------------------------- |
| url                    | String  |          | 应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 `.vue` 后缀 |                            |
| open-type              | String  | navigate | 跳转方式                                                     |                            |
| target                 | String  | self     | 在哪个小程序目标上发生跳转，默认当前小程序，值域self/miniProgram | 微信2.0.7+、百度2.5.2+、QQ |
| hover-stop-propagation | Boolean | false    | 指定是否阻止本节点的祖先节点出现点击态                       | 微信小程序                 |

**open-type 有效值**

| 值           | 说明                                   | 平台差异说明                     |
| ------------ | -------------------------------------- | -------------------------------- |
| navigate     | 对应 uni.navigateTo 的功能             |                                  |
| redirect     | 对应 uni.redirectTo 的功能             |                                  |
| switchTab    | 对应 uni.switchTab 的功能              |                                  |
| reLaunch     | 对应 uni.reLaunch 的功能               | 抖音小程序与飞书小程序不支持     |
| navigateBack | 对应 uni.navigateBack 的功能           |                                  |
| exit         | 退出小程序，target="miniProgram"时生效 | 微信2.1.0+、百度2.5.2+、QQ1.4.7+ |

::: tip 提示

[具体请参照 uni-app 官网](https://uniapp.dcloud.net.cn/component/navigator.html) `image`

:::



## 2.7 button

按钮



| 属性名   | 类型    | 默认值  | 说明                     | 生效时机 | 平台差异说明 |
| -------- | ------- | ------- | ------------------------ | -------- | ------------ |
| size     | String  | default | 按钮的大小               |          |              |
| type     | String  | default | 按钮的样式类型           |          |              |
| plain    | Boolean | false   | 按钮是否镂空，背景色透明 |          |              |
| disabled | Boolean | false   | 是否禁用                 |          |              |

::: tip 提示

[具体请参照 uni-app 官网](https://uniapp.dcloud.net.cn/component/) `button`

:::



# 3. Vue3语法

本章节只会简单介绍Vue3的基本语法，具体大家可以翻阅阿婆主的其他文章，或者看导航栏上的 [Vue2 + Vue3入门](https://codefuturedriver.netlify.app/article/gpzuom8m/)



## 3.1常用指令

#### 3.1.1 v-if

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。

```
<h1 v-if="awesome">Vue is awesome!</h1>
```



#### 3.1.2 v-else

你也可以使用 `v-else` 为 `v-if` 添加一个“else 区块”。

```
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```



#### 3.1.3 v-else-if

顾名思义，`v-else-if` 提供的是相应于 `v-if` 的“else if 区块”。它可以连续多次重复使用：

```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

和 `v-else` 类似，一个使用 `v-else-if` 的元素必须紧跟在一个 `v-if` 或一个 `v-else-if` 元素后面。



#### 3.1.4 v-show

另一个可以用来按条件显示一个元素的指令是 `v-show`。其用法基本一样：

```
<h1 v-show="ok">Hello!</h1>
```

不同之处在于 `v-show` 会在 DOM 渲染中保留该元素；`v-show` 仅切换了该元素上名为 `display` 的 CSS 属性。

`v-show` 不支持在 `<template>` 元素上使用，也不能和 `v-else` 搭配使用。



#### 3.1.5 v-for

我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令的值需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据的数组，而 `item` 是迭代项的**别名**：

```
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
```

template

```
<li v-for="item in items">
  {{ item.message }}
</li>
```

在 `v-for` 块中可以完整地访问父作用域内的属性和变量。`v-for` 也支持使用可选的第二个参数表示当前项的位置索引。

```
const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
```

template

```
<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
```



#### 3.1.6 v-on

我们可以使用 `v-on` 指令 (简写为 `@`) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：`v-on:click="handler"` 或 `@click="handler"`。

事件处理器 (handler) 的值可以是：

1. **内联事件处理器**：事件被触发时执行的内联 JavaScript 语句 (与 `onclick` 类似)。
2. **方法事件处理器**：一个指向组件上定义的方法的属性名或是路径。



**内联事件处理器**

内联事件处理器通常用于简单场景，例如：

```
const count = ref(0)
```

```
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
```



**方法事件处理器**

随着事件处理器的逻辑变得愈发复杂，内联代码方式变得不够灵活。因此 `v-on` 也可以接受一个方法名或对某个方法的调用。

举例来说：

```javascript
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    alert(event.target.tagName)
  }
}
```

```vue
<!-- `greet` 是上面定义过的方法名 -->
<button @click="greet">Greet</button>
```



#### 3.1.7 v-model

```vue
<input v-model="text">
```

另外，`v-model` 还可以用于各种不同类型的输入，`<textarea>`、`<select>` 元素。它会根据所使用的元素自动使用对应的 DOM 属性和事件组合：

- 文本类型的 `<input>` 和 `<textarea>` 元素会绑定 `value` property 并侦听 `input` 事件；
- `<input type="checkbox">` 和 `<input type="radio">` 会绑定 `checked` property 并侦听 `change` 事件；
- `<select>` 会绑定 `value` property 并侦听 `change` 事件。



#### 3.1.8 v-html





#### 3.1.9 v-bind





## 3.2 组件

### 3.2.1 定义组件

当使用构建步骤时，我们一般会将 Vue 组件定义在一个单独的 `.vue` 文件中，这被叫做[单文件组件](https://cn.vuejs.org/guide/scaling-up/sfc.html) (简称 SFC)：

```
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

当不使用构建步骤时，一个 Vue 组件以一个包含 Vue 特定选项的 JavaScript 对象来定义：

```
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
  // 也可以针对一个 DOM 内联模板：
  // template: '#my-template-element'
}
```

这里的模板是一个内联的 JavaScript 字符串，Vue 将会在运行时编译它。你也可以使用 ID 选择器来指向一个元素 (通常是原生的 `<template>` 元素)，Vue 将会使用其内容作为模板来源。

上面的例子中定义了一个组件，并在一个 `.js` 文件里默认导出了它自己，但你也可以通过具名导出在一个文件中导出多个组件。



### 3.2.2 使用组件

要使用一个子组件，我们需要在父组件中导入它。假设我们把计数器组件放在了一个叫做 `ButtonCounter.vue` 的文件中，这个组件将会以默认导出的形式被暴露给外部。

```
<script setup>
import ButtonCounter from './ButtonCounter.vue'
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```

通过 `<script setup>`，导入的组件都在模板中直接可用。

当然，你也可以全局地注册一个组件，使得它在当前应用中的任何组件上都可以使用，而不需要额外再导入。关于组件的全局注册和局部注册两种方式的利弊，我们放在了[组件注册](https://cn.vuejs.org/guide/components/registration.html)这一章节中专门讨论。

组件可以被重用任意多次：

```
<h1>Here is a child component!</h1>
<ButtonCounter />
<ButtonCounter />
<ButtonCounter />
```

你会注意到，每当点击这些按钮时，每一个组件都维护着自己的状态，是不同的 `count`。这是因为每当你使用一个组件，就创建了一个新的**实例**。

在单文件组件中，推荐为子组件使用 `PascalCase` 的标签名，以此来和原生的 HTML 元素作区分。虽然原生 HTML 标签名是不区分大小写的，但 Vue 单文件组件是可以在编译中区分大小写的。我们也可以使用 `/>` 来关闭一个标签。

如果你是直接在 DOM 中书写模板 (例如原生 `<template>` 元素的内容)，模板的编译需要遵从浏览器中 HTML 的解析行为。在这种情况下，你应该需要使用 `kebab-case` 形式并显式地关闭这些组件的标签。

```
<!-- 如果是在 DOM 中书写该模板 -->
<button-counter></button-counter>
<button-counter></button-counter>
<button-counter></button-counter>
```





::: warning 注意

在 uni-app 中我们无需引入组件，直接在`<template/>` 内使用即可，但需要注意的是存放组件的文件夹名必须叫 ==components== 

:::



## 3.3 Props传参











# 4. 尺寸单位

`uni-app` 支持的通用 css 单位包括 px、rpx。

px是屏幕像素，当适配器









