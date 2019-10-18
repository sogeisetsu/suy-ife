# 数组的相关参数
数组`shift`删除第一个元素，`pop`删除最后一个元素，返回的都是删除的元素,`unshift`在开头增加一个元素，`push`在结尾增加元素，`splice`用于删除和修改，`slice`用于切片.
***
# 数据类型转换
<br>**一元的 + 运算符可用于把变量转换为数字：如果无法转换变量，则仍会成为数字，但是值为 NaN（Not a number）：**
<br>`constructor`
```JavaScript
"Bill".constructor                 // 返回 "function String()  { [native code] }"
(3.14).constructor                 // 返回 "function Number()  { [native code] }"
false.constructor                  // 返回 "function Boolean() { [native code] }"
[1,2,3,4].constructor              // 返回 "function Array()   { [native code] }"
{name:'Bill', age:62}.constructor  // 返回" function Object()  { [native code] }"
new Date().constructor             // 返回 "function Date()    { [native code] }"
function () {}.constructor         // 返回 "function Function(){ [native code] }"
```
## 可以检查对象是否是数组函数：
```JavaScript
function isArray(myArray) {
    return myArray.constructor === Array;
}
```
***

<br>**可以在文本字符串中使用反斜杠对代码行进行换行。**


><br>`const` 关键字用来声明 JavaScript中的常量（与变量相对，不可修改，但同样是用于存储信息的"容器"。），常量的值不能通过重新赋值来改变，并且不能重新声明。

>就算变量定义的是数组格式，`typeof `返回的数据类型还是 `object` :

**数组和对象都是object**
# if for switch while
## if
## switch
如果 `default `不是 `switch` 代码块中最后一个` case`，请记得用 `break` 结束默认` case`。
## for
```JavaScript
for (语句 1; 语句 2; 语句 3/*第三个语句是不需要;的*/) {
     要执行的代码块
}
```
>语句 1 在循环（代码块）开始之前执行。
<br>语句 2 定义运行循环（代码块）的条件。
<br>语句 3 会在循环（代码块）每次被执行后执行。

>通常，您会使用语句 1 来初始化循环中所使用的的变量（i = 0）。
<br>但情况并不总是这样，JavaScript 不会在意。语句 1 是可选的。
<br>您可以在语句 1 中初始化多个值（由逗号分隔）：

**for循环的语句1可以有多个，用,分割**

```JavaScript
for (i = 0, len = cars.length, text = ""; i < len; i++) { 
    text += cars[i] + "<br>";
}
```
**for-in 循环遍历的是对象的属性，而不是数组的索引。因此， for-in 遍历的对象便不局限于数组，还可以遍历对象。**
<br>语句1和语句3都是可以省略的，语句2也是可选的。
## 正则表达式
```JavaScript
// constructor转换
c="1111";
a=c.constructor===Array;
console.log(a);
// false
// 使用search返回地址
var a="HELLO world";
b=a.search("wo");
console.log(b);
// 6
// 使用replace用于修改
b=a.replace("hello","你好");
console.log(b);
b = a.replace(/hello/i,"nihao");
console.log(b);
// 返回nihao world
// text用来搜索字符串返回true或者别的。
c=/e/i.test("hello world");
console.log(c);
// "hello world"里面有e所以返回true;
console.log(typeof(true));
// exec它通过指定的模式（pattern）搜索字符串，并返回已找到的文本。如果未找到匹配，则返回 null。
console.log(/e/i.exec("hllo woefr"));
// 返回e
console.log(typeof(/e/i.exec("hellofregt")));
// 返回object
```

