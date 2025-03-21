---
title: Vue2+Vue3
tags:
 - Vue
 - 前端
 - 框架
createTime: 2025/03/18 15:45:26
permalink: /article/gpzuom8m/
---

# Vue2 + Vue3



# 一、Vue2基础



## 1.1 常用指令

1. v-html

2. v-show

3. v-if

4. v-else

5. v-else-if

6. v-on

   - ```vue
     v-on:click="表达式或者方法"
     /*简写*/
     @click="表达式或者方法"
     ```

   - ​

7. v-bind

   - 动态设置html的标签属性 -->`src, url, title`

   - ```vue
     <img v-bind:src="imgUrl" v-bind:title="msg" alt="">
     /*简写*/
     <img :src="imgUrl" :title="msg" alt="">
     ```

8. v-for

9. v-model





## 1.2 指令修饰符



通过 `.`指明一些指令后缀，不同后缀封装了不同的处理操作 -->简化代码

1. 按键修饰符

   @keyup.enter		-->	键盘回车监听 

2. v-model修饰符

   v-model.trim			-->	去除首尾空格

   v-model.number 		-->	转数字

3. 事件修饰符

   @时间名.stop		-->	阻止冒泡

   @事件名.prevent		-->	阻止默认行为



## 1.3 v-bind 对于样式控制的增强 - 操作class

语法：`class="对象/数组"`

1. 对象 --> 键就是类名，值就是布尔值。如果值为`true`，有这个类，否则没有

   `<div class="box" :class="{类名1：布尔值，类名2：布尔值}"></div>`

2. 数组 --> 数组中所有的类，都会添加到盒子中，本质就是一个`class列表`

   `<div class="box" :class="[类名1，类名2，类名3]"></div>`





## 1.4 v-model应用与其他表单元素





## 1.5 计算属性





## 1.6watch





## 1.7 生命周期钩子函数



1. beforeCreate()
	. created()			创建阶段，响应数据
3. beforeMount()
	. mounted()			挂载阶段，渲染模板
5. beforeUpdate()
	. update()				更新阶段，修改数据，更新视图
7. beforeDestroy()
	. destroyed			销毁阶段，销毁实例



## 1.8 安装less



```
\*安装依赖包 less和less-loader*\
\*npm安装*\
npm i less less-loader --save-dev

\*yarn安装*\
yarn add less less-loader -D (开发依赖)

```



​	



## 1.9组件通信



### 1.9.1 父子关系







#### 1.9.1.2 props校验

作用：为组件  prop 指定验证要求，不符合要求，控制台就会有错误提示，帮助开发者，快速发现问题

语法：

1. 类型校验
2. 非空校验
3. 默认值
4. 自定义校验

```vue
props: {
	校验的属性名: {
		type: 类型,			 // Number, String, Boolean ...
		required: true,		  // 是否必填
		defalut: 默认值,		// 默认值
		validator (value) {
			// 自定义校验逻辑，如果是true则通过校验，反之
			return 是否通过校验
		}
	}	
}
```





### 1.9.2 非父子关系





## 1.10 v-model详解







 



## 1.11 .sync修饰符



## 1.12 ref 和 $ref









## 1.13 自定义指令







## 1.14 插槽使用

















## Vuex 的使用



### state模块





## mutations模块





### getters模块







### actions模块









### modules模块

1. state

   ​

2. mutations

   ​

3. getters

   ​

4. actions

   ​











