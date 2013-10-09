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



			$('#behindTheScenes_slideshowImgStyle').carouFredSel({
				items:
				{
					visible: 
					{
						min: 1,
						max: 1,
					}
				},
				responsive:true,
			});	
				
			$('#slideshowImgStyle_480').carouFredSel({
				items:
				{
					visible: 
					{
						min: 3,
						max: 3,
					}
				},
				responsive:true,
			});	
			$("#slideshowImgStyle_480 a").fancybox();	


			$('#slideshowImgStyle_768').carouFredSel({
				items:
				{
					visible: 
					{
						min: 3,
						max: 3,
					}
				},
				responsive:true,

			});	
			$("#slideshowImgStyle_768 a").fancybox();	


			$('#slideshowImgStyle_1024').carouFredSel({
				items:
				{
					visible: 
					{
						min: 3,
						max: 3,
					}
				},
				responsive:true,
			});	
			$("#slideshowImgStyle_1024 a").fancybox();	

			$('#slideshowImgStyle_1600').carouFredSel({
				items:
				{
					visible: 
					{

						min: 4,
						max: 4,
					}
				},
				responsive:true,
			});	
			$("#slideshowImgStyle_1600 a").fancybox();	


			

	
	
});
