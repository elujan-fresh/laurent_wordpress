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


	$("#slideshowImgStyle a").fancybox();

	x = 0;
	$(window).resize(function(){
		x = $(window).width();
		console.log(x)

		if(x >=480 && x<768)
		{
			x = 480;
		}

		if(x >=768 && x<1024)
		{
			x = 768;
		}

		if(x >=1024 && x<1600)
		{
			x = 1024;
		}

		if(x >=1600)
		{
			x = 1600;
		}	
		console.log(x)	
	})
	


	
});
