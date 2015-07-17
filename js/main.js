$(function(){

	var iCur=0;

	$(".page").on("swipeUp",function(){

		if(iCur>= $(".page").length-1 ){
			iCur=0;
		}
		else{
			iCur++;
		}
		swipePage( $(this), "coverOutUp",'out' );
		swipePage( $(".page").eq(iCur),"slideInUp",'in' );

	});

	$(".page").on("swipeDown",function(){

		if(iCur<=0){
			iCur=$(".page").length-1;
		}
		else{
			iCur--;
		}
		swipePage( $(this), "coverOutDown",'out' );
		swipePage( $(".page").eq(iCur),"slideInDown",'in' );

	});

});