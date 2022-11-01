/*
JDSA Ling-2022
*/ 
window.onclick = function (ev) {
    var clickTips = ["爱心", "助农", "脱贫", "富裕", "友爱", "诚信"];
    var span = document.createElement('span');
    //随机显示文本处理 使用INNERTEXT显示 
    span.innerText = clickTips[parseInt(Math.random()*clickTips.length)];

    span.setAttribute("style","z-index:999;position:absolute;left:"+ev.pageX+"px;top:"+(ev.pageY-20)+"px;animation-duration:1s;" +
            "animation-fill-mode:both;animation-name:fadeOutUp;");
    document.body.appendChild(span);
    //WebKit
    if(typeof document.body.style.WebkitAnimation!="undefined"){
        span.addEventListener("webkitAnimationEnd",function () {
            document.body.removeChild(span);
        });
    }else{
        span.addEventListener("animationend",function () {
            document.body.removeChild(span);
        });
    }
}

// 笔记：老式的纯JS滚动十分生硬，需要使用JQ达到更好的效果
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}
