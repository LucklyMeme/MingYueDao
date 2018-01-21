
window.onload=function(){
    //制作轮播图
    //先获取元素
    var Ocarousel=document.getElementById("carousel");
    var ul=Ocarousel.children[0];//获取ul标签
    var imgWidth=Ocarousel.offsetWidth;//获取单个图片的宽度
    var ulis=ul.children;//获取ul下的所有li标签
    var ol=Ocarousel.children[1];//获取ol标签
    var olis=ol.children;//获取ol下的所有li标签
    //动态创建图片
    var colorArr=[1,2,3,4]
    for (var i = 0; i < colorArr.length; i++) {
        var uli=document.createElement("li");
        uli.style.backgroundImage="url(images/"+colorArr[i]+".jpg)";
        ul.appendChild(uli);
    }
    //动态创建小点
    for (var i = 0; i < ulis.length; i++) {
        var oli=document.createElement("li");
//            oli.className="dats";
        ol.appendChild(oli);
    }
    //默认第一个小点
    olis[0].className="datsId";
    //克隆第一张图片
    //ul.appendChild(ulis[0].cloneNode(true));
    //当我们点击小点时 图片滚动
    for (var i = 0; i < olis.length; i++) {
        olis[i].index=i;
        olis[i].onmouseover=function(){
            //if(this.index==olis.length){
            //
            //}
            for (var i = 0; i < olis.length; i++) {
                olis[i].className="";
            }
            this.className="datsId";
            animate(ul,-this.index*imgWidth);
            num=this.index;
        }
    }


    //封装一个运动函数
    function animate(element,target){
        clearInterval(element.timer);
        element.timer=setInterval(function(){
            var leftVal=element.offsetLeft;
            var step=(target-leftVal)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            if(Math.abs(leftVal-target)>Math.abs(step)){//错误问题 出现是两者之间的距离大于，不是减
                leftVal+=step;
                element.style.left=leftVal+"px";
            }else{
                element.style.left=target+"px";
                clearInterval(element.timer);
            }
        },20)
    }
    //自动轮播
    var timer=null;//错误！！ 定时器声明与下面的自动轮播图声明相同了，所以出现了点击跳楼 自动轮播停止
    var num=0;
    var ulisNumber=$("#header #carousel ol li");
    timer=setInterval(function(){
        num++;
        if(num==ulisNumber.length){
            num=0;
            //ul.style.left=0;
        }
        ulisNumber.eq(num).trigger("mouseover");
    },3000)

    //当我们鼠标移入小点时清除定时器


    //关闭视频声音关闭及滚动屏幕视频和关闭按钮跟着滚动
    var video=document.getElementById("audio");
    var off=document.getElementById("off");
    off.onclick= function enableMute()
    {
        video.muted = true;
    }
    window.onscroll=function(){
        video.style.position="fixed";
        off.style.position="fixed";
    }
    //jQuery 控制视频及背景的显示隐藏
    $("#header .video").click(function(){
        $("#video").show();
        $("#video .login-bg").show();
    })
    $("#video span").click(function(){
        $("#video").hide();
        $("#video .login-bg").hide();
    })

    //当鼠标移入全新内容出现的效果
    $("#main .onchange").mouseenter(function(){
        $(this).children("a").css({
            backgroundColor:"#1c2125",
            color:"#fff"
        })
        //$(this).children("span").show();
})
    $("#main .onchange").mouseleave(function(){
        $(this).children("a").css({
            backgroundColor:"#2fc3a3",
            color:"#fff"
        })
        //$(this).children("span").hide();
    })

    //手风琴效果
    var omain=document.getElementById("main");//获取ID main
    var odown=omain.children[1];//获取ID main中的第一个元素节点
    var ocontainer=odown.children[0];//获取类down中的第一个元素节点
    var oul=ocontainer.children[1];//获取版心中的ul标签
    var ool=ocontainer.children[2];//获取版心中ol标签
    var ols=ool.children;//获取ol里的所有li标签
    var lis=oul.children;//获取ul里的所有li标签
    //遍历ul里的所有li标签

    for (var i = 0; i < lis.length; i++) {
        //由于它们是定位的，所以让他们按照它们的索引值来给他们left
        //判断小图片的索引值  默认第一张图片显示
        if(i==0){
            lis[0].style.left=i*63+"px";
        }else{
            lis[i].style.left=(i-1)*63+559+"px";
        }
        //设置每一张大图的left值
        ols[i].style.left=i*63+"px";
        //第一个张小图设置它的层级与透明度为0  其他li显示
        $(lis[0]).css({zIndex: 0,opacity: 0}).siblings().css({zIndex: 2,opacity: 1});
        //第一张大图设置它显示 其他为隐藏
        $(ols[0]).css({display:"block"}).siblings().css({display:"none"});
        lis[i].index=i;
        //当鼠标移入的时候 判断让它的left改变
        lis[i].onmouseover=function(){
            //当我们移入一个li的时候 它小图层级透明度变0 其他显示
            $(this).css({zIndex: 0,opacity: 0}).siblings().css({zIndex: 2,opacity: 1});
            //同时大图被移入的的索引值与小图的索引值相同显示  其他隐藏
            $(ols[this.index]).css({display:"block"}).siblings().css({display:"none"});
            //oli[this.index].style.display="block";
            //当我们点击某一个li时 判断所有的li
            for (var i = 0; i < lis.length; i++) {
                //当我们移入某个li 让它左边的li连同它 设置一个left值
                if(i<=this.index){
                    lis[i].style.left=i*63+"px";
                    //oli[i].style.display="block";
                }else{
                    //当li的索引值大于我们移入的索引值时 再设置一个索引值
                    lis[i].style.left=(i-1)*63+559+"px";

                }
            }
        }
    }

    //跳楼效果
    //获取跳楼的高度
    //由于我们需要跳楼的高度不确定 所以分别获取高度
    //第一层的高度
    var firstTop=$("#header .container .h-top")[0].offsetTop;
    //第二层的高度
    var twoTop=$("#main .up")[0].offsetTop;
    //第三层高度
    var threeTop=$("#main .down")[0].offsetTop;
    //获取点击的所有要点击的li
    var flis=document.getElementById("fiex").getElementsByTagName("li");
    //由于不知道怎么使用jquery区别点击的li的详细信息 只能使用js
    //把3个高度放入数组中
    var arrTop=[firstTop,twoTop,threeTop];
    var timer1; //错误！！ 定时器声明与上面的自动轮播图声明相同了，所以出现了点击跳楼 自动轮播停止
    for (var i = 0; i < flis.length; i++) {
        flis[i].index=i;
        flis[i].onclick=function(){
                clearInterval(timer1);
            //当我们点击哪个li时 同时切换到数组中的高度
            var target=arrTop[this.index];
                timer1=setInterval(function(){
                    //获取当前卷曲高度
                    var current=myScroll().scrollTop;
                    var step=(target-current)/10;
                    step=step>0?Math.ceil(step):Math.floor(step);
                    current+=step;
                    //window方法 当前的窗口滚到哪个为准  参数1为x轴 参数2为y轴
                    window.scrollTo(0,current);
                    if (current == target) {
                        clearInterval(timer1);
                    }
                },20);
        }
    }
    //获取页面卷曲高度函数
    function myScroll() {
        return {
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        }
    }

}


