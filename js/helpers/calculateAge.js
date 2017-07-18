module.exports = function(birthYear) {
	var age = new Date().getFullYear() - birthYear;

	if(age <= 0){
		return "Age less than a year";
	}
	else{
		return age + "years old";
	}
};