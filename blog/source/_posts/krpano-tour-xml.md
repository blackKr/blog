---
title: krpano tour.xml
date: 2020-01-28 16:56:14
tags: [krpano]
author: black
thumbnail: /images/posts/krpano.png
categories: [VR]
---


`点击下载`  [tour.xml](https://github.com/blackKr/source/blob/master/krpano/tour.xml)

<!--more-->

# _**右键菜单**_
```xml
<!-- 右键菜单 -->
<contextmenu fullscreen="true" versioninfo="false" enterfs="全屏查看" exitfs="退出全屏">
    <item name="kr" caption="KRPANO" showif="false"/>
    <item name="fs" caption="全屏查看" showif="false"/>
    <item name="cc" caption="更改控制模式" onclick="cm_changecontrolmode();"
          separator="true" showif="false"/>
    <item name="nv" caption="正常视角"  onclick="cm_normal_view();"
          showif="false" separator="true"      />
    <item name="fv" caption="鱼眼视角" onclick="cm_fisheye_view();"
          showif="false" devices="flash|webgl" />
    <item name="sv" caption="立体视角" onclick="cm_stereographic_view();"
          showif="false" devices="flash|webgl" />
    <item name="av" caption="建筑视角" onclick="cm_architectural_view();"
          showif="false" />
    <item name="pv" caption="帕尼尼视角" onclick="cm_pannini_view();"
          showif="false" devices="flash|webgl" />
    <item name="lp" caption="小行星视角" onclick="cm_littleplanet_view();"
          showif="false" devices="flash|webgl" />
</contextmenu>
```


# _**跨网**_
```xml
<!--security flashplayer和html5相关的安全/跨域设置-->
<!--cors 设置是否开启跨网络认证，off\anonymous\use-credentials-->
<security cors="anonymous">
    <!--设置加载文件的url    （仅flash）-->
    <crossdomainxml url="" />
    <!--允许被访问的域名设置    只读-->
    <allowdomain domain="" />
</security>
```


# _**全局事件**_
```xml
<!--全局事件 指定name会变成局部的-->
<events keep="true"
      onclick="skin_showthumbs();js(listen_mouse(get(mouse.x),get(mouse.y)));"
      onviewchange="js(listen_angle(get(view.hlookat),get(view.vlookat)));"
      onloadcomplete="
               ifnot(hadopen,
                   skin_showthumbs();set(hadopen,true);
               );
               ifnot(layer[skin_title_logo3].enabled,
                   set(layer[skin_title_logo3].enabled,true);
                   set(layer[skin_title_pr].enabled,true);
                   delayedcall(startpic1,1.5,tween(layer[startpic_container].ox,2500,1));
                   delayedcall(startpic2,2.5,set(layer[startpic_container].enabled,false);set(layer[startpic_container].visible,false));
               )"
      onmousedown="js(listen_keydown(get(mouse.x), get(mouse.y)));"
      onmouseup="js(listen_keyup(get(mouse.x), get(mouse.y)));"
           onmousewheel="js(mouseWheel(get(view.fov)));"
/>
```


# _**默认皮肤的各项参数**_
```xml
<!--thumbs_text Boolean 缩略图文本-->
<!--tooltips_thumbs Boolean 缩略图上显示鼠标hover文案提示-->
<!-- customize skin settings: maps, gyro, webvr, thumbnails, tooltips, layout, design, ... -->
<skin_settings maps="false"
               maps_type="google"
               maps_bing_api_key=""
               maps_google_api_key=""
               maps_zoombuttons="false"
               gyro="true"
               webvr="true"
               webvr_gyro_keeplookingdirection="false"
               webvr_prev_next_hotspots="true"
               littleplanetintro="false"
               title="true"
               thumbs="true"
               thumbs_width="120" thumbs_height="80" thumbs_padding="10" thumbs_crop="0|40|240|160"
               thumbs_opened="false"
               thumbs_text="true"
               thumbs_dragging="true"
               thumbs_onhoverscrolling="false"
               thumbs_scrollbuttons="false"
               thumbs_scrollindicator="false"
               thumbs_loop="false"
               tooltips_buttons="false"
               tooltips_thumbs="true"
               tooltips_hotspots="false"
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
```
