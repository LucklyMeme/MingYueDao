$(function(){
    //轮播图
    var banner=document.getElementById("banner");//获取banner元素
    var containter=banner.children[0];
    var bCenter=containter.children[1];
    var imgWidth=bCenter.offsetWidth;//获取图片的宽度
    //var ul=bCenter.children[0];
    //var ulis=ul.children;
    //var ol=bCenter.children[1];
    //var olis=ol.children;
    //ol.children[0].className="bgColor";
    //for (var i = 0; i < olis.length; i++) {
    //    olis[i].index=i;
    //    olis[i].onmouseover=function(){
    //        for (var i = 0; i < olis.length; i++) {
    //            olis[i].className="";
    //        }
    //        this.className="bgColor";
    //        $("#banner .u-o").stop().animate({left:-this.index*imgWidth});
    //    }
    //}
    //把jq对象存放到变量中 以便使用
    var ulisNumber=$("#banner .u-d li");
    var flag=true;
    //默认第一个li样式
    ulisNumber.eq(0).addClass("bgColor");
    ulisNumber.mouseenter(function(){
        if(flag){
            flag=false;
            var num=$(this).index();
            $(this).addClass("bgColor").siblings().removeClass("bgColor")
            $("#banner .u-o").stop().animate({left:-$(this).index()*imgWidth},400,function(){
                flag=true
            });
        }

        count=num;
    })
    //设置自动滚动
    var timer=null;
    var count=0;
    timer=setInterval(function(){
        count++;
        if(count==ulisNumber.length){
            count=0;
        }
        ulisNumber.eq(count).trigger("mouseenter");
    },3000);

    $("#news .news-c-l ul li").click(function(){

        $("#news .news-c-l ul span").animate({left:$(this).index()*50})
        $("#news .news-c-l-b ol").animate({left:-$(this).index()*$("#news .news-c-l").width()})
    })



    var left=$("#news .news-r-b ol li .left");
    var right=$("#news .news-r-b ol li .right");
    left.eq(0).css({left:0})
    right.eq(0).css({right:0})
    //left.css("left",-200);
    //right.css("right",-150);
    //$("#news .news-r-b ol li .left").css("left",-200)
    //$("#news .news-r-b ol li .right").css("right",-150)

    $("#news .news-r ul li").click(function(){
        $("#news .news-r ul li i").css({color:"#ccc"})
        $(this).children("i").css({color:"#2fc3a2"})
        $("#news .news-r ul li i::before").css({borderImage:"#2fc3a2"})
        //$(this).children("i::before").css({borderImage:"#2fc3a2"})
        left.eq($(this).index()).animate({left:0},800).parent().siblings().children(".left").animate({left:-200},800);
        right.eq($(this).index()).animate({right:0},800).parent().siblings().children(".right").animate({right:-150},800);;
    })
    //console.log(left.eq($(this).index()).animate({left: 0}, 800).parent().siblings());

	var $lis1 =  $("#Y_zuo>.up>li").eq(0).nextAll();
            var $lis2 = $("#Y_zhong>.up>li").eq(0).nextAll();
            $lis1.click(function(){
                $(this).addClass("bs").siblings().removeClass("bs")
                        .parent().next().animate({
                            left:-($(this).index()-1)* 392
                        },400)
            })
            $lis2.click(function(){
                $(this).addClass("bs").siblings().removeClass("bs")
                        .parent().next().animate({
                            left:-($(this).index()-1)* 392
                        },400)
            })
})
