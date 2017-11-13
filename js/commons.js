var $ = require('jquery');

$(document).ready(function(){

	// header related
	var searchHeader = $(".header-search");
	$(".search span").click(function(){
		var $this = $(this); 
		searchHeader.toggleClass("hide");
		$this.toggleClass('glyphicon-search');
		$this.toggleClass('glyphicon-remove');

	});

	var secondaryHeaderYOffset = $('.secondary-header').offset().top;
	var header = $('#header');
	// scroll events
	$(document).scroll(function(){
		
		var scrollTop  = $(window).scrollTop();
		if(scrollTop > secondaryHeaderYOffset){
			header.addClass('collapsed');
		}
		else{
			header.removeClass('collapsed');
		}

	});

	// end of header related

});



