// all style sheets
require('bootstrap/dist/css/bootstrap.min.css');
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
require('bootstrap/dist/js/bootstrap.min.js');
var template = require('./template-myspace');


function fetchContent(){

	var articles = {
 	"lifestage" : [
 		{
 			"label" : "Trying",
 			"image" : "http://lorempixel.com/400/400"
 		},
 		{
 			"label" : "Pregnant",
 			"image" : "http://lorempixel.com/400/400",
 			"selected" : "selected"
 		},
 		{
 			"label" : "Parent",
 			"image" : "http://lorempixel.com/400/400"
 		}
 	],
 	"interests" : [
	 		{
	 			"interest-term" : "growth-milestones",
	 			"interest-label" : "Growth Milestones"
	 		},
	 		{
	 			"interest-term" : "babies",
	 			"interest-label" : "Babies"
	 		},
	 		{
	 			"interest-term" : "education",
	 			"interest-label" : "Education",
	 			"selected-interest" : "selected-interest"
	 		},
	 		{
	 			"interest-term" : "premature",
	 			"interest-label" : "Premature"
	 		},
	 		{
	 			"interest-term" : "behavior",
	 			"interest-label" : "Behavior"
	 		},
	 		{
	 			"interest-term" : "toddlers",
	 			"interest-label" : "Toddlers"
	 		},
	 		{
	 			"interest-term" : "teens",
	 			"interest-label" : "Teens",
	 			"selected-interest" : "selected-interest"
	 		},
	 		{
	 			"interest-term" : "tips-parenting-hacks",
	 			"interest-label" : "Tips Parenting Hacks"
	 		},
			{
	 			"interest-term" : "celebrity",
	 			"interest-label" : "Celebrity"
	 		},
	 		{
	 			"interest-term" : "food",
	 			"interest-label" : "Food",
	 			"selected-interest" : "selected-interest"
	 		},
	 		{
	 			"interest-term" : "health",
	 			"interest-label" : "Health"
	 		},
			{
	 			"interest-term" : "father",
	 			"interest-label" : "Father"
	 		},
	 		{
	 			"interest-term" : "only-child",
	 			"interest-label" : "Only Child"
	 		},
			{
	 			"interest-term" : "mother-in-law",
	 			"interest-label" : "Mother In Law"
	 		},
	 		{
	 			"interest-term" : "relationships",
	 			"interest-label" : "Relationships"
	 		},
	 		{
	 			"interest-term" : "lifestyle",
	 			"interest-label" : "Lifestyle"
	 		},
			{
	 			"interest-term" : "physical-wellness",
	 			"interest-label" : "Physical Wellness",
	 			"selected-interest" : "selected-interest"
	 		},
	 		{
	 			"interest-term" : "social-wellness",
	 			"interest-label" : "Social Wellness"
	 		},
	 		{
	 			"interest-term" : "mental-wellness",
	 			"interest-label" : "Mental Wellness"
	 		},
			{
	 			"interest-term" : "sexual-wellness",
	 			"interest-label" : "Sexual Wellness",
	 			"selected-interest" : "selected-interest"
	 		},
	 		{
	 			"interest-term" : "personal-care",
	 			"interest-label" : "Personal Care"
	 		}
	],
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



