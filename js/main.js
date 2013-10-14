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
function loadBooks(res){
	var counter = 0;
	var dir = "wp-content/themes/laurent_wordpress/img/"+res+"/books/gallery";

	var fileextension = ".png";
	$.ajax({
	    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
	    url: dir,
	    success: function (data) {
	        //List all png file names in the page
			var allData = $(data).find("a:contains(" + fileextension + ")");
	        $(data).find("a:contains(" + fileextension + ")").each(function () {
	            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
	            filename = filename.replace(filename.substring(filename.indexOf('/'),0),"")
				console.log(dir + filename);
					if(res==480){
					 	$('#listado_480').append($("<li><div class='movie'><img src=" + dir + filename + "></img><span class='span_hover'><p>"+counter+"</p></span></div></li>"));
					}
					else if(res==768){
					 	$('#listado_768').append($("<li><div class='movie'><img src=" + dir + filename + "></img><span class='span_hover'><p>"+counter+"</p></span></div></li>"));
					}
					else if(res==1024){
					 	$('#listado_1024').append($("<li><div class='movie'><img src=" + dir + filename + "></img><span class='span_hover'><p>"+counter+"</p></span></div></li>"));
					}
					else if(res==1600){
					 	$('#listado_1600').append($("<li><div class='movie'><img src=" + dir + filename + "></img><span class='span_hover'><p>"+counter+"</p></span></div></li>"));
					}
	            counter++;

	        });
	    }
	});

}



