//移动端版本兼容

	var jsVer = 15;
	var phoneWidth = parseInt(window.screen.width);
	var phoneScale = phoneWidth/640;

	var ua = navigator.userAgent;
	if (/Android (\d+\.\d+)/.test(ua)){
		var version = parseFloat(RegExp.$1);
		// andriod 2.3
		if(version>2.3){
			document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
		// andriod 2.3以上
		}else{
			document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
		}
		// 其他系统
	} else {
		document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
	}

//移动端版本兼容 end
(function(){
		var roleswiper = new Swiper('.roles_wrap', {
            //autoplay:3000,
            loop : true,
            effect : 'fade',
				nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
            onSlideChangeStart:function(swiper){
                var length = $(".game_roles .swiper_dock_list li").length;
				$(".game_roles .swiper_dock_list li img").removeClass('on');
                $(".game_roles .swiper_dock_list li img").eq((swiper.activeIndex-1)%length).addClass('on');
            }
        });
        $(".game_roles .swiper_dock_list li").click(function(){
            var index = $(this).index()+1;
            roleswiper.slideTo(index);
			$(".game_roles .swiper_dock_list li img").removeClass('on');
            $(".game_roles .swiper_dock_list li img").eq(index-1).addClass('on');
        });
	})();
$(function(){

		
	
	//角色介绍
/*	$('.role .nav li').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
		var dd = $('.role .content dd').eq($(this).index());
		$('.role .content dd').hide()
		dd.fadeIn();
		dd.find('.pic').addClass('animated fadeInLeft');
		dd.find('.text').addClass('animated fadeInRight');

	});
*/
	//游戏特色
	var swiper = new Swiper('.character .swiper-container', {
       	//effect : 'coverflow',
	
		pagination: '.swiper-pagination',
		nextButton : '.swiper-button-next',
		prevButton : '.swiper-button-prev',
		loop:true
    });

    
    $(".prompt_swiper").on('click',function(){
    	$(this).hide();
    });
    
    $(".prompt_swiper .swiper-container").on('click',function(e){
    	e.stopPropagation();
    });

    $('.introduce .arrow').on('click',function(e){
    	if($(this).attr('tip')==1){
    		$(this).css({backgroundImage:'url(img/arrow2.png)'});
    		$('.introduce .briefing').hide();
    		$('.introduce .details').show();
    		$(this).attr('tip',2);
    	}else{
    		$(this).css({backgroundImage:'url(img/arrow.png)'});
    		$('.introduce .briefing').show();
    		$('.introduce .details').hide();
    		$(this).attr('tip',1);
    	}
    	e.stopPropagation();
    });

	//播放视频
	/*var video=document.getElementById('video');
	 video.onclick=function(){
		if(this.paused){
			this.play();
		}else{
			this.pause();
		}
	 };*/
	
	
	
});
$(function () {
    $("#playbtn").click(function () {
        $("#bg").show();
        $("#mp_play").show();
		console.log($("video source")[0].src)
		
		
    });
    $("#bg,#closebtn").click(function () {
        initClose();
    });
});
function initClose() {
    $("#bg").hide();
    $("#mp_play").hide();
	
	
	$(".video1").trigger("pause").hide();
}
/*$(function () {
    $("#playbtn_01").click(function () {
        $("#bg").show();
        $("#mp_play1").show();
		//$("#iframe")[0].src="https://v.qq.com/iframe/player.html?vid=i0530szu3jz&tiny=0&auto=1";
		
    });
    $("#bg,#closebtn1").click(function () {
        initClose1();
    });
});
function initClose1() {
    $("#bg").hide();
    $("#mp_play1").hide();
	
}*/



