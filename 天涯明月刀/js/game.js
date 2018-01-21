/**
 * Created by bo on 2017/9/17.
 */

var z_1tu = document.getElementById("z_1tu");
var z_2tu = document.getElementById("z_2tu");



//var z_3tu=document.getElementById("Y_figure");
var fd=document.getElementById("Y_ul");
var imgs1=fd.getElementsByTagName("img");

for (var i = 0; i <imgs1.length; i++) {
   imgs1[i].onmouseover= function () {
        this.style.width="100px";
       this.style.height="100px";
       this.style.zIndex="1";
       this.style.top="-20px"
       this.style.left="-20px"
   }
    imgs1[i].onmouseout= function () {
        this.style.width="64px";
        this.style.height="64px";
        this.style.zIndex="0";
        this.style.top="0"
        this.style.left="0"
    }
}





