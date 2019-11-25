
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
	var catName = $(this).html();
	jobCategories();
	loadChart(activeCat,catName);
});

$(document).ready(function() {
	jobCategories();
	myBarChart.data = jobCharts[0];
	myBarChart.update();
});


// switch charts based on data item
function loadChart(number,name) {
	var chartArrayNumber = (number-1);
	myBarChart.data = jobCharts[chartArrayNumber];
	console.log(jobCharts[chartArrayNumber]);
	myBarChart.update();
	console.log(name);
	$('#job-category-heading').html(name);
}