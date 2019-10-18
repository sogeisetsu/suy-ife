var c=12;
var day
console.log(typeof(c))
if (c!="12"){
    console.log("yes")
}else if (c=='12'){
    console.log("完全相等")
}
else{
    console.log("no")
}
c= new Date()
console.log(new Date().getDay())
switch(new Date().getDay()){
    // case 0:
    //     day ="星期天";
    //     break;
    // case 2:
    //     day ="星期2";
    //     break;
    // case 3:
    //     day = "星期3";
    //     break;
    // default:
    //     day="未设置";
    //     // break;
    case 0:
day = "星期天";
break;
case 1:
day = "星期一";
 break;
case 2:
day = "星期二";
 break;
case 3:
day = "星期三";
 break;
}
console.log("今天是"+day);
switch (new Date().getDay()) {
case 0:
day = "星期天";
break;
case 1:
day = "星期一";
 break;
case 2:
day = "星期二";
 break;
case 3:
day = "星期三";
 break;
// case 4:
//     day = "星期四";
//      break;
// case 5:
//     day = "星期五";
//      break;
// case 6:
//     day = "星期六";
}
console.log("今天是"+day);
var c=["html","css","python","java"] ,d="",i;
for(i=0;i<c.length;i++){
d+=c[i]+"\t";
}
console.log(d);
var text="123";
for(i=0;i<c.length;i++){
text+=c[i]+"\n";
}
console.log(text)
var x;
for (x in c){
console.log("star")
console.log(c[x]);
}
function zixing(){
var b=1;
for(i=0,c=1;i<100;i++){
// console.log("typeof(c)= "+typeof(c));
// console.log("c="+c);
b=1+i;
document.write(b);
document.write("<br>");
// console.log(typeof(b));
}
}
var i=null;
i=0;
while (i<10){
i++;
console.log(i)
if(i===3){
break;
} 
}
var i=null;
i=0;
do{
console.log(i);
i++;
if(i===3){
console.log("hello");
// continue;
break;
}
console.log("执行完毕")
}
while(i<10);
console.log("stt")
console.log(i);
i=0;
var list=["hello","world","welcome","to","china"]
biaoqian:{
console.log(list[i]+"\n");
console.log(list[3]+"\n");
i++;
console.log(list[i]+"\n");
break biaoqian;
console.log("after break");
}
console.log("111".constructor)
// var a="111";
// document.getElementById("id").innerHTML=lz(a);
// function lz(sh){
//     return sh.constructor === String;
// }
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("qq").innerHTML = isArray(fruits);

function isArray(myArray) {
return myArray.constructor === Array;
}
var d=["11","123",["12",'1']];
console.log(d.length);
// c=d.join("*")
d.pop();
d.push("增加");
console.log(d);
d.shift();
console.log(d);
d=null;
d=["hello","world","nihao"];
c=d.shift();
console.log(c+"\n"+d);
c=d.unshift(["11","11"]);
console.log(c+"\n"+d);
console.log(d[0]);
// 通过splice删除或增加元素；
d.splice(0,1,"xin");
console.log(d);
// concat用来链接元素
dd=["新","元","素"];
console.log(d.concat(dd));
c="111";
console.log(c.length);
// slice()用于切出。
e=dd.slice(1,2);
console.log(e);
var b= new Date();
console.log(b);
console.log("11");
console.log(typeof(b));
bb=b.toDateString();
console.log(bb);
console.log(typeof(bb));
b=b.getDate();
console.log(b);
console.log(typeof(b));
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
function jj(){
    var jieguo=document.getElementById("jieguo");
    jieguo.innerHTML="nihao";
    var input=document.getElementById("input").value;
    try{
        if(isNaN(input)) throw "不是数字";
        if(input=="") throw "是空的";
        input=Number(input);
        if(input<5) throw "太小";
        if(input>10) throw "太大";
    }
    catch(err){
        jieguo.innerHTML="输入："+err;
    }
    finally{
        document.getElementById("input").value="";
    }
}