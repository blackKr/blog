---
title: krpano 使用教程
date: 2020-01-28 16:26:53
tags: [krpano]
author: black
thumbnail: /images/posts/krpano.png
categories: [VR]
---


# _**全局可以使用的一些值**_	

	场景scene：
	scene[name].content
	scene.count
	scene[name].index
	scene.onstart
	
	陀螺仪事件：
	<plugin name="gyro"  /> name值就是一会调用的key
	onavailable:   在支持陀螺仪的设备上调用
	onunavailable：在不支持陀螺仪的设备上调用
	onenable： 在陀螺仪启用的时候调用
	ondisable： 在陀螺仪禁用的时候调用
	
	


<!--more-->

# _**js 文件调用krpano方法**_
```javascript
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

 // 以上的方法如放大缩小是不带动画的，有卡顿的感觉。下面的方法利用setTimeout方法实现平滑过渡。

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

```


# **_tour.xml参数配置说明_**
	[
	  krpano    xml文件的根元素，所有的元素必须放在该元素中
	  version     创建xml文件的krpano版本，默认1.19
	  onstart    将在xml加载和解析后直接调用
	]
	
	[ include 加载文件 加载的内容将替换include元素  英文：包括 ]

![](/images/krpano/tour-xml.jpeg)

	 [
      skin_settings    默认皮肤的各项参数
      maps    是否使用必应地图或者谷歌地图
	 ]
   
    [ maps_type HTML5下选择使用必应地图或者谷歌地图，值为bing或者google  谷歌地图不提供flash版本，因此在flash内核下默认使用必应地图 ]
      maps_type="google"
      [maps_bing_api_key     在微软申请的地图api的key 免费 ]
     maps_bing_api_key=""
      [maps_google_api_key     在微软申请的地图api的key 免费 ]
     maps_google_api_key=""
      [ maps_zoombuttons     是否显示在线地图的缩放按钮 ]
     maps_zoombuttons="false"
     [ gyro    是否使用陀螺仪（重力感应），只会在移动端的浏览器实现 默认开启 ]
     gyro="true"                   
     webvr="true"
     webvr_gyro_keeplookingdirection="false"
     webvr_prev_next_hotspots="true"
     littleplanetintro="false"
     title="true"
     thumbs="true"
    [
        thumbs_width    缩略图宽度
        thumbs_height    缩略图高度
        thumbs_padding    每个缩略图之间的距离
        thumbs_crop="0|40|240|160"    从某一个坐标开始截取一个区域  从“x=0 y=40”的坐标点开始，截取一个x=240像素，y=160像素的图片
    ]
     thumbs_width="120" thumbs_height="80" thumbs_padding="10"          thumbs_crop="0|40|240|160"
     [thumbs_opened     是否在打开漫游时显示缩略图 ]
     thumbs_opened="false"
     [thumbs_text     是否显示缩略图图文本 ]
     thumbs_text="false"
     [thumbs_dragging     是否允许拖拽缩略图左右滑动 ]
     thumbs_dragging="true"
      [ thumbs_onhoverscrolling     是否允许缩略图根据鼠标运动方向自动往两侧滑动 ]
     thumbs_onhoverscrolling="false"
      [ thumbs_scrollbuttons     是否显示缩略图两段的箭头按钮 ]
     thumbs_scrollbuttons="false"
      [ thumbs_scrollindicator     是否显示缩略图下方的滑动条 ]
     thumbs_scrollindicator="false"
     thumbs_loop="false"
     tooltips_buttons="false"
      [ tooltips_thumbs     是否在缩略图上显示提示文字 ]
     tooltips_thumbs="false"
      [ tooltips_hotspots 是否在热点上显示提示文字 ]
     tooltips_hotspots="false"
      [ tooltips_mapspots 是否在地图热点上显示提示文字 是地图不是漫游场景 ]
     tooltips_mapspots="false"
     deeplinking="false"
     loadscene_flags="MERGE"
     loadscene_blend="OPENBLEND(0.5, 0.0, 0.75, 0.05, linear)"
     loadscene_blend_prev="SLIDEBLEND(0.5, 180, 0.75, linear)"
     loadscene_blend_next="SLIDEBLEND(0.5,   0, 0.75, linear)"
     loadingtext="loading..."
     layout_width="100%"
     layout_maxwidth="814"
     controlbar_width="-24"
     controlbar_height="40"
      [ controlbar_offset 控制整条导航栏的垂直位置，数字越小越往下 ]
     controlbar_offset="20"
     controlbar_offset_closed="-40"
     controlbar_overlap.no-fractionalscaling="10"
     controlbar_overlap.fractionalscaling="0"
     design_skin_images="vtourskin.png"
     design_bgcolor="0x2D3E50"
     design_bgalpha="0.8"
     design_bgborder="0"
     design_bgroundedge="1"
     design_bgshadow="0 4 10 0x000000 0.3"
     design_thumbborder_bgborder="3 0xFFFFFF 1.0"
     design_thumbborder_padding="2"
     design_thumbborder_bgroundedge="0"
     design_text_css="color:#FFFFFF; font-family:Arial;"
     design_text_shadow="1"
     />

   
    if(startscene === null OR !scene[get(startscene)],   copy(startscene,scene[0].name); );
    loadscene(get(startscene), null, MERGE);
    if(startactions !== null, startactions() );
   
    [
      view    视图元素 在xml中可以用来设置启动视图设置
      hlookat    水平方向以球面坐标为单位 默认0.0 取值范围-180°至+180°
      vlookat    以度为单位的球面坐标单位 默认0.0 取值范围-90°至+90°
      fov    目前的视角度数 默认90.0 取值范围0.0至179.0
      fovmin    fov最小值 这将限制全景图放大
      fovmax    fov最大值 这将限制全景图缩小
      maxpixelzoom    观景图的最大像素缩放系数
    ]
   
 
    [ preview    预览图片的url地址 ]
   
 
    [
      image     定义全景图像
      type    类型
        CUBE    立方体全景图 - 六张图像
        CUBESTRIP    单一图像中的立体全景图 支持的立方体格式为6*1，1*6，3*2，2*3  立方体：L F R B U D  
        SPHERE    球形、等角全景图像 通过设置自定义hfov vfov和voffset可以进行局部全景图
        CYLINDER    圆柱形全景图像，  通过设置自定义hfov vfov和voffset可以进行局部全景图  
          未设置    自动检测类型（仅适用于多重影像） 
      multirs     启用平铺多分辨率图像的使用 当值true 表示image元素需要包含多个level元素
      tilesize    定义多重图像的平铺大小                                                 
    ]
	
	button(可选)
	是否展示显示和隐藏网格菜单的默认按钮
	默认值=true
	padding_top(可选)
	缩略图滚动区域的顶部边距
	对手机端该边距将被设置为0
	默认值=75
	padding_bottom(可选)
	缩略图滚动区域的底部边距
	对手机端该边距将被设置为0
	默认值=75
	width_margin(可选)
	缩略图滚动区域的左右边距
	对手机端该边距将被设置为0
	默认值=0
	grid_bgcolor(可选)
	背景颜色
	默认值=0x000000
	grid_bgalpha(可选)
	背景透明度
	默认值=0.7
	display_title(可选)
	展示网格菜单标题
	默认值=true
	grid_title(可选)
	网格菜单标题
	默认值=GRID MENU
	grid_title_css(可选)
	网格菜单标题的CSS样式
	默认值=color:#ffffff;font-family:Raleway;font-size:35px;
	group(可选)
	是否按照分组安排缩略图
	注意不在分组中的场景不会被展示
	默认值=false
	current(可选)
	只展示当前分组的缩略图
	默认值=false
	cat_container_height(可选)
	分组标题容器的高度
	默认值=35
	cat_container_border(可选)
	分组标题容器的边框设置
	默认值=0,0,1,0 0xffffff 1.00
	cat_container_title_css(可选)
	分组标题的CSS样式
	默认值=color:#ffffff;font-family:Raleway;font-size:25px;
	cat_container_title_align(可选)
	分组标题的对齐位置
	默认值=left
	cat_container_border_height(可选)
	分组标题的底部边距
	默认值=1
	display_cat_desc(可选)
	是否显示分组的描述
	默认值=true
	cat_desc_css(可选)
	分组描述的CSS样式
	默认值=color:#ffffff;font-family:Raleway;font-size:14px;text-align:left
	thumbs_crop(可选)
	缩略图的CROP属性
	默认值=0|75|240|150
	thumbs_width(可选)
	缩略图的宽度
	默认值=240
	thumbs_height(可选)
	缩略图的高度
	默认值=150
	thumbs_padding(可选)
	缩略图的边距
	默认值=25
	thumbs_scale (可选)
	按照百分比为单位的最大缩略图尺寸
	默认值=100
	active_thumb_border(可选)
	激活的缩略图的边框设置
	默认值=3 0xffffff 1.00
	display_thumb_title(可选)
	是否展示缩略图标题
	默认值=true
	thumb_title_align(可选)
	缩略图标题的对齐方式
	默认值=bottom
	thumb_title_x(可选)
	缩略图标题的X位置
	默认值=0
	thumb_title_y(可选)
	缩略图标题的Y位置
	默认值=5
	thumb_title_css(可选)
	缩略图标题的CSS样式
	默认值=color:#ffffff;font-family:Raleway;font-size:16px;text-align:left;
	thumb_title_roundedge(可选)
	缩略图标题的背景圆角设置
	默认值=5
	thumb_title_background(可选)
	缩略图标题背景是否显示
	默认值=true
	thumb_title_backgroundcolor(可选)
	缩略图标题背景颜色
	默认值=0x000000
	thumb_title_backgroundalpha(可选)
	缩略图标题背景透明度
	默认值=0.8
	thumb_title_border(可选)
	缩略图标题背景边框是否显示
	默认值=false
	thumb_title_borderwidth(可选)
	缩略图标题边框宽度
	默认值=1
	thumb_title_bordercolor(可选)
	缩略图标题边框颜色
	默认值=0xffffff
	thumb_title_borderalpha(可选)
	缩略图标题边框透明度
	默认值=1
	thumb_title_padding(可选)
	缩略图标题边距
	默认值=3 10
	display_thumb_desc(可选)
	是否在缩略图上显示场景描述
	默认值=true
	thumb_desc_css(可选)
	场景描述的CSS样式
	默认值=color:#ffffff;font-family:Raleway;font-size:15px;text-align:center
	thumb_desc_bg_color(可选)
	场景描述的背景颜色
	默认值=0x000000
	thumb_desc_bg_alpha(可选)
	场景描述的背景透明度
	默认值=0.6
	thumb_desc_padding(可选)
	场景描述的边距
	默认值=8 15
	loadscene_flags(可选)
	Loadscene动作的flag参数
	默认值=MERGE
	loadscene_blend(可选)
	Loadscene动作的blend参数
	默认值=BLEND(1)
	vcenter(可选)
	网格菜单是否垂直居中
	默认值=false
	


