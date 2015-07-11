$(function(){

	$("h1").on("tap",function(){
		swipePage( $( '.'+$(this).data('tran') ) , "bounceInUp","in");
		swipePage( $(this).parent('section'), 'bounceOutUp',"out" );
	});

	$("h2").on("tap",function(){
		swipePage( $(".p-main"),"bounceInDown","in" );
		swipePage( $(this).parent("section"),"bounceOutDown","out" );
	});


	afterEnd( $("h1"), 'fadeInLeft','flash',function(){
		afterEnd( $("h1"), 'flash','pulse',function(){
			afterEnd( $("h1"),'pulse','rubberBand');
		} );
	});

	$(".p-main").on("pageOut",function(){
		$("h1").removeClass('rubberBand').addClass('fadeInLeft');
	});

	$(".p-main").on("pageIn",function(){

		afterEnd( $("h1"), 'fadeInLeft','flash',function(){
				afterEnd( $("h1"), 'flash','pulse',function(){
					afterEnd( $("h1"),'pulse','rubberBand');
				} );
			});
	});
});