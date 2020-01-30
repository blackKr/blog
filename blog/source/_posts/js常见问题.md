---
title: js常见问题
date: 2020-01-27 17:08:33
tags: [javascript]
thumbnail: /images/posts/js.png
categories: [web前端]
---


### break 和 continue 

break 语句可以立即退出循环，阻止再次反复执行任何代码。

continue 语句只是退出当前循环，根据控制表达式还允许继续进行下一次循环
    
与有标签的语句一起使用:
  break 语句和 continue 语句都可以与有标签的语句联合使用，返回代码中的特定位置。
<!--more-->

```javascript
var iNum = 0;
outermost:
for (var i=0; i<10; i++) {
  for (var j=0; j<10; j++) {
    if (i == 5 && j == 5) {
      break outermost;
    }
            
    iNum++;
  }
}
alert(iNum); //输出 "55"
```
      
### arguments 对象
	
在函数代码中，使用特殊对象 arguments，无需明确指出参数名访问	
	
1.检测参数个数
	  arguments.length
	
2.模拟函数重载
```javascript
function doAdd() {
  if(arguments.length == 1) {
    alert(arguments[0] + 5);
  } 
  else if(arguments.length == 2) {
    alert(arguments[0] + arguments[1]);
  }
}
	 
doAdd(10);//输出 "15"
doAdd(40, 20);//输出 "60"
```
     
3.Function 对象
1.length 属性	
函数属于引用类型，所以也有属性和方法
ECMAScript 可以接受任意多个参数（最多 25 个）
```javascript
function doAdd(iNum) {
  alert(iNum + 10);
}

function sayHi() {
  alert("Hi");
}

alert(doAdd.length);//输出 "1"
alert(sayHi.length);//输出 "0"
```

### Function 对象的方法
Function 对象也有与所有对象共享的 valueOf() 方法和 toString() 方法。这两个方法返回的都是函数的源代码，在调试时尤其有用
```javascript
function doAdd(iNum) {
	alert(iNum + 10);
}

document.write(doAdd.toString());	
// 输出 
function doAdd(iNum) {
	alert(iNum + 10);
}
```

### js对象
1.对象废除
	var oObject = new Object;
	// do something with the object here
	oObject = null;
	注意：废除对象的所有引用时要当心。如果一个对象有两个或更多引用，则要正确废除该对象，必须将其所有引用都设置为 null。
	每用完一个对象后，就将其废除，来释放内存，这是个好习惯。这样还确保不再使用已经不能访问的对象，从而防止程序设计错误的出现。

2.String 对象
	1).new String()  method: toString() , valueOf() , split() // 切分成数组
	2).查找某字符是否存在method:
	  1.indexOf() , lastIndexOf()  如果没有找不到子串，则返回 -1 , 否则返回具体的位置。
	  2.localeCompare()  判断字符串位置 （ 使用时判断是否大于、等于、小于 0 ）
	var oStringObject = new String("yellow");
	alert(oStringObject.localeCompare("brick"));		//输出 "1"   字符串之后
	alert(oStringObject.localeCompare("yellow"));		//输出 "0"   等于
	alert(oStringObject.localeCompare("zoo"));		//输出 "-1"  字符串之前
  
3.slice() 和 substring()
	var oStringObject = new String("hello world");
	alert(oStringObject.slice("3"));		//输出 "lo world"
	alert(oStringObject.substring("3"));		//输出 "lo world"
	alert(oStringObject.slice("3", "7"));		//输出 "lo w"
	alert(oStringObject.substring("3", "7"));	//输出 "lo w"
  对于负数参数，slice() 方法会用字符串的长度加上参数，substring() 方法则将其作为 0 处理（也就是说将忽略它）。

4.判断类型  instanceof , typeOf
	var oStringObject = new String("hello world");
	alert(oStringObject instanceof String);	//输出 "true

5.Array 对象
	1).方法：
	concat()       // 连接两个或更多的数组，并返回结果。	
	join()         // 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
	push()         // 末尾添加新元素
	unshift()      // 开头增加新元素
	shift()        // 删除并返回数组的第一个元素
	pop()          // 删除并返回数组的最后一个元素
	slice()        // 从某个已有的数组返回选定的元素
	splice()       // 删除元素，并向数组添加新元素。
	sort()         // 对数组的元素进行排序
	reverse()      // 	颠倒数组中元素的顺序。

6.boolean false的情况（false，0，“”，null，undefined和NaN ）


### 作用域
```javascript
 	// var 作用域是 上层函数体(函数及作用域）
  // let 作用域是 自身函数体（块及作用域)

  for(var i = 0; i < 5; ++i) {
    console.log("i=" + i);
  }

  for (var j = 0; j < 5; ++j) {
    setTimeout(()=>{
      console.log("j=" + j);
    }, 1);
  }

  for (var m = 0; m < 5; ++m) {
    (function(n){
      setTimeout(()=>{
        console.log("m=" + n);
      }, 1);
    })(m);
  }

  for (var m = 0; m < 5; ++m) {
    (function(n){
      setTimeout(()=>{
        console.log("m=" + m);
      }, 1);
    })(m);
  }

  for(let k = 0; k < 5; ++k) {
    console.log("k=" + k);
  }

  for (let l = 0; l < 5; ++l) {
    setTimeout(()=>{
      console.log("l=" + l);
    }, 1);
  }
```