# _**events常用事件**_

	events 可调用各类型的事件，如载入过程中不同阶段触发的不同行为,设置事件的响应。
	全局krpano事件:
	一个不具有name属性的<events>元素定义的事件都是全局事件。通常只有一个全局事件。当有另一个<events>标签定义相同的事件时，之前定义的同一事件就会被覆写。
	注意–当载入另一个xml文件或其他场景时，所有全局事件将保留，它们不会发生改变，除非在新的xml文件或场景中被再次定义。
	<events     name=""
	            keep="false"
	        onenterfullscreen=""          进入全屏时执行
	        onexitfullscreen=""           退出全屏时执行
	        onxmlcomplete=""              XML文件加载完成时执行
	        onpreviewcomplete=""          预览图加载完成时执行
	        onloadcomplete=""             全景切片加载完毕时执行
	        onnewpano=""                  启动新的全景场景时执行
	        onremovepano=""               场景被移除时执行（加载新场景前）
	        onnewscene=""                 新场景加载完成时执行
	        onloaderror=""                加载错误时执行，执行被设置后，屏幕将不显示默认的错误信息
	        onkeydown=""                  键盘按下时执行
	        onkeyup=""                    键盘抬起时执行
	        onclick=""                    鼠标点击时执行
	        onsingleclick=""            单击
	        ondoubleclick=""             双击
	        onmousedown=""                当鼠标按下时执行
	        onmouseup=""                  当鼠标松开时执行
	        onmousewheel=""               当鼠标滚轮滚动时执行
	        oncontextmenu=""                  右键菜单
	        onidle=""                     无交互空闲时执行
	        onviewchange=""               场景视图改变时执行（渲染开始时）
	        onviewchanged=""              场景视图改变后执行（渲染完成时）
	        onresize=""                   全景尺寸改变时执行
	        onautorotatestart=""    自动旋转开始时执行
	        onautorotatestop=""    自动旋转停止时执行
	        onautorotateoneround="" 自动旋转一圈时执行
	        onautorotatechange=""  自动旋转状态改变时执行
	        />
	独立局部krpano事件:
	一个具有name属性的<events>元素定义的事件都是独立事件。它可以包含所有类型的事件，但它们不会覆写全局事件，它们是另外进行调用的。这些被“命名”的<events>元素同样具有keep属性（默认值为false）。这意味着没有keep=”true”的<events>元素在新全景载入时将会被自动移除。
	提示–命名的事件能够在不影响其他插件或xml代码的基础下在独立的插件和代码中发生作用。
	
	
	
