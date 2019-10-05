# 2D
**`transform`**
<br>例如`transform: translate(1px,30px);`
<br>translate() 方法
>`translate`()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。

<br>rotate() 方法
>rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。

<br>scale() 方法
>scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：
<br>`-ms-transform:scale(2,3); /* IE 9 */`
<br>`-webkit-transform: scale(2,3); /* Safari */`
<br>`transform: scale(2,3); /* 标准语法 */`
<br>scale（2,3）转变宽度为原来的大小的2倍，和其原始大小3倍的高度。

<br>skew() 方法
>包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。
<br>skewX(<angle>);表示只在X轴(水平方向)倾斜。
<br>skewY(<angle>);表示只在Y轴(垂直方向)倾斜。

<br>**skew实例**
```
div
{
transform: skew(30deg,20deg);
-ms-transform: skew(30deg,20deg); /* IE 9 */
-webkit-transform: skew(30deg,20deg); /* Safari and Chrome */
}
```
# 3D
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191005200508590.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3N1eXVlcw==,size_16,color_FFFFFF,t_70)