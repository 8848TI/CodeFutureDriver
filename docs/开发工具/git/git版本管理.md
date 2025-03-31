---
title: git版本管理
tags: 
 - git
 - 开发工具
createTime: 2024/05/12 11:22:08
permalink: /article/wvr5h8j5/
---
# git基础指南



概念：一个免费开源，分布式的代码版本控制系统，帮助开发团队维护代码

作用：记录代码内容，切换代码版本，多人开发提高效率





# 初始 git



## 1. git 安装

网址：https://git-scm.com/

确认是否安装成功可以使用查看 git 版本命令 `git -v`



## 2. git 配置用户信息

配置：用户名和邮箱，提交代码时表明身份

`git config --global user.name "用户名"` --设置用户名

`git config --global user.email "邮箱"` --设置邮箱



## 3. 初始化仓库 

用 `git init` 命令初始化创建仓库，此时文件夹里会出现后缀为 `.git` 的文件

`.git` 文件用来存储记录历史，需要勾选隐藏文件夹选项才能看见 `.git` 文件



## 4. git 的三个区域

**git的使用：**

- 工作区：实际开发时操作的文件夹
- 暂存区：保存之前的准备区域（暂存改动过的文件）
- 版本库：提交并保存暂存区中的内容，产生一个版本快照



```
git add 文件名 // 暂存指定文件
git add . // 暂存所有文件
git commit -m ""说明注释 // 提交并保存
```



## 5. Git 文件状态

|   文件状态   |       概念        |         场景         |
| :----------: | :---------------: | :------------------: |
| 未跟踪（U）  | 从未被 Git 管理过 |        新文件        |
| 新添加（A）  | 第一次被 Git 暂存 | 之前版本记录无此文件 |
| 未修改（''） |   三个区域统一    |      提交保存后      |
| 已修改（M）  |  工作区内容变化   |    修改了内容产生    |



# 常用 git 命令



```markdown
1. git config --list					// 查看清单 
2. git status -s 						// 查看文件状态
3. git remote -v 						// 本地仓库中有哪些远程仓库
4. git remote remove					// 移除当前仓库的远程仓库地址
5. git status               			// 查看哪些文件未跟踪或已修改
6. git pull							  	// 从 github 上拉取文件
7. git remote add origin '路径' 		   // 添加仓库地址
8. git push --set-upstream origin "master" // 上传文件
9. git push -u origin "master"			// 第八点简写
10. git push							// 第九点简写
11. git branch 分支名     // 创建分支
12. git branch -v         // 查看当前分支
13. git checkout  分支名  // 切换分支
```



# 案例

下面我们来演示如何将本地文件上传到 github



## 1. 创建仓库

![i](/asserts/image/开发工具/git/git1.png)



![i](/asserts/image/开发工具/git/git2.png)



![i](/asserts/image/开发工具/git/git3.png)



## 2.上传仓库

找到自己要上传的项目文件夹，我这边创建了一个名为 `gitStudy` 的文件夹，

在终端中用 `git init` 命令初始化 ==git== 管理的项目

![i](/asserts/image/开发工具/git/git4.png)



接着用 `git add .` 的命令提交全部代码到暂存区，文件图标会从 ==U== 变成 ==A== ，

然后用 `git commit -m "说明注释"` ，提交一次，

用 `git remote add origin + HTTPS地址`  建立连接通道，这个HTTPS地址就是上面特别让您记住的那个，

最后 `git push -u origin master` 命令提交就完成了。

![i](/asserts/image/开发工具/git/git5.png)



==需要注意的是==，第一次提交因为从未连接过 github ，所以会要出入账号和密码。

`F5`刷新 gitub 的界面。

最后，我们的项目就成功上传到 github 上面了。

![i](/asserts/image/开发工具/git/git6.png)



如果我们此时想添加一个 `README.md` 文件来描述我们的项目。

==切记：== 千万不要 github 面板上直接添加 or 修改。

由于我们的 github 远程仓库中修改后，我们本地仓库并未同步，下一次的 `push` 提交就会报错。

如果你不小心在 github 的面板上新建了文件，我们可以用 `git pull` 的命令拉取远程仓库代码，

在重新 `push` 上交一次就可以了。



好了，今天的代码我们就讲到这里，赶紧打开你的编辑器实操起来吧。