// all style sheets
require('bootstrap/dist/css/bootstrap.min.css');
require('owl.carousel/dist/assets/owl.carousel.css');
require('../styles/style.css');
require('../styles/header.css');
require('../styles/search.css');
require('../styles/menu.css');
require('../styles/card.css');
require('../styles/widgets.css');
require('../styles/myspace.css');
require('../styles/share.css');
require('../styles/footer.css');

var $ = require('jquery');
global.jQuery = $; 
require('owl.carousel/dist/owl.carousel.min.js');
require('bootstrap/dist/js/bootstrap.min.js');
var template = require('./template-myspace');


function fetchContent(){

	var articles = {
	 "feed": [
		    {
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Parenting",
		      "image" : "https://cdn3.zenparent.in/wp-content/uploads/2017/07/Mommies-this-is-the-simplest-trick-to-lose-weight-Thank-us-later-1-1024x538.png",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Parenting",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/4-ways-to-instill-positive-body-image-in-your-daughter-1-1024x538.png",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://cdn4.zenparent.in/wp-content/uploads/2017/06/From-the-Editors-desk-Your-kids-can-take-care-of-you-if-you-let-them-1-1024x538.png",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Parenting",
		      "image" : "https://cdn3.zenparent.in/wp-content/uploads/2017/07/Mommies-this-is-the-simplest-trick-to-lose-weight-Thank-us-later-1-1024x538.png",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Parenting",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/4-ways-to-instill-positive-body-image-in-your-daughter-1-1024x538.png",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://cdn4.zenparent.in/wp-content/uploads/2017/06/From-the-Editors-desk-Your-kids-can-take-care-of-you-if-you-let-them-1-1024x538.png",
		      "permalink" : "#"
		    }
		]
	};
	
	return articles;
}

function renderPage(argument) {
	var body = document.querySelector("body");
	var content = fetchContent();
	body.innerHTML = template(content);
}

$(document).ready(function(){

	renderPage();

	$('.owl-carousel').owlCarousel();

	// search related
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

});



