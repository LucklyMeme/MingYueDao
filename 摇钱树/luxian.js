/**
 * Created by Administrator on 2017/9/6.
 */
function anmiatex(element,target,num){
    clearInterval(element.timer)
    var target=target
    element.timer=setInterval(function () {
        var stemp=20
        var current=element.offsetLeft;
        stemp=current>target?-stemp:stemp
        if(Math.abs(current-target)>Math.abs(stemp)){
            current+=stemp
            element.style.left=current+"px"
        }
        else{
            element.style.left=target+"px"
            clearInterval(element.timer)
        }
    },num)
}
function anmiatey(element,target,num){
    clearInterval(element.timer)
    var target=target
    element.timer=setInterval(function () {
        var stemp=20
        var current=element.offsetTop;
         stemp=current>target?-stemp:stemp
        if(Math.abs(current-target)>Math.abs(stemp)){
            current+=stemp
            element.style.top=current+"px"
        }
        else{
            element.style.top=target+"px"
        }
    },num)
}
function yunsu(element,xtarget,ytarget,num) {
    clearInterval(element.timer)
    element.timer = setInterval(function () {
        var xcurrent = element.offsetLeft;
        var ycurrent=element.offsetTop
        var xstemp = (xtarget - xcurrent) / 10
        var ystemp = (ytarget-ycurrent)/10
        if (xstemp > 0) {
            xstemp = Math.ceil(xstemp)
        } else {
            xstemp = Math.floor(xstemp)
        }
        if(ystemp>0){
            ystemp = Math.ceil(ystemp)
        }else{
            ystemp=Math.floor(ystemp)
        }

        xcurrent += xstemp
        ycurrent+=ystemp
        element.style.left = xcurrent + "px"
        element.style.top=ycurrent+"px"
        if (xcurrent == xtarget&&ycurrent==ytarget) {
            clearInterval(element.timer)

        }
    }, num)
}
//function yunsu(element,obj,fun,num) {
//    clearInterval(element.timer)
//    element.timer = setInterval(function () {
//        var flag=true;
//        for(var k in obj){
//            var styleName=k;
//            var target=obj[k]
//                var current=parseInt(getStyle(element,styleName))||0
//                var target=parseInt(target)||0
//                var stemp = 10
//               var stemp=current>target?-stemp:stemp
//               if(Math.abs(current-target)>Math.abs(stemp)){
//                   current+=stemp
//                   element.style.top=current+"px"
//               }
//               else{
//                   element.style.top=target+"px"
//               }
//                element.style[styleName] = current + "px"
//
//                if (current != target) {
//                    flag=false
//                }
//        }
//        if(flag){
//            clearInterval(element.timer)
//            if(typeof fun=="function"){
//                fun()
//            }
//        }
//
//    }, num)
//}


function biansu(element,obj,fun,num) {
    clearInterval(element.timer)
    element.timer = setInterval(function () {
        var flag=true;
        for(var k in obj){
            var styleName=k;
            var target=obj[k]
            if(k=="opacity"){
                var target=obj[k]*100
                var current =getStyle(element, styleName)*100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[styleName] = current/100;
                if (current != target) {
                    flag = false;
                }
            }
            else if(k=="transform"){
                var target=parseInt(obj[k].slice(7))
                var current =parseInt(getStyle(element, transform).slice(7))||0;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style.transform = "rotate("+current+"deg)";
                if (current != target) {
                    flag = false;
                }
            }
            else if(k=="zIndex") {
                element.style.zIndex=obj[k]
            }
            else{
                var current=parseInt(getStyle(element,styleName))||0
                var target=parseInt(target)||0
                var stemp = (target - current) / 10
                if (stemp > 0) {
                    stemp = Math.ceil(stemp)
                } else {
                    stemp = Math.floor(stemp)
                }
                current += stemp
                element.style[styleName] = current + "px"

                if (current != target) {
                    flag=false
                }
            }

        }
        if(flag){
            clearInterval(element.timer)
            if(typeof fun=="function"){
                fun()
            }
        }

    }, num)
}

function getStyle(element, styleName) {
    //currentStyle   getComputedStyle
    if (element.currentStyle) {
        return element.currentStyle[styleName];
    } else {
        return getComputedStyle(element, null)[styleName];
    }
}
