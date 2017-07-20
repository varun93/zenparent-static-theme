// all style sheets
require('bootstrap/dist/css/bootstrap.min.css');
require('../styles/style.css');
require('../styles/header.css');
require('../styles/search.css');
require('../styles/menu.css');
require('../styles/card.css');
require('../styles/homepage.css');
require('../styles/footer.css');

var $ = require('jquery');
global.jQuery = $; 
require('bootstrap/dist/js/bootstrap.min.js');
var template = require('./template-homepage');


function createHtml(data){
	var container = document.getElementById('pets-container');
	container.innerHTML = template(data);
}

function fetchData(argument) {
	
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
	ourRequest.onload = function() {
	  if (ourRequest.status >= 200 && ourRequest.status < 400) {
	    // This is where we'll do something with the retrieved data
	    var data = JSON.parse(ourRequest.responseText);
	   	createHtml(data);
	  } else {
	    console.log("We connected to the server, but it returned an error.");
	  }
	};

	ourRequest.onerror = function() {
	  console.log("Connection error");
	};
	ourRequest.send();
};


function fetchArticles(){

	var articles = {

		"slotOne": [
		    {
		      "title" : "Mommies, this is the simplest trick to lose weight!",
		      "category" : "Parenting",
		      "image" : "https://res.cloudinary.com/dooujtlec/image/upload/v1500446764/rsz_1mommies-this-is-the-simplest-trick-to-lose-weight-thank-us-later-1-1024x538_ytn2sm.png",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Wholesome first foods your 6-month-old will love!",
		      "category" : "Parenting",
		      "image" : "https://res.cloudinary.com/dooujtlec/image/upload/v1500446972/rsz_4-ways-to-instill-positive-body-image-in-your-daughter-1-1024x538_tlbxnp.png",
		      "permalink" : "#"
		    },
		    {
		      "title" : "Mums having a C-section – are you prepared for this?",
		      "category" : "Pregnancy",
		      "image" : "https://res.cloudinary.com/dooujtlec/image/upload/v1500447035/rsz_from-the-editors-desk-your-kids-can-take-care-of-you-if-you-let-them-1-1024x538_t0xdhj.png",
		      "permalink" : "#"
		    }
		 ],

		  "slotTwo": [
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
		    },
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



