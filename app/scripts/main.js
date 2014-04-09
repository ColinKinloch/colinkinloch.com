'use strict';
/*global marked */
console.log('\'Allo \'Allo!');
var cvDoc = jQuery('#cv-doc');
jQuery.get('/cv.md', function(data){
	cvDoc.html(data).addClass('md');
	marked(data,{
		tables: true
	}, function(error, html){
		cvDoc.html(html).removeClass('md');
	});
});