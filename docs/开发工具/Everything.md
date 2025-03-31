---
\title: Everything
tag:
  - 开发工具
createTime: 2025/03/25 10:25:44
permalink: /article/jush56mc/
title: Everything
---



# 被吹爆的最强搜索工具Everything，你可能根本不会用！



==Everything== 是一款本地文件搜索神器。

使用 Windows 自带的搜索文件搜索功能可能需要几十秒甚至更长的时间，还不一定能够搜索得到。

但使用 ==Everything== 只需要输入文件名字，不到半秒就能显示结果。

直接输入名字，显示结果。这是最简单的方式，但还有很多实用小技巧。



## 1. 限定文件夹

 如果我想查找一个叫做 ==abc.txt== 的文件，我们会如下操作

![i](/asserts/image/开发工具/everything/everything1.png)

这时却发现搜出来的文件有成百上千个，还是没发想要找到我想要找到的文件。

当我知道，它是存放在E:\\backup 的时候，那我们可以用 `E:\backup abc.txt`

![i](/asserts/image/开发工具/everything/everything2.png)



通过限定文件夹我们还可以这么操作，我们填入 `E:\Tool\ChatOnline\WeChat` 填入微信的路径

![i](/asserts/image/开发工具/everything/everything3.png)

限制成图片，就能看到微信中所有的图片。

限制成视频，就能看到微信中所有的视频。



在路径前面加个 ==!== 就可以排除当前文件夹下的内容了，例如

![i](/asserts/image/开发工具/everything/everything4.png)



## 2. 运算符

上面提到的英文感叹号，其实是程序中常用的 ==“非”== 运算符，表示否定的意思，
类似的还有另外两个运算符，==“与”== 和 ==“或”==。

我们可以用 `abc 123` 表示与，可以搜索包含 ==abc== 和 ==123== 的文件。

我们可以用 `abc|123` 表示或，只要文件名包含 ==abc== 或者 ==123== 中任意一个，都能搜索出来。



## 3. 限定格式

如果们想搜索例如 `XXX.apk` 的文件，我们用之前的限制搜索格式，图片、视频、音频这些就无法实现。

我们可以用 `游戏 *.apk` ，就能搜到符合条件的所有 apk 了。

我们也可以结合运算符使用，例如我想搜索带有字母 ==a== 既是 `.wmv` 又是 `.mp4` 的视频，我们就可以：

![i](/asserts/image/开发工具/everything/everything5.png)



## 4. 正则表达式

正则表达式(Regular Expression)是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为"元字符"），可以用来描述和匹配字符串的特定模式。

正则表达式是一种用于模式匹配和搜索文本的工具。

正则表达式提供了一种灵活且强大的方式来查找、替换、验证和提取文本数据。

正则表达式可以应用于各种编程语言和文本处理工具中，如 JavaScript、Python、Java、Perl 等。

::: tip 提示

如果想要了解更多正则表达式的内容可以翻阅往期内容，[正则表达式](http://localhost:8080/article/9xwcqkdy/)



- `.` 匹配任意字符
- `[a-z]` 表示 a 到 z 之间的所有字符

你可以在导航栏上的帮助，正则表达式语法中看到他们

:::



除此之外呢，在搜索语法中 ==file==、==folder==、==size==、==content== 是最为常用的

```
file: abc // 可以只搜索文件
folder: abc // 可以只搜索文件名
win size:>500mb // 文件名 size:>500mb 搜索大于500mb的文件
win size:>500mb // 搜索 100mb到500mb的文件
content: abc // 可以搜索文件内容，建议限定搜索范围，不然很慢
```



## 5. 服务器

除了搜索上的功能，Everything 还能配置服务器。

![i](/asserts/image/开发工具/everything/everything6.png)



在 ==HTTP服务== 上面点击 ==ETP/FTP 服务器== ，勾选启用ETP/FTP 服务器，然后在工具里的 ==连接ETP 服务器==，

这样就能在其他设备进行连接、管理和操作了。

![i](/asserts/image/开发工具/everything/everything7.png)



## 6. 批量重命名

我们在 ==Everything== 中选择多个文件，然后右键重命名，可以对文件批量重命名，他同意支持各种语法，

比 Windows 自带的强很多。



好了，以上就是本期内容。赶紧开始使用 Everything 吧！！










