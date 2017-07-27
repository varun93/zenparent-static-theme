module.exports = function(context,start,end,options){
	var template = '';

	context  = context ? context : [];
	
	context = context.slice(start,end);

	context.forEach(function(element){
		template += options.fn(element);
	});

	return template;
}