
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

// switch charts based on data item
function loadChart(number,name) {
	var chartArrayNumber = (number-1);
	myBox1.data = boxPlots[chartArrayNumber];
	console.log(boxPlots[chartArrayNumber]);
	myBox1.update();
	console.log(name);
	$('#job-category-heading').html(name);
}