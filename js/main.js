$(window).load(function (){
	
	$(".submenu").mouseover(function()
		{
			var x = $(".submenu").position().left;
			var y = $(".submenu").position().top;
			var width = $(".header_submenu").width()/2
			$("#nav>ul>li>ul").css('left',x - width + 60)
			$("#nav>ul>li>ul").css('top',y+20)

		}
	);



	$('#slideshowImgStyle').carouFredSel({
		prev: '.prev',
		next: '.next',	
	});
	
	
	$('#behindTheScenes_slideshowImgStyle').carouFredSel({
		prev: '.prev',
		next: '.next',	
	});
	


	
});
