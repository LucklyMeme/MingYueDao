
window.onload=function(){
    //�����ֲ�ͼ
    //�Ȼ�ȡԪ��
    var Ocarousel=document.getElementById("carousel");
    var ul=Ocarousel.children[0];//��ȡul��ǩ
    var imgWidth=Ocarousel.offsetWidth;//��ȡ����ͼƬ�Ŀ��
    var ulis=ul.children;//��ȡul�µ�����li��ǩ
    var ol=Ocarousel.children[1];//��ȡol��ǩ
    var olis=ol.children;//��ȡol�µ�����li��ǩ
    //��̬����ͼƬ
    var colorArr=[1,2,3,4]
    for (var i = 0; i < colorArr.length; i++) {
        var uli=document.createElement("li");
        uli.style.backgroundImage="url(images/"+colorArr[i]+".jpg)";
        ul.appendChild(uli);
    }
    //��̬����С��
    for (var i = 0; i < ulis.length; i++) {
        var oli=document.createElement("li");
//            oli.className="dats";
        ol.appendChild(oli);
    }
    //Ĭ�ϵ�һ��С��
    olis[0].className="datsId";
    //��¡��һ��ͼƬ
    //ul.appendChild(ulis[0].cloneNode(true));
    //�����ǵ��С��ʱ ͼƬ����
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


    //��װһ���˶�����
    function animate(element,target){
        clearInterval(element.timer);
        element.timer=setInterval(function(){
            var leftVal=element.offsetLeft;
            var step=(target-leftVal)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            if(Math.abs(leftVal-target)>Math.abs(step)){//�������� ����������֮��ľ�����ڣ����Ǽ�
                leftVal+=step;
                element.style.left=leftVal+"px";
            }else{
                element.style.left=target+"px";
                clearInterval(element.timer);
            }
        },20)
    }
    //�Զ��ֲ�
    var timer=null;//���󣡣� ��ʱ��������������Զ��ֲ�ͼ������ͬ�ˣ����Գ����˵����¥ �Զ��ֲ�ֹͣ
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

    //�������������С��ʱ�����ʱ��


    //�ر���Ƶ�����رռ�������Ļ��Ƶ�͹رհ�ť���Ź���
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
    //jQuery ������Ƶ����������ʾ����
    $("#header .video").click(function(){
        $("#video").show();
        $("#video .login-bg").show();
    })
    $("#video span").click(function(){
        $("#video").hide();
        $("#video .login-bg").hide();
    })

    //���������ȫ�����ݳ��ֵ�Ч��
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

    //�ַ���Ч��
    var omain=document.getElementById("main");//��ȡID main
    var odown=omain.children[1];//��ȡID main�еĵ�һ��Ԫ�ؽڵ�
    var ocontainer=odown.children[0];//��ȡ��down�еĵ�һ��Ԫ�ؽڵ�
    var oul=ocontainer.children[1];//��ȡ�����е�ul��ǩ
    var ool=ocontainer.children[2];//��ȡ������ol��ǩ
    var ols=ool.children;//��ȡol�������li��ǩ
    var lis=oul.children;//��ȡul�������li��ǩ
    //����ul�������li��ǩ

    for (var i = 0; i < lis.length; i++) {
        //���������Ƕ�λ�ģ����������ǰ������ǵ�����ֵ��������left
        //�ж�СͼƬ������ֵ  Ĭ�ϵ�һ��ͼƬ��ʾ
        if(i==0){
            lis[0].style.left=i*63+"px";
        }else{
            lis[i].style.left=(i-1)*63+559+"px";
        }
        //����ÿһ�Ŵ�ͼ��leftֵ
        ols[i].style.left=i*63+"px";
        //��һ����Сͼ�������Ĳ㼶��͸����Ϊ0  ����li��ʾ
        $(lis[0]).css({zIndex: 0,opacity: 0}).siblings().css({zIndex: 2,opacity: 1});
        //��һ�Ŵ�ͼ��������ʾ ����Ϊ����
        $(ols[0]).css({display:"block"}).siblings().css({display:"none"});
        lis[i].index=i;
        //����������ʱ�� �ж�������left�ı�
        lis[i].onmouseover=function(){
            //����������һ��li��ʱ�� ��Сͼ�㼶͸���ȱ�0 ������ʾ
            $(this).css({zIndex: 0,opacity: 0}).siblings().css({zIndex: 2,opacity: 1});
            //ͬʱ��ͼ������ĵ�����ֵ��Сͼ������ֵ��ͬ��ʾ  ��������
            $(ols[this.index]).css({display:"block"}).siblings().css({display:"none"});
            //oli[this.index].style.display="block";
            //�����ǵ��ĳһ��liʱ �ж����е�li
            for (var i = 0; i < lis.length; i++) {
                //����������ĳ��li ������ߵ�li��ͬ�� ����һ��leftֵ
                if(i<=this.index){
                    lis[i].style.left=i*63+"px";
                    //oli[i].style.display="block";
                }else{
                    //��li������ֵ�����������������ֵʱ ������һ������ֵ
                    lis[i].style.left=(i-1)*63+559+"px";

                }
            }
        }
    }

    //��¥Ч��
    //��ȡ��¥�ĸ߶�
    //����������Ҫ��¥�ĸ߶Ȳ�ȷ�� ���Էֱ��ȡ�߶�
    //��һ��ĸ߶�
    var firstTop=$("#header .container .h-top")[0].offsetTop;
    //�ڶ���ĸ߶�
    var twoTop=$("#main .up")[0].offsetTop;
    //������߶�
    var threeTop=$("#main .down")[0].offsetTop;
    //��ȡ���������Ҫ�����li
    var flis=document.getElementById("fiex").getElementsByTagName("li");
    //���ڲ�֪����ôʹ��jquery��������li����ϸ��Ϣ ֻ��ʹ��js
    //��3���߶ȷ���������
    var arrTop=[firstTop,twoTop,threeTop];
    var timer1; //���󣡣� ��ʱ��������������Զ��ֲ�ͼ������ͬ�ˣ����Գ����˵����¥ �Զ��ֲ�ֹͣ
    for (var i = 0; i < flis.length; i++) {
        flis[i].index=i;
        flis[i].onclick=function(){
                clearInterval(timer1);
            //�����ǵ���ĸ�liʱ ͬʱ�л��������еĸ߶�
            var target=arrTop[this.index];
                timer1=setInterval(function(){
                    //��ȡ��ǰ�����߶�
                    var current=myScroll().scrollTop;
                    var step=(target-current)/10;
                    step=step>0?Math.ceil(step):Math.floor(step);
                    current+=step;
                    //window���� ��ǰ�Ĵ��ڹ����ĸ�Ϊ׼  ����1Ϊx�� ����2Ϊy��
                    window.scrollTo(0,current);
                    if (current == target) {
                        clearInterval(timer1);
                    }
                },20);
        }
    }
    //��ȡҳ������߶Ⱥ���
    function myScroll() {
        return {
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        }
    }

}


