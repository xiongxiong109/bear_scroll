// 相关的动画函数,依赖于zepto.js

//不同页面的转场函数
function swipePage( $page, effect,direc ){
	$page.addClass('show').show().addClass('animated').addClass(effect);
	//单例模式
	$page.one('animateionEnd webkitAnimationEnd',function(){

		if(direc=='in'){
			$(this).trigger('pageIn');//触发自定义事件
			$(this).addClass('show').removeClass(effect).show();
		}
		else if(direc=='out'){
			$(this).trigger('pageOut');
			$(this).removeClass(effect).removeClass('show').removeClass('play').hide();
		}

	});

}

// 链式动画
/*
obj:运动的对象
an1:之前的动画
an2:表示an1动画结束后的下一个动画(这里的动画都用CSS3来做，并且用一个类表示出来)
callBack:表示下一个动画结束后的回调函数,可以重复调用这个函数，以实现多个动画
*/
function afterEnd($obj,an1,an2,callBack){

	$obj.one('animationEnd webkitAnimationEnd',function(){
		$obj.removeClass(an1).addClass(an2);
		callBack && callBack.call();
	});

}