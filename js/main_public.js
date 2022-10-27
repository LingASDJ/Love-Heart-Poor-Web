$(function(){
    // 返回顶部平滑过度
	$("#gotop").click(function(){
		//点击按钮时，返回顶部，过渡时间为0.4秒
		$("html,body").animate({scrollTop: '0' },400);
		return false;
	})
    $(window).scroll(function(){ 
        /* 滚动的事件 scrollTop
        scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
        --------------------------------------------------
        scroll top offset 指的是滚动条相对于其顶部的偏移。
        --------------------------------------------------
        如果该方法未设置参数，则返回以像素计的相对滚动条顶部的偏移。
        $(selector).scrollTop(offset) //offset可选
        */
        var sTop = parseInt($(window).scrollTop());
        if(sTop > 100){
            $('div.topling').show();
            $('div.toplingx').show();
            $(".toplingx img").css({
                //显示
                'display': 'block',
             })            
             $(".ling").css({
                //置顶定位 
                'position': 'fixed',
                // 最大优先级，始终居于上层
                'z-index': '100',
                'left': '0',
                'top': '0',
                'width': '100%',
                'border-bottom': '2px solid #3a880e',
                'background-color': '#fff',
                '-webkit-box-shadow': '2px 2px 2px rgba(0,0,0,.2)',
                'box-shadow': '2px 2px 2px rgba(0,0,0,.2)',
                'transition':'all 0.5s'
             })
        }
        else{
            $(".toplingx img").css({
                //隐藏
                'display': 'none',
             })   
            // 隐藏此元素
            $('div.topling').hide();
            $('div.toplingx').hide();
            // 恢复样式，Null则为去掉该元素
            $(".ling").css({'position':'static','background':'','transition':'all 0.5s',
            'width': '', 
            'box-shadow': '',
            'border-bottom': '',
            'background-color': '',});
        }
    });
});      