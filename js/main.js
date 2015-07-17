$(function(){

	var iCur=0;
	var isRunnig=false;

	$(".page").on("pageIn",function(){

		isRunnig=false;
		//利用自定义事件来保证动画的单例执行
	});

	$(".page").on("swipeUp",function(){

		if(!isRunnig){
			isRunnig=true;
			if(iCur>= $(".page").length-1 ){
				iCur=0;
			}
			else{
				iCur++;
			}
			swipePage( $(this), "coverOutUp",'out' );
			swipePage( $(".page").eq(iCur),"slideInUp",'in' );
		}


	});

	$(".page").on("swipeDown",function(){

		if( !isRunnig ){

			isRunnig=true;
			if(iCur<=0){
				iCur=$(".page").length-1;
			}
			else{
				iCur--;
			}
			swipePage( $(this), "coverOutDown",'out' );
			swipePage( $(".page").eq(iCur),"slideInDown",'in' );

		}

	});

});