
// find the active cateogory
function jobCategories() {

	var activeCat = $('.job-categories li.active').attr("data-item");
	console.log(activeCat);

}

// add active classes when category is clicked

$('.job-categories li').click(function(){
	$('.job-categories li').removeClass('active');
	$(this).addClass('active');
	var activeCat = $(this).attr("data-item");
	jobCategories();
	loadChart(activeCat);
});

$(document).ready(function() {
	jobCategories();
});


// switch charts based on data item
function loadChart(number) {
	var chartNumber = ('datachart'+number).toString();
	console.log(chartNumber);
	myBarChart.data = datachart2;
	myBarChart.update();
}



