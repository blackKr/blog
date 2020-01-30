---
title: svn使用技巧
date: 2020-01-27 13:20:23
tags: [svn]
thumbnail: /images/posts/svn.png
categories: [命令]
---


### 恢复
1.恢复一整个目录的文件
  svn revert -R .  （ . 代表当前 ）
2.丢弃对一个文件的修改：
	svn revert foo.c

<!--more-->

### 拉分支
svn cp -r 需要拉到的版本号 -m "pull ios_5.0.0_10969_20171206" svn://116.62.100.209/panda/trunk/client/文件名  svn://116.62.100.209/panda/branches/release/文件名_版本_版本号_时间（例：ios_5.0.0_10969_20171206）


### 合并版本(需 cd 到 当前分支)
svn merge -c 需要合并的版本号 svn://116.62.100.209/panda/trunk/client/文件名 .   （ . 代表 当前路径 ）
提交：merge from 版本号 trunk

反向合并：svn merge -c -需要合并的版本号 svn://116.62.100.209/panda/trunk/client/文件名 .   （ . 代表 当前路径 ）


### 解决合并后的冲突
svn resolved path  （ 已过时 ）
svn resolved --accept mine-full path （ 1.5版本后，加上--accept参数，尝试自动处理冲突 ）


### 添加文件
svn add 文件名称
svn add *.js   （添加所有 .js 文件）


### 提交代码
svn ci -m'注释信息' path
svn ci -m'注释信息'   ( 提交所有改动的代码 ) ( 可以不写注释 )


### 更新到指定版本
svn up -r 版本号 path （ 将指定文件还原到指定的版本号 ）


### 查看文件或者目录状态
svn st -v path  （ 查看文件或者目录状态 最后 ）


### 删除文件
svn rm -m'注释' path


### 查看日志
svn log path


### 查看文件详细信息
svn info path 


### 比较差异
svn diff -r m:n path ( 比较 指定文件夹 m 和 n 版本的差异 )


### 查看文件内容
cat path


### 修改文件内容
vi path


### 更改文件名称
svn move old_path_name new_path_name


### 常见状态
<font color=#ff5400>

	  ""  没有修改
		
  	'A'  新增  
  	
  	'D'  删除
  	
  	'M'  修改
  	
  	'R'  替代
  	
  	'C'  冲突  
  	
  	'I'  忽略
  	
  	'?'  未受控
  	
  	'!'  丢失，一般是将受控文件直接删除导致
</font>


### 设置忽略文件
export SVN_EDITOR=vim
svn propedit svn:ignore 需要设置忽略的文件/文件夹   此时在vim中 输入需要忽略的文件夹名称即可


### 查看最近几条日志
svn log -l 10     (查看最近10条日志 l 是小写的 L)



