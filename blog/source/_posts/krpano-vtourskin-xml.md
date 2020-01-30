---
title: krpano vtourskin.xml
date: 2020-01-28 16:42:17
tags: [krpano]
author: black
thumbnail: /images/posts/krpano.png
categories: [VR]
---


`点击下载`  [vtourskin.xml](https://github.com/blackKr/source/blob/master/krpano/vtourskin.xml)

<!--more-->

# **_陀螺仪控制_**
```xml
<!--陀螺仪默认配置 enabled = true 默认开启陀螺仪-->
<!--url 原来是空字符串 现在改为 gyro2.js 路径-->
<!-- gyro plugin -->
<plugin name="skin_gyro" keep="true" url="%SWFPATH%/plugins/gyro2.js"
      html5_url="%SWFPATH%/plugins/gyro2.js"
      softstart="1.0" enabled="true" onavailable="skin_arrange_buttons();"
      devices="html5" />


<!--初始化判断是否支持渲染陀螺仪的位置-->
<!-- determine the visibility of the buttons and calculate their positions -->
<action name="skin_arrange_buttons" scope="local">
   calc(show_selbuttons, scene.count GT 1);
   calc(show_thumbutton, skin_settings.thumbs == true);
   calc(show_mapbutton,  skin_settings.maps == true);
   <!--初始化判断是否支持渲染陀螺仪的位置-->
   calc(show_gyrobutton, (view.vlookatrange == 180 OR lp_scene === xml.scene));
   <!--calc(show_gyrobutton, plugin[skin_gyro].available == true AND (view.vlookatrange == 180 OR lp_scene === xml.scene));-->
   calc(show_vrbutton,   webvr.isavailable == true);
   calc(show_fsbutton,   device.fullscreensupport == true);

   set(lpos,6);
   set(cpos,0);
   if(show_gyrobutton, dec(cpos,20));
   if(show_vrbutton OR plugin[webvr].mobilevr_fake_support == true, dec(cpos,24));
   set(rpos,6);

   calc(show_dirbuttons, !device.mobile AND ((area.pixelwidth + 2*cpos) GT 520) );

   copy(layer[skin_btn_navi].visible, show_dirbuttons);

   copy(layer[skin_btn_prev].visible, show_selbuttons);
   copy(layer[skin_btn_next].visible, show_selbuttons);
   if(show_selbuttons, inc(lpos,44); inc(rpos,44); );

   copy(layer[skin_btn_thumbs].visible, show_thumbutton);
   copy(layer[skin_btn_thumbs].x, lpos);
   if(show_thumbutton, inc(lpos,40));

   copy(layer[skin_btn_map].visible, show_mapbutton);
   copy(layer[skin_btn_map].x, lpos);
   if(show_mapbutton, inc(lpos,40));

   if(show_dirbuttons,
      copy(layer[skin_btn_navi].x, cpos);
      inc(cpos,140);

      set(layer[skin_btn_gyro].align, center);
      copy(layer[skin_btn_gyro].visible, show_gyrobutton);
      copy(layer[skin_btn_gyro].x, cpos);
      if(show_gyrobutton, inc(cpos,48));

      set(layer[skin_btn_vr].align, center);
      copy(layer[skin_btn_vr].visible, show_vrbutton);
      copy(layer[skin_btn_vr].x, cpos);
      if(show_vrbutton, inc(cpos,80));
     ,
      set(layer[skin_btn_gyro].align, left);
      copy(layer[skin_btn_gyro].visible, show_gyrobutton);
      copy(layer[skin_btn_gyro].x, lpos);
      if(show_gyrobutton, inc(lpos,40));

      set(layer[skin_btn_vr].align, left);
      copy(layer[skin_btn_vr].visible, show_vrbutton);
      copy(layer[skin_btn_vr].x, lpos);
      if(show_vrbutton, inc(lpos,80));
   );

   copy(layer[skin_btn_hide].x, rpos);
   inc(rpos,40);

   copy(layer[skin_btn_fs].visible, show_fsbutton);
   copy(layer[skin_btn_fs].x, rpos);
   if(show_fsbutton, inc(rpos,40));
</action>


<!--包含更新陀螺仪是否开启-->
<action name="skin_update_scene_infos" scope="local">
   if(xml.scene !== null AND scene[get(xml.scene)].index GE 0,

      if(skin_settings.title,
         if(global.title, calc(layer[skin_title].html, global.title + ' - ' + scene[get(xml.scene)].title); , copy(layer[skin_title].html, scene[get(xml.scene)].title ); );
         delayedcall(0.1, set(layer[skin_title].visible,true) );
      );

      if(skin_settings.thumbs_loop == false,
         if(scene[get(xml.scene)].index GT 0,
            set(layer[skin_btn_prev], enabled=true, alpha=1.0);
           ,
            set(layer[skin_btn_prev], enabled=false, alpha=0.3);
         );

         sub(lastsceneindex, scene.count, 1);
         if(scene[get(xml.scene)].index LT lastsceneindex,
            set(layer[skin_btn_next], enabled=true, alpha=1.0);
           ,
            set(layer[skin_btn_next], enabled=false, alpha=0.3);
         );
        ,
         if(scene.count GT 1,
            set(layer[skin_btn_prev], enabled=true, alpha=1.0);
            set(layer[skin_btn_next], enabled=true, alpha=1.0);
           ,
            set(layer[skin_btn_prev], enabled=false, alpha=0.3);
            set(layer[skin_btn_next], enabled=false, alpha=0.3);
         );
      );

      if(scene.count GT 1,
         set(layer[skin_btn_prev_fs].visible, true);
         set(layer[skin_btn_next_fs].visible, true);
        ,
         set(layer[skin_btn_prev_fs].visible, false);
         set(layer[skin_btn_next_fs].visible, false);
      );

      calc(parentname, 'skin_thumb_' + scene[get(xml.scene)].index);
      if(layer[get(parentname)],
         set(layer[skin_thumbborder], parent=get(parentname), visible=true);
        ,
         set(layer[skin_thumbborder].visible, false);
      );

      if(scene[get(xml.scene)].mapspotname,
         layer[skin_map].activatespot(get(scene[get(xml.scene)].mapspotname));
         layer[skin_map].pantospot(get(scene[get(xml.scene)].mapspotname));
      );

      <!--判断陀螺仪是否支持-->
      if(plugin[skin_gyro].isavailable == true AND view.vlookatrange == 180,
         set(layer[skin_btn_gyro].visible, true);
        ,
         set(layer[skin_btn_gyro].visible, true)
         <!--set(layer[skin_btn_gyro].visible, false)-->
      );

      if(view.vlookatrange LT 180,
         if(skin_settings.backup_control_bouncinglimits === null,
            copy(skin_settings.backup_control_bouncinglimits, control.bouncinglimits);
         );
         set(control.bouncinglimits, false);
        ,
         if(skin_settings.backup_control_bouncinglimits !== null,
            copy(control.bouncinglimits, skin_settings.backup_control_bouncinglimits);
         );
      );

      if(scene[get(xml.scene)].isvideopano AND plugin[video] !== null,
         skin_video_addcontrols();
        ,
         skin_video_removecontrols();
      );
   );
</action>
```


# _**鱼眼模式时切换场景动作**_
```xml
<!--鱼眼模式时切换场景动作-->
<action name="skin_nextscene_loop" scope="local" args="indexadd">
   add(newsceneindex, scene[get(xml.scene)].index, indexadd);
   sub(lastsceneindex, scene.count, 1);
   if(newsceneindex LT 0, copy(newsceneindex,lastsceneindex));
   if(newsceneindex GT lastsceneindex, set(newsceneindex,0));
   skin_loadscene(get(newsceneindex), calc(indexadd LT 0 ? skin_settings.loadscene_blend_prev : skin_settings.loadscene_blend_next));
   js(eyeChangeVr(get(scene[get(xml.scene)].index)));
</action>
```


# _**vr缩略图列表**_
```xml
<!--vr缩略图列表-->
<action name="skin_addthumbs" scope="local">
   if(skin_settings.thumbs == false,
      set(layer[skin_btn_thumbs].visible,false);
     ,
      copy(thumbwidth, skin_settings.thumbs_width);
      copy(thumbheight, skin_settings.thumbs_height);
      copy(thumbpadding, skin_settings.thumbs_padding);
      copy(thumbcrop, skin_settings.thumbs_crop);

      calc(thumbxoffset, thumbwidth + thumbpadding);
      calc(thumbxcenter, thumbxoffset * 0.5);
      calc(thumbbarwidth, thumbxoffset * scene.count + thumbpadding);
      calc(thumbbarheight, thumbpadding + thumbheight + thumbpadding);

      if(skin_settings.thumbs_scrollindicator,
         copy(layer[skin_thumbs_scrollindicator].y, thumbbarheight);
         add(thumbbarheight, layer[skin_thumbs_scrollindicator].height);
      );

      set(layer[skin_thumbs], width=get(thumbbarwidth), height=get(thumbbarheight) );

      calc(layer[skin_thumbs_scrollleft].y, thumbbarheight * 0.5);
      calc(layer[skin_thumbs_scrollright].y, thumbbarheight * 0.5);

      for(set(i,0), i LT scene.count, inc(i),
         calc(thumbname, 'skin_thumb_' + i);
         addlayer(get(thumbname));

         set(layer[get(thumbname)],
            url=get(scene[get(i)].thumburl),
            keep=true,
            parent='skin_thumbs',
            align='lefttop',
            crop=get(thumbcrop),
            width=get(thumbwidth),
            height=get(thumbheight),
            x=calc(thumbpadding + i*thumbxoffset),
            y=get(thumbpadding),
            linkedscene=get(scene[get(i)].name),
            onclick='copy(layer[skin_thumbborder].parent, name); skin_loadscene(get(linkedscene),get(skin_settings.loadscene_blend));js(thumbClick(get(linkedscene)));'
         );

         set(scene[get(i)],
            thumbx=calc(thumbpadding + i*thumbxoffset + thumbxcenter),
            thumby=get(thumbpadding)
         );

         if(skin_settings.tooltips_thumbs,
            set(layer[get(thumbname)].tooltip, get(scene[get(i)].title) );
            layer[get(thumbname)].loadstyle(skin_tooltips);
         );
         if(skin_settings.thumbs_text,
            calc(thumbtext, 'skin_thumbtext_' + i);
            addlayer(get(thumbtext));
            layer[get(thumbtext)].loadstyle(skin_thumbtext_style);
            set(layer[get(thumbtext)], keep=true, parent=get(thumbname), html=get(scene[get(i)].title) );
         );
       );

      if(scene.count == 1,
         set(layer[skin_thumbs].align, 'lefttop');
      );
   );
</action>
```


# _**罗盘**_
```xml
<!--罗盘-->
<vtourskinxmlpath url="./" />
<style name="sprtestyle" url="http://cdn.haofang.net/static/publickWeb/krpano/sprites.png"/>
<style name="needlestyle" url="http://cdn.haofang.net/static/publickWeb/krpano/needle.png"/>
```


# _**底部按钮配置**_
```xml
<!--底部按钮配置-->
<!-- skin layout -->
<layer name="skin_layer" keep="true" type="container" align="top" width="get:skin_settings.layout_width" maxwidth="get:skin_settings.layout_maxwidth" height="100%" maskchildren="true" visible="false" bgcapture="false" zorder="1">
   <layer name="skin_scroll_window" type="container" align="bottom" width="100%" height="100%" x="0" y="calc:skin_settings.controlbar_offset + skin_settings.controlbar_height - skin_settings.controlbar_overlap" maskchildren="true" onloaded="skin_calc_opened_closed();" zorder="1">
      <layer name="skin_scroll_layer" type="container" align="bottom" width="get:skin_settings.controlbar_width" height="100%" x="0" y="200" y_offset="get:skin_settings.controlbar_overlap" accuracy="1" bgalpha="get:skin_settings.design_bgalpha" bgcolor="get:skin_settings.design_bgcolor" bgborder="get:skin_settings.design_bgborder" bgroundedge="get:skin_settings.design_bgroundedge" bgshadow="get:skin_settings.design_bgshadow">
         <layer name="skin_title" type="text" align="lefttop" edge="leftbottom" x="4" y="0" zorder="4" enabled="false" bg="false" css="calc:skin_settings.design_text_css + ' text-align:left; font-style:italic; font-size:12px;'" textshadow="get:skin_settings.design_text_shadow" visible="false" onautosized="skin_video_updateseekbarwidth();" />
         <layer name="skin_video_controls" type="container" align="lefttop" edge="leftbottom" width="100%" height="18" visible="false">
            <layer name="skin_video_seekbar_container" type="container" align="lefttop" width="100%" height="100%" bgcapture="true" ondown="skin_video_ondownseeking();" >
               <layer name="skin_video_seekbar" type="container" bgcolor="0xFFFFFF" bgalpha="0.25" align="center" width="100%" height="2">
                  <layer name="skin_video_loadbar" type="container" bgcolor="0xFFFFFF" bgalpha="0.5" align="left" width="0" height="2" />
                  <layer name="skin_video_seekpos" type="container" bgcolor="0xFFFFFF" bgalpha="1.0" align="left" edge="center" x="0" bgroundedge="8" width="10" height="10" />
               </layer>
            </layer>
            <layer name="skin_video_time" type="text" align="rightbottom" x="4" enabled="false" bg="false" css="calc:skin_settings.design_text_css + ' text-align:left; font-style:italic; font-size:12px;'" textshadow="get:skin_settings.design_text_shadow" html="0:00 / 0:00" />
         </layer>
         <layer name="skin_scroll_container" type="container" align="lefttop" width="100%" height="100%" x="0" y="0" bgroundedge="get:skin_settings.design_bgroundedge" maskchildren="true">
            <layer name="skin_thumbs_container" type="container" align="lefttop" width="100%" height="100%" visible="false">
               <layer name="skin_thumbs_scrollleft"  style="skin_base|skin_glow" crop="0|64|64|64"  align="lefttop"  edge="left"  x="5" y="50" scale="0.5" zorder="2" alpha="1.0" ondown2="asyncloop(pressed, layer[skin_thumbs].scrollby(+2,0));" visible="false" />
               <layer name="skin_thumbs_scrollright" style="skin_base|skin_glow" crop="64|64|64|64" align="righttop" edge="right" x="5" y="50" scale="0.5" zorder="2" alpha="1.0" ondown2="asyncloop(pressed, layer[skin_thumbs].scrollby(-2,0));" visible="false" />
               <layer name="skin_thumbs_scrollindicator" type="container" bgcolor="0xFFFFFF" bgalpha="0.25" align="lefttop" width="0" y="100" height="2" visible="false" enabled="false" />
               <layer name="skin_thumbs" state="closed" url.flash="%SWFPATH%/plugins/scrollarea.swf" url.html5="%SWFPATH%/plugins/scrollarea.js" direction="h" align="top" width="100%" height="100" zorder="1" onloaded="skin_updatescroll();" onscroll="skin_updatethumbscroll();" />
            </layer>
            <layer name="skin_map_container" type="container" align="leftop" width="100%" height="100%" bgroundedge="get:skin_settings.design_bgroundedge" maskchildren="true">
               <layer name="skin_map" state="closed" url="" visible="false" align="lefttop" width="100%" height="50%" x="0" y="0" zorder="1" lat="0" lng="0" zoom="10" bgalpha="0" maptype="satellite" onmapready="skin_addmapspots();">
                  <maptypecontrol visible="true" align="righttop" x="5" y="5" buttonalign="v" scale.mobile="1.5" />
                  <radar visible="false" headingoffset="0" />
                  <spotstyle name="DEFAULT" url="vtourskin_mapspot.png" activeurl="vtourskin_mapspotactive.png" edge="bottom" x="-5" y="-8" scale="0.5" />
                  <layer name="skin_map_zoom_in"  style="skin_base" visible="get:skin_settings.maps_zoombuttons" crop="9|512|46|64"  align="right" x="0" y="-40" zorder="2" ondown="layer[skin_map].zoomin();  skin_buttonglow(get(name));" onup="skin_buttonglow(null);" />
                  <layer name="skin_map_zoom_out" style="skin_base" visible="get:skin_settings.maps_zoombuttons" crop="73|512|46|64" align="right" x="0" y="+40" zorder="2" ondown="layer[skin_map].zoomout(); skin_buttonglow(get(name));" onup="skin_buttonglow(null);" />
               </layer>
            </layer>
         </layer>
      </layer>
   </layer>

   <layer name="skin_splitter_bottom" type="container" align="bottom" width="100%" height="calc:skin_settings.controlbar_offset + skin_settings.controlbar_height - skin_settings.controlbar_overlap" y="0" maskchildren="true" onloaded="skin_calc_opened_closed();" zorder="2">
      <layer name="skin_control_bar_bg" type="container" align="bottom" width="get:skin_settings.controlbar_width" height="calc:skin_settings.controlbar_height + skin_settings.controlbar_overlap" x="0" y="get:skin_settings.controlbar_offset" bgcolor="get:skin_settings.design_bgcolor" bgalpha="get:skin_settings.design_bgalpha" bgborder="get:skin_settings.design_bgborder" bgroundedge="get:skin_settings.design_bgroundedge" bgshadow="get:skin_settings.design_bgshadow" />
   </layer>

   <layer name="skin_control_bar" type="container" align="bottom" width="get:skin_settings.controlbar_width" height="calc:skin_settings.controlbar_height" x="0" y="get:skin_settings.controlbar_offset" onloaded="skin_calc_opened_closed();" zorder="3">
      <layer name="skin_control_bar_buttons" type="container" align="leftbottom" width="100%" height="get:skin_settings.controlbar_height">
         <!--底部切换上一个VR图-->
         <layer name="skin_btn_prev"      style="skin_base|skin_glow" crop="0|64|64|64"   align="left"        x="5"    y="0"  scale="0.5" alpha="0.5"  onclick="if(skin_settings.thumbs_loop, skin_nextscene_loop(-1), skin_nextscene(-1) );js(bottomBtnChangeVr(get(scene[get(xml.scene)].name)));" />
         <layer name="skin_btn_thumbs"    style="skin_base|skin_glow" crop="0|128|64|64"  align="left"        x="50"   y="0"  scale="0.5" ondown2="skin_showmap(false); skin_showthumbs();" />
         <layer name="skin_btn_map"       style="skin_base|skin_glow" crop="64|128|64|64" align="left"        x="90"   y="0"  scale="0.5" ondown2="skin_showthumbs(false); skin_showmap();" visible="false" />
         <!--底部按钮 上下左右缩放-->
         <layer name="skin_btn_navi" type="container" align="center" x="0" width="240" height="32">
            <layer name="skin_btn_left"  style="skin_base|skin_glow" crop="0|192|64|64"  align="center"      x="-100" y="0"  scale="0.5" ondown2="set(hlookat_moveforce,-1);" onup2="set(hlookat_moveforce,0);" />
            <layer name="skin_btn_right" style="skin_base|skin_glow" crop="64|192|64|64" align="center"      x="-60"  y="0"  scale="0.5" ondown2="set(hlookat_moveforce,+1);" onup2="set(hlookat_moveforce,0);" />
            <layer name="skin_btn_up"    style="skin_base|skin_glow" crop="0|256|64|64"  align="center"      x="-20"  y="0"  scale="0.5" ondown2="set(vlookat_moveforce,-1);" onup2="set(vlookat_moveforce,0);" />
            <layer name="skin_btn_down"  style="skin_base|skin_glow" crop="64|256|64|64" align="center"      x="+20"  y="0"  scale="0.5" ondown2="set(vlookat_moveforce,+1);" onup2="set(vlookat_moveforce,0);" />
            <!--底部按钮 放大-->
            <layer name="skin_btn_in"    style="skin_base|skin_glow" crop="0|320|64|64"  align="center"      x="+60"  y="0"  scale="0.5" ondown2="set(fov_moveforce,-1);"  onup2="set(fov_moveforce,0);js(bottomBtnScaleVr(get(view.fov)));" />
            <!--底部按钮 搜小-->
            <layer name="skin_btn_out"   style="skin_base|skin_glow" crop="64|320|64|64" align="center"      x="+100" y="0"  scale="0.5" ondown2="set(fov_moveforce,+1);"     onup2="set(fov_moveforce,0);js(bottomBtnScaleVr(get(view.fov)));" />
         </layer>
         <layer name="skin_btn_gyro"      style="skin_base|skin_glow" crop="0|384|64|64"  align="center"      x="+140" y="0"  scale="0.5" onclick="switch(plugin[skin_gyro].enabled); if(plugin[skin_gyro].enabled, skin_showmap(false));" visible="false" devices="html5" />
         <layer name="skin_btn_vr"        style="skin_base|skin_glow" crop="0|0|80|64"    align="center"      x="+146" y="0"  scale="0.5" onclick="webvr.enterVR();" visible="false" />
         <layer name="skin_btn_fs"        style="skin_base|skin_glow" crop="0|576|64|64"  align="right"       x="90"   y="0"  scale="0.5" onclick="switch(fullscreen);" devices="fullscreensupport" />
         <layer name="skin_btn_hide"      style="skin_base|skin_glow" crop="0|448|64|64"  align="right"       x="50"   y="0"  scale="0.5" onclick="skin_hideskin()" />
         <layer name="skin_btn_show" type="container" bgcapture="true" align="bottom" width="100%" height="get:skin_settings.controlbar_height" y="calc:skin_settings.controlbar_height - skin_settings.controlbar_offset_closed" onclick="skin_showskin()" onhover="tween(alpha,1.0);" onout="tween(alpha,0.25);" ondown.touch="onhover();" onup.touch="onout();" visible="false" capture="false" alpha="0.0">
            <layer name="skin_btn_show_icon" style="skin_base" crop="64|448|64|64" scale="0.5" align="bottom" y="2" enabled="false" />
         </layer>
         <!--底部切换下一个VR图-->
         <layer name="skin_btn_next" style="skin_base|skin_glow" crop="64|64|64|64"  align="right"       x="5"    y="0"   scale="0.5" alpha="0.5"  onclick="if(skin_settings.thumbs_loop, skin_nextscene_loop(+1), skin_nextscene(+1) );js(bottomBtnChangeVr(get(scene[get(xml.scene)].name)));" />
         </layer>
      </layer>

   <layer name="skin_loadingtext" type="text" align="center" x="5" y="-5" html="get:skin_settings.loadingtext" visible="false" bg="false" enabled="false" css="calc:skin_settings.design_text_css + ' text-align:center; font-style:italic; font-size:22px;'" textshadow="get:skin_settings.design_text_shadow" />
   <layer name="skin_buttonglow"  style="skin_base" crop="64|384|64|64" align="center" x="0" y="1" scale="1.0" alpha="0.0" visible="false" enabled="false" />
   <layer name="skin_thumbborder" type="container" x="get:skin_settings.design_thumbborder_padding" y="get:skin_settings.design_thumbborder_padding" width="calc:skin_settings.thumbs_width - 2*skin_settings.design_thumbborder_padding" height="calc:skin_settings.thumbs_height - 2*skin_settings.design_thumbborder_padding" visible="false" enabled="false" align="lefttop" bgborder="get:skin_settings.design_thumbborder_bgborder" bgroundedge="get:skin_settings.design_thumbborder_bgroundedge" />
</layer>
```
