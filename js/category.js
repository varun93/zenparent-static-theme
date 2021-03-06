// all style sheets
require('bootstrap/dist/css/bootstrap.min.css');
require('../styles/style.css');
require('../styles/header.css');
require('../styles/search.css');
require('../styles/menu.css');
require('../styles/card.css');
require('../styles/pager.css');
require('../styles/widgets.css');
require('../styles/homepage.css');
require('../styles/category.css');
require('../styles/footer.css');

var $ = require('jquery');
global.jQuery = $; 
require('bootstrap/dist/js/bootstrap.min.js');
var template = require('./template-category');


function fetchArticles(){

	var articles = {

		"slotOne": [
		    {
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Toddlers",
		      "image" : "http://lorempixel.com/650/650/people/5",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Babies",
		      "image" : "http://lorempixel.com/700/700/people/2",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "http://lorempixel.com/600/600/people/7",
		      "permalink" : "/single.html"
		    }
		 ],
		"slotTwo": [
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://cdn4.zenparent.in/wp-content/uploads/2017/06/From-the-Editors-desk-Your-kids-can-take-care-of-you-if-you-let-them-1-1024x538.png",
		      "permalink" : "/single.html"
		    },
		     {
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Pregnancy",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/7-ways-to-JUMPSTART-your-natural-weight-loss-post-delivery-1-1024x538.png",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Toddlers",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/Can-you-tell-if-your-child-is-gay-2-1024x538.png",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://cdn3.zenparent.in/wp-content/uploads/2017/07/Why-do-I-HATE-breastfeeding-1-1024x538.png",
		      "permalink" : "/single.html"
		    }
		],
		"editorial" : [	
			{
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Toddlers",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/7-ways-to-JUMPSTART-your-natural-weight-loss-post-delivery-1-1024x538.png",
		      "permalink" : "/single.html"
		    }
		],
		"slotThree": [
		  	{
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Babies",
		      "image" : "https://cdn3.zenparent.in/wp-content/uploads/2017/07/Mommies-this-is-the-simplest-trick-to-lose-weight-Thank-us-later-1-1024x538.png",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Pregnancy",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/4-ways-to-instill-positive-body-image-in-your-daughter-1-1024x538.png",
		      "permalink" : "/single.html"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://cdn4.zenparent.in/wp-content/uploads/2017/06/From-the-Editors-desk-Your-kids-can-take-care-of-you-if-you-let-them-1-1024x538.png",
		      "permalink" : "/single.html"
		    }
		],
		"menu" :  [{
			'label' : 'Relationships',
			'permalink' : '#'
			},
			{
			'label' : 'Beauty',
			'permalink' : '#'
			},
			{
			'label' : 'Wellness',
			'permalink' : '#'
			},
			{
			'label' : 'Food and Health',
			'permalink' : '#'
			}
			]
	};

	return articles;


}

function renderPage(argument) {
	var body = document.querySelector("body");
	var articles = fetchArticles();
	body.innerHTML = template(articles);
}

$(document).ready(function(){

	renderPage();

	$('#drop-down').click(function(e){
		$(this).find("ul").toggleClass("hide");
		var signElement = $(this).find("i"); 
		var sign =  signElement.text().trim();
		sign = (sign == '+') ? '-' : '+'; 
		signElement.text(sign);
		return false;
	});

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



