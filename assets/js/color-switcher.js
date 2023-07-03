$(function(){
	
	// $('head').append('<link rel="stylesheet" href="assets/css/colors/style-switcher.css" type="text/css" />');
	// $('head').append('<script type="text/javascript" src="assets/css/colors/jquery.cookie.min.js"></script>');
		
	//Style container
	
	// $('body').append(".color-switcher");
	
	// Color Changer
	// By Cookie
	/*if($.cookie('mikiColor')!=null){
		var color_code = $.cookie('mikiColor');
		$('link[id="color_theme"]').attr('href', 'assets/css/colors/'+color_code+'.css');
	}*/
	// By click
	$('.color-btns-list li a').click(function(e){
		e.preventDefault();
		var color_code = $(this).attr('data-code');
		$('link[id="color_theme"]').attr('href', 'assets/css/colors/'+color_code+'.css');
		// $.cookie('mikiColor', color_code);
	});
	
	
});