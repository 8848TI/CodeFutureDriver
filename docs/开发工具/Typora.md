---
title: Typora
tags:
 - 开发工具
 - markdown
createTime: 2023/08/28 14:19:02
permalink: /article/xy7ill5c/
---

# Markdown教程

> 左下角的小圆圈可以查看大纲, 旁边那个`</>`可以查看源代码，注意，有许多功能右击鼠标就可以使用，方便快捷。

+++

[TOC]

+++

## 一.语法

>##### 1.标题
>
>```markdown
>n级标题代表多少个井号
># 一级标题
>## 二级标题
>...
>```


> ##### 2.字体
>
> ```markdown
> *斜体1*
> _斜体2_
> 快捷键ctrl+I
> **粗体**
> __粗体__
> ctrl+B
> ***粗斜体***
> ___粗斜体___
> ```


> ##### 3.各种线
>
> 三个及以上的 ‘+’, ‘*’, ‘-’ 表示一条分割线
>
> +++
>
> ***
>
> ---
>
> ```markdown
> ~~删除线~~
> Alt+Shift+5
> ```
>
> <u>下划线</u>	“<u></u>”
>
> ctrl+U


> ##### 4.列表
>
> ```markdown
> 无序列表（使用 '*' , '+' , '-' 表示）
> ```
>
> * 第一项
>
> * 第二项
>
> ```markdown
> 有序列表（数字. 项）  
> ```
>
> 1. 第一项
>
> 2. 第二项
>
> ```markdown
> 嵌套列表（先使用符号进入列表,然后回车换行,系统自动生成第二项,按下tab第二项变成第一项的子列表,按回车退出当前列表   
> ```
>
> * 主标签
>
>   * 子标签
>
> ***
>
> 1. 主标签
>    1. * 子标签
>       * 子标签


> ##### 5.区块
>
> ```markdown
> 使用 '>' 加空格表示
> 退出区块按enter
> ```
>