# _**vtourskin.xml配置说明文档**_
	
	control
	[ mouse    鼠标的控制模式     drag 拖动全景图片   moveto 移动全景图片 drag3d 自由轴3d拖动  ]
	    [ touch    鼠标的控制模式     drag 拖动全景图片  moveto 移动全景图片 drag3d 自由轴3d拖动     ]
	        touch="drag"
	        [ zoomtocursor    当通过鼠标滚轮启用和放大时，全景图将缩放到鼠标光标的位置 ]
	        zoomtocursor="false"
	        [ zoomoutcursor    当通过鼠标滚轮缩小时，全景图将远离鼠标光标的位置，否则，全景图片将远离屏幕中央 ]
	        zoomoutcursor="false"
	        [ draginertia    控制拖动的惯性，值越高，释放控制时视图旋转的动量越少 ]
	        draginertia="0.1"
	        [ dragfriction   拖动控制模式的视图旋转动能的摩擦。值越低，移动越快停止  ]
	        dragfriction="0.9"
	        [ movetoaccelerate    移动加速度 值越高 全景图片越快开始旋转 ]
	        movetoaccelerate="1.0"
	        movetospeed="10.0"
	        [ movetofriction    移动控制模式的视图旋转动能的摩擦。值越低，移动越快停止]
	        movetofriction="0.8"
	        [ keybaccelerate    键盘/按钮的加速控制移动 ]
	        keybaccelerate="0.09"
	        [ keyfriction    键盘/鼠标的移动摩擦控制 ]
	        keybfriction="0.94"
	        [ keybfovchange    鼠标滚轮缩放（以度为单位） ]
	        keybfovchange="0.25"
	        mousefovchange="1.0"
	        [ fovspeed    最大fov变化/缩放速度（用于鼠标滚轮和键盘/按钮控制） ]
	        fovspeed="3.0"
	        [ fovfriction    fov的摩擦变化 ]
	        fovfriction="0.9"
	        [ bouncinglimits    击中平移或者缩放限制时弹回（仅限拖动控制） ]
	        bouncinglimits="true"
	    />
	cursors
	[ standard   鼠标光标默认标准  ]
	    [ dragging   鼠标光标拖动  ]
	    dragging="move"
	    [ moving   鼠标光标移动  ]
	    moving="move"
	/>
	layer/plugin    用于包括图像，徽标，按钮或者动态插件。组合，叠加，分层数。推荐使用layer
	[ name    当前图层/插件元素的名称 ]
	    [ keep    在加载新的全景图时，应该保留或删除此图层/插件元素 ]
	    keep="true"
	    vr="true" devices="mobile"
	    [ url    图层/插件图像文件的路径 支持的文件类型：JPG PNG GIF SWF格式 ]
	    url="rotate_device.png"
	    [ scale    层/插件的缩放 ]
	    scale="0.5"
	    [
	        parent     将当前层/插件分配为另外一层/插件或者热点元素的子元素。
	        STAGE    此父级允许将图层/插件OUTSIDE对齐到泉景区区域
	        BGLAYER    这个父级允许对齐一个图层/插件的全景图
	    ]
	    parent="STAGE"
	    align="top"
	    edge="center"
	    y="28%"
	    
	    [ alpha    图层/插件元素的透明度 0.0=完全透明 1.0=完全可见 ]
	    alpha="0.0"
	    [ enabled    启用图层/插件元素来接受鼠标事件，当设置为"false"时，鼠标事件将被路由到底层元素 ]
	    enabled="false"
	    [ bgcapture    在容器元素的背景上捕获鼠标事件 ]
	bgcapture="false"
	/>
	    keep="true"
	    url=""
	    html5_url="%SWFPATH%/plugins/gyro2.js"
	    softstart="1.0"
	    enabled="false"
	    onavailable="skin_arrange_buttons();"
	    devices="html5"
	/>
	style    通过一个或者多个style元素加载属性样式（注：在样式中定义的属性不能覆盖插件）
	    depth="800"
	    scale="0.5"
	    distorted="true"
	    ath="0"
	    atv="45"
	    alpha="0.5"
	    [ onclick    当图层/插件元素上鼠标单击时将会调用的操作/函数 ]
	    onclick="skin_hotspotstyle_click();"
	    [ onover    当鼠标移动到图层/插件元素上时被调用的动作/函数 ]
	    onover="tween(scale,0.55);"
	    [ onout    当鼠标移出layer元素时将被调用的动作/函数 ]
	    onout="tween(scale,0.5);"
	    [ onloaded    当图层/插件图像的加载完成时被调用的动作/函数 ]
	    onloaded="if(linkedscene AND skin_settings.tooltips_hotspots, copy(tooltip,scene[get(linkedscene)].title); loadstyle(skin_tooltips);)"
	/>
	event    krpano事件 - 用于在特定事件发生时调用动作或者函数
	[ name    当定义一个name属性时，这个事件元素将是独立的本地事件元素  没有name属性设置了全局属性 ]
	    
	        keep="true"
	        [
	            onxmlcomplete    当xml文件或者xml场景代码加载完成时，将会调用此事件
	            在此事件之后，将开始用户控制全景观看和动态加载全景图片
	        ]
	        onxmlcomplete="set(events[skin_events].onxmlcomplete,null);
	        skin_startup();"
	        [ onnewpano    当有新的全景图像，并且有关它的所有信息（type,imagesize,hfov,vfov）可用时，将调用此事件 ]
	        onnewpano="skin_showloading(true);
	        skin_update_scene_infos();
	        skin_deeplinking_update_url();"
	        [ onremovepano    当目前的全景相片将被移除时 将会调用此事件 ]
	        onremovepano="skin_showloading(true);"
	        [ onloadcomplete    当完成全景图像的加载时，将调用此事件
	            当使用多分辨率图像时，当前视图的所有部分被完全加载时 改事件将被调用一次
	        ]
	        onloadcomplete="skin_showloading(false);"
	        onidle="skin_deeplinking_update_url();"
	        [
	            onresize    
	                当查看器的大小（或者区域大小）已更改时，调用此事件
	                每次加载新的全景图时，onresize事件将被调用
	                新的查看器大小将存储在stagewidth和stageheight变量中
	                新区域大小将通过area.pixelwidth和area.pixelheight变量提供
	        ]
	        onresize="skin_onresize();"
	        [ onenterfullscreen    当切换到全屏模式时，将会调用此事件 ]
	        onenterfullscreen.fullscreensupport="set(layer[skin_btn_fs].crop, '64|576|64|64');"
	        [ onexitfullscreen    当从全屏切换成正常的窗口时，将会调用此事件 ]
	        onexitfullscreen.fullscreensupport="set(layer[skin_btn_fs].crop, '0|576|64|64');"
	        [
	            onkeydown   当按下一个键时，将会调用此事件
	                        按键的键码将存储在键码变量中
	                        当按住键时，系统会自动发送重复的onkeydown事件。可以通过control.keydownrepeat设置选择性地禁用
	        ]
	    onkeydown="skin_keydown_event();"
	/>
	action  使用active元素可以定义krpano操作 类似于其他脚本或编程语言中的函数或过程
	        有两种操作类型：    正常的krpano操作 - 适用于Flash和HTML5
	                            javascript krpano操作 - 仅限HTML5
	        
	        正常的krpano操作
	            
	                    active(  ) : 操作2(  ):
	                    ...
	                
	        javascript krpano操作      
	                            
	hotspot     热点(热点是全景中的区域，可以在鼠标悬浮或点击时进行反应。可以用来加载其他全景图，链接到其他网址，更改观看)
	            两种类型 ： 多边形热点    由一组点定义的区域
	                        图像热点    由图像或Flash电影作为热点
	                        如果设置了“URL”属性，就是图像热点。如果没有，并且有点 那么就是多边行热点
	    [
	        type    热点类型
	                image ：   默认情况下 使用url文件作为图像
	                text : 使用热点当做文本域
	    ]
	    type="image"
	    [ keep    是否在加载新的全景图片时保留此热点元素 ]
	    keep="true"
	    [ enabled    是否启用热点元素接收鼠标事件 ]
	    enabled="true"
	    [ handcursor   鼠标悬浮在热点元素上时显示手指  ]
	    handcursor="true
	    [ maskchildren    当设置为yrue时，所有在父级元素之外的子元素都将被屏蔽 ]
	    maskchildren="true"
	    [
	        zorder  热点元素的深层“Z”排列 重叠元素的设置
	                这个值可以是任何字符串或者数字。所有带有zorder设置的热点元素将按给定值排序
	                当没有设置时，顺序是未定义的，取决于浏览器的加载完成顺序
	                zorder 应该是0-100之间的值，没有负值
	    ]
	    zorder=""
	    style="skin_base|webvr_menu_style"
	    [ ath atv    热点的球面坐标 以度为单位。热点图像将通过dage设定的点对齐 ]
	    ath="0.0"
	    atv="0.0"
	    [ edge 热点元素的边缘/锚点  值有：lefttop left leftbottom top center bottom righttop right rightbottom ]
	    edge="center"
	    [ zoom 缩放时 热点图像的大小与pano的大小发生变化 ]
	    zoom="false"
	    [
	       如果在三维空间中，热点图像与当前的phano/viewing被扭曲了。当扭曲的使用rx/ry/rz设置来旋转三维空间热点是
	            一. 当启用时，将使用1000像素的大小作为像素大小的参考。这1000个像素覆盖了三维空间90度的视野
	            二. 扭曲的热点不能也不应该有子元素。
	            三. 显示Flash插件，因为失真的热点应该是可能的，但不是直接与他们交互。这种情况下。插件不会直接显示，只是一种屏幕截图的图像
	            四. 在HTML5中，通过zorder对正常和扭曲的热点进行排序是不可能的，zorder2设置还可以作为正常热点使用，以将他们移动到扭曲的热点之上
	    ]
	    distorted="flase"
	    [ rx/ry/rz    在x/y/z轴上的三维旋转，只有在distorted是true时使用 ]
	    rx="0.0"
	    ry="0.0"
	    rz="0.0"
	    [ width/height    热点图像的目标大小 热点图像将会缩放到这个大小 ]
	    width=""
	    height=""
	    [ scale    热点元素的扩展 ]
	    scale=""
	    [ rotate   热点元素的旋转度  ]
	    rotate="0.0"
	    [ alpha   热点元素的透明度  ]
	    alpha="1.0"
	    crop="0|64|64|64"
	    ox="-64"
	    onover="tween(scale,0.6);"
	    onout="tween(scale,0.5);"
	    onhover=""
	    ondown=""
	    onup=""
	    onloaded=""
	    vr_timeout="750"
	    onclick="skin_nextscene_loop(-1);"
	    [ visible    热点是否可见 ]
	    visible="false"
	    devices="html5.and.webgl"
	/>
	network    网络设置
	[ retrycount    在显示错误信息之前，自动下载重新加载服务器错误的次数 ]
	memory    内存使用设置
	[ maxmem    
	    为MB解码的图像块设置最大内存使用量。当达到maxmem限制时，当前未使用（需要/可见）图快的内存将被返回
	    当前默认设置为：
	        Flash ： 350MB
	        HTML5
	                · 桌面 ： 150-400MB(取决于全屏尺寸)
	                · 平板电脑/手机 ： 50MB
	                · iOS : 40MB(7.1之前)
	                · iOS : 50MB(7.1及以上)
	                · iPhone 4/4s : 40MB
	]
	
	
	
