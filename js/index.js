// all style sheets
require('bootstrap/dist/css/bootstrap.min.css');
require('../styles/card.css');
require('../styles/style.css');
require('../styles/header.css');
require('../styles/menu.css');
require('../styles/search.css');
require('../styles/footer.css');
var $ = require('jquery');
global.jQuery = $; 
require('bootstrap/dist/js/bootstrap.min.js');
var template = require('./template');


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

function renderPage(argument) {
	var body = document.querySelector("body");
	body.innerHTML = template([]);
}

$(document).ready(function(){

	renderPage();

	// search related
	var searchHeader = $(".header-search");
	$(".search").click(function(){
		searchHeader.toggleClass("hide");
	});

});



