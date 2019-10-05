# transition
>CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。
<br>要实现这一点，必须规定两项内容：
>- 指定要添加效果的CSS属性
>- 指定效果的持续时间

<br>例如
```
<!DOCTYPE html>
<html>
    <head>
        <style>
            div{
                height: 200px;
                width: 100px;
                background-color: #cccccc;
                margin: 20px auto;
                transition: all 2s;/*先用transition指定时间*/
            }
            /* 制定div的hover，也就是鼠标放在div上时div的变化 */
            div:hover{
                background-color: aliceblue;
                transform: scale(0.8) rotate(360deg);
                /* 这里指定一些需要transform的东西，比如scale、rotate、translate等 */
            }
        </style>
    </head>
    <body>
        <div><p>点击发生变化</p></div>
    </body>
</html>
```
**学习链接**
<br>[CSS3 常用四个动画（旋转、放大、旋转放大、移动）](https://blog.csdn.net/FungLeo/article/details/49848905)
<br>[css3过渡教程](https://www.runoob.com/css3/css3-transitions.html)
<br>[CSS 简单的鼠标悬浮过渡效果](https://c.runoob.com/codedemo/5527)