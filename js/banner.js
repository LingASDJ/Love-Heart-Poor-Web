// 定义一个数组，存放图片地址
let arr = [
        "background:url(../img/index/banner/banner2.png) center",
        "background:url(../img/index/banner/banner3.png) center",
        "background:url(../img/index/banner/banner4.png) center",
    ]
    // 让arr数组里的元素执行      foreach循环：数组每个元素都执行一次回调函数。



let i = 0;
let timer = null

function run() {

    // setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
    // clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。
    timer = setInterval(function() {
        i++;
        if (i === arr.length) {
            i = 0
        }
        $("#guang").attr("style", arr[i])
            // 选择到目标位置，将样式添加到eq选择到的上面
            // siblings() 方法返回被选元素的所有同级元素。  也就是说把.num下的所有span
        $(".num>span").eq(i).addClass("on").siblings().removeClass("on")

    }, 2000)
}
run()