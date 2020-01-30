---
title: krpano 常用方法
date: 2020-01-28 16:09:43
tags: [krpano]
author: black
thumbnail: /images/posts/krpano.png
categories: [VR]
---


_**xml中使用**_
	
	绑定js方法：js(js方法名(参数))
	
	获取经纬度：get(view.hlookat),get(view.vlookat)
	
	鼠标点击位置：get(mouse.x), get(mouse.y)
	
	获取当前场景name：get(scene[get(xml.scene)].name)
	
	获取当前场景索引：get(scene[get(xml.scene)].index)
	
	获取缩放的值：get(view.fov)

<!--more-->

_**js文件中可以krpano的方法**_

	/*定义控件*/
	var krpano = document.getElementById("krpanoSWFObject");
	
	/*获取变量*/
	var fov = Number(krpano.get("view.fov"));
	var hlookat = Number(krpano.get("view.hlookat"));
	var vlookat = Number(krpano.get("view.vlookat"));
	
	/*放大*/
	fov -= 10.0;
	krpano.set("view.fov", fov);
	
	/*缩小*/
	fov += 10.0;
	krpano.set("view.fov", fov);
	
	/*左旋转*/
	hlookat += 10.0;
	krpano.set("view.hlookat", hlookat);
	
	/*右旋转*/
	hlookat -= 10.0;
	krpano.set("view.hlookat", hlookat);
	
	/*上倾斜*/
	vlookat -= 10.0;
	krpano.set("view.vlookat", vlookat);
	
	/*下倾斜*/
	vlookat += 10.0;
	krpano.set("view.vlookat", vlookat);
	
	/*自动旋转*/
	krpano.set("autorotate.enabled", true);
	 
	/*VR模式*/
	krpano.call("WebVR.enterVR();");
	 
	/*全屏*/
	krpano.set("fullscreen", true);
	
	/*停止旋转*/
	krpano.set("autorotate.enabled", false);
	
	以上的方法如放大缩小是不带动画的，有卡顿的感觉。下面的方法利用setTimeout方法实现平滑过渡。
	
	/*放大*/
	krpano.set("fov_moveforce",-1);
	setTimeout("krpano.set('fov_moveforce',0)",200);
	
	/*缩小*/
	krpano.set("fov_moveforce",1);
	setTimeout("krpano.set('fov_moveforce',0)",200);
	
	/*左旋转*/
	krpano.set("hlookat_moveforce",-1);
	setTimeout("krpano.set('hlookat_moveforce',0)",200);
	
	/*右旋转*/
	krpano.set("hlookat_moveforce",1);
	setTimeout("krpano.set('hlookat_moveforce',0)",200);
	
	/*上倾斜*/
	krpano.set("vlookat_moveforce",-1);
	setTimeout("krpano.set('vlookat_moveforce',0)",200);
	
	/*下倾斜*/
	krpano.set("vlookat_moveforce",1);
	setTimeout("krpano.set('vlookat_moveforce',0)",200);
