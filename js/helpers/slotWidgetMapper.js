const widgets = {
	1 : {
		primaryHeading : 'Baby Names',
		secondaryHeading : 'Find awesome and unique baby names!',
		image : 'https://dynamic-cdn.tinystep.in/image/admin-panel-image-dc991e6f-76a9-47db-89b8-779471f3a410-1489831115739.png',
		colour : 'orange',
		target : '#',
		buttonText : 'Explore Now'
	
	},
	2 : {
		primaryHeading : 'Pregnancy Calendar',
		secondaryHeading : 'Get all information about your pregnancy!',
		image : 'https://dynamic-cdn.tinystep.in/image/admin-panel-image-8789d57e-c10b-4589-984b-19406c99bec1-1489831194419.png',
		colour : 'green',
		target : '',
		buttonText : 'Click to Continue'
	},
	3 : {
		primaryHeading : 'Yet Another Widget',
		secondaryHeading : 'Check out this amazing tool',
		image : 'http://tinystep.in/images/cards/qna_1_v1.png',
		colour : 'pink',
		target : '#',
		buttonText : 'Show me'
	}
};


const slotsWidgetMapping = {
	'slot_1' : 1,
	'slot_2' : 3,
	'slot_3' : 2,
	'slot_4' : 1,
	'slot_5' : 3
};


module.exports = function(slot,options) {
	console.log(slot);
	slot = widgets[slotsWidgetMapping[slot]];	
	return options.fn(slot);
};


