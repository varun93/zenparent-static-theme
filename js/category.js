// all style sheets
require('bootstrap/dist/css/bootstrap.min.css');
require('../styles/style.css');
require('../styles/header.css');
require('../styles/search.css');
require('../styles/menu.css');
require('../styles/card.css');
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
		      "category" : "Parenting",
		      "image" : "http://lorempixel.com/650/650/people/5",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Parenting",
		      "image" : "http://lorempixel.com/700/700/people/2",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "http://lorempixel.com/600/600/people/7",
		      "permalink" : "#"
		    }
		 ],
		"slotTwo": [
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://cdn4.zenparent.in/wp-content/uploads/2017/06/From-the-Editors-desk-Your-kids-can-take-care-of-you-if-you-let-them-1-1024x538.png",
		      "permalink" : "#"
		    },
		     {
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Parenting",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/7-ways-to-JUMPSTART-your-natural-weight-loss-post-delivery-1-1024x538.png",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Parenting",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/Can-you-tell-if-your-child-is-gay-2-1024x538.png",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://cdn3.zenparent.in/wp-content/uploads/2017/07/Why-do-I-HATE-breastfeeding-1-1024x538.png",
		      "permalink" : "#"
		    }
		],
		"editorial" : [	
			{
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Parenting",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/7-ways-to-JUMPSTART-your-natural-weight-loss-post-delivery-1-1024x538.png",
		      "permalink" : "#"
		    }
		],
		"slotThree": [
		  	{
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Parenting",
		      "image" : "https://cdn3.zenparent.in/wp-content/uploads/2017/07/Mommies-this-is-the-simplest-trick-to-lose-weight-Thank-us-later-1-1024x538.png",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Parenting",
		      "image" : "https://cdn1.zenparent.in/wp-content/uploads/2017/07/4-ways-to-instill-positive-body-image-in-your-daughter-1-1024x538.png",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://cdn4.zenparent.in/wp-content/uploads/2017/06/From-the-Editors-desk-Your-kids-can-take-care-of-you-if-you-let-them-1-1024x538.png",
		      "permalink" : "#"
		    }
		],
		"menu" :  [{
				'label' : 'Trying',
				'permalink' : '#'
				},
				{
				'label' : 'Pregnant',
				'permalink' : '#'
				},
				{
				'label' : 'Babies',
				'permalink' : '#'
				},
				{
				'label' : 'Toddlers',
				'permalink' : '#'
				},
				{
				'label' : 'Big Kids',
				'permalink' : '#'
				},
				{
				'label' : 'Baby Names',
				'permalink' : '#'
				},
				{
				'label' : 'Tools',
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