> ##### 6.代码
>
> ```markdown
> 一行代码用`代码`包裹
> 代码段用三个```加enter/空格+编程语言表示
> ```
>
> `System.out.println("Hello World!");`
>
> ``` java
> import java.util.Scanner;
> public class Main{
>     ...
> }
> ```


>##### 7.链接
>
>```markdown
>[链接文字](链接地址)
>或		<链接地址>
>```
>
>[markdown语法](https://blog.csdn.net/qq_41261251/article/details/102817673?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171729956316800225530711%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=171729956316800225530711&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-102817673-null-null.142^v100^pc_search_result_base2&utm_term=typora%E4%BD%BF%E7%94%A8&spm=1018.2226.3001.4187)
>
><http://baidu.com>
>
>鼠标移到链接上，ctrl+左键点击访问
>
>```markdown
>还可以打开本地文件
>[打开照片或者文档](本地文件的地址)
>```
>
>[头像](C:\Users\31833\Pictures\Saved Pictures\profile.jpg)
>
>``` markd
>页内跳转
>[链接文字](#标题文字)
><a name="标题文字"></a>
>```
>
>[开头](#Markdown教程)


> ##### 8.图片
>
> ``` markdown
> ![alt 属性文本](图片地址 “可选标题”)
> ```
>
> `![alt 图片插入](markdown01.png "从网上复制的图片存到本地")`


> ##### 9.表格
>
> ``` markdown
> |表头|表头|表头|
> |:---|:---:|---:|
> |单元格|单元格|单元格|
> |单元格|单元格|单元格|
> :- 左对齐
> -: 右对齐
> :-: 居中
> ctrl+t
> ```
>
> | 左对齐 | 中间对齐 | 右对齐 |
> | :---- | :----: | ----: |
> | Marry | Tom  | Candy |
>

+++

## 二.数学公式

> ##### 1.插入数学公式
>
> ``` markdown
> 行内公式（内联公式）
> $数学公式$
> 行间公式（外联公式）
> $$
> 	数学公式
> $$
> 如果要在行间公式换行直接在换行的点加\\
> ```
>
> $1+2=3$
> $$
> 1+2=3\\
> 2*3=6
> $$
>

> ##### 2.上标下标
>
> ``` markdown
> 上标 '^'
> 下标 '_'
> 如果要嵌套要用 '{}' 括起来
> ```
>
> $a^x$
>
> $a^{x^n}$
>
> $a_x$

> ##### 3.根号
>
> ``` markdown
> \sqrt{数字}
> \sqrt[根号x]{数字}
> ```
>
> $\sqrt{2}$
>
> $\sqrt[3]{8}$

> ##### 4.上下水平线
>
> ``` markdown
> 下水平线： \underline{公式}
> 上水平线： \overline{公式}
> ```
>
> $\underline{a+b}$
>
> $\overline{a-b}$

> ##### 5.上下水平大括号
>
> ``` markdown
> \overbrace{表达式}
> \underbrace{表达式}
> \overbrace{表达式}^{文字}
> \underbrace{表达式}_{文字}
> ```
>
> $\overbrace{x_1+x_2+x_3}$
>
> $\underbrace{x^1+x^2+x^3}$
> $$
> \overbrace{x+x^2+x^3}^{x^n}\\
> \underbrace{x+x_2+x_3}_{x_n}
> $$
>

> ##### 6.向量符号
>
> ``` markdown
> \vec{...}
> 单个或多个字母向量
> \overrightarrow{...}
> \overleftarrow{...}
> 全覆盖向量符号
> ```
>
> $\vec{abc}$
>
> $\overrightarrow{ABC}$
>
> $\overleftarrow{ABC}$

> ##### 7.分数
>
> ``` markdown
> \frac{分子}{分母}
> ```
>
> $\frac{2}{3}$
>
> $\frac{\sqrt{3}}{4}$

> ##### 8.积分运算符
>
> ``` markdown
> \int
> \int_{1}^{2}
> ```
>
> $\int$
>
> $\int^{2}_{1}$

> ##### 9.求和
>
> ``` markdown
> \sum
> \sum_{i=m}^{n}公式
> ```
>
> $\sum$
>
> $\sum_{i=0}^{n}x^i$

> ##### 10.连乘
>
> ``` markdown
> \prod
> \prod_{i=m}^{n}
> ```
>
> $\prod$
>
> $\prod_{i=0}^{n}a[i]$

> ##### 11.特殊符号
>
> $\alpha$	$\beta$	$\gamma$	$\theta$	$\rho$	$\lambda$	$\mu$	$\Delta$	…
>
> ```markdown
> '>=' \geq 或 \ge
> '<=' \leq 或 \le
> '!=' \neq 或 \ne
> '*'	 \times
> '/'	 \div
> ```
>
> $\geq$	$\leq$	$\neq$	$\times$	$\div$

> ##### 12.矩阵表示
>
> ```markdown
> \begin{matrix}
> 1 & 2 & 3
> \end{matrix}
> '&'	分割每一个元素
> ```
>
> $$
> \begin{matrix}
> 1 & 2 & 3 \\
> 4 & 5 & 6
> \end{matrix}
> $$
>
> ```markdown
> 再 \begin 前面加上 "\left[" 即可显示括号 '[' 也可更换 '|'
> \end后也要加上\right]
> ```
>
> $$
> \left[\begin{matrix}
> 1 & 2 & 3\\
> 4 & 5 & 6
> \end{matrix}\right|
> $$
>

> ##### 13.方程组
>
> ```markdown
> \begin{equation}
> \left\{
> 	\begin{array}{l,r,c,lr,rl}
> 	....
> 	\end{array}
> \right.
> \end{equation}
> "\left\{" 和 "\right." 表示在方程组的左边加上 '{' ，在右边加上 '.' ，因为 '{' 在外联公式中有特殊的意义，因此需要在其前面加上转义字符 '\'
> "\begin{array}" 和 "\end{array}" 表示它们之间的是数组，其实这也可以用来表示矩阵
> {lr} 表示左边一列 l 对齐, 右边一列 r 对齐
> '&' 分割 	'\\' 换行 
> ```
>
> $$
> \begin{equation}
> \left\{
> 	\begin{array}{lr}
> 	x = k \times y & \\
> 	y = k \times x + b & y \le x
> 	\end{array}
> \right.
> \end{equation}
> $$
>

> ##### 14.分段函数
>
> $$
> y = 
> \begin{equation}
> \left\{
> 	\begin{array}{lr}
> 	x-1 & x \ge 0 \\
> 	x^2	& x < 0
> 	\end{array}
> \right.
> \end{equation}
> $$
>

+++

## 三.typora与HTML

> ```markdown
> <font size="" color=""></font>
> 字体颜色大小
> <p align="left、center、right"></p>
> 对齐方式
> <img src="" width=num height=num style="float:left、right"/>
> 图像
> ```

+++

## 四.扩展用法

> ##### 1.[插入emoji](https://blog.csdn.net/Ahcao2008/article/details/130474445?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171731499016800180649310%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=171731499016800180649310&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-130474445-null-null.142^v100^pc_search_result_base2&utm_term=emoji%E8%A1%A8%E6%83%85&spm=1018.2226.3001.4187)
>
> ```markdown
> :加emoji的标签:
> ```
>
> :crab:	:horse:	:house:	:man:	:jack_o_lantern:	:clown_face:	:ghost:	:grinning:	:sweat_smile:
>
> ##### 2.插入目录
>
> ```markdown
> [toc]根据标题生成目录
> ```
>
> ##### 3.导出
>
> 文件->导出
>
> ##### 4.文本高亮
>
> ```markdown
> ==文字==
> ```
>
> ==高亮==
>
> ##### 5.上下标
>
> ```markdown
> ~下标~
> ^上标^
> ```
>
> H~2~O
>
> x^2^ 

<p align="right">参考：CSDN水木子_</p>
