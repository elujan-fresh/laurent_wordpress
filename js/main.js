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




	$('#slideshowImgStyle_1600').carouFredSel({
		items:4,
	});
	
	$("#slideshowImgStyle_1600 a").fancybox();


	$('#slideshowImgStyle_1024').carouFredSel({
		items:4,
	});
	
	$("#slideshowImgStyle_1024 a").fancybox();


	$('#slideshowImgStyle_768').carouFredSel({
		items:3,
	});
	
	$("#slideshowImgStyle_768 a").fancybox();


	$('#slideshowImgStyle_480').carouFredSel({
		items:3,
	});
	
	$("#slideshowImgStyle_480 a").fancybox();
	
});
