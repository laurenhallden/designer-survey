
// Functions for changing box plot charts and all their accompanying info

// first, find the active job cateogory in the list
function jobCategories() {
	var activeCat = $('.job-categories li.active').attr("data-item");
	console.log(activeCat);
}

// add active classes when new category is clicked
$('.job-categories li').click(function(){
	$('.job-categories li').removeClass('active');
	$(this).addClass('active');
	var activeCat = $(this).attr("data-item");
	var catName = $(this).html();
	jobCategories();
	loadJobChart(activeCat,catName);
});

// switch cateogry data based on list item
function loadJobChart(number,name) {
	var chartArrayNumber = (number-1);

	// update the box plot chart
	myBox1.data = boxPlots[chartArrayNumber];
	myBox1.update();

	// update the box plot and paragraph heading
	$('#job-category-heading').html(name);
	$('#job-category-title').html(name);

	// update the stats appearing alongside this chart
	loadJobStats(chartArrayNumber);
}

function loadJobStats(number){
	var chartArrayNumber = (number);

	// update the job paragraph description
	$('#this-job').html(jobCategoryData[chartArrayNumber].thisJob);
	$('#job-q1').html(jobCategoryData[chartArrayNumber].q1);
	$('#job-q3').html(jobCategoryData[chartArrayNumber].q3);
	$('#job-min').html(jobCategoryData[chartArrayNumber].min);
	$('#job-max').html(jobCategoryData[chartArrayNumber].max);

	// update the skills
	$('.pills li:nth-child(1) .skill-name').html(jobCategoryData[chartArrayNumber].skillName1);
	var value = jobCategoryData[chartArrayNumber].skillPercent1 + '%';
	$('.pills li:nth-child(1) .caption').html(value);
	$('.pills li:nth-child(1) .bar-graph .bar').width(value);

	$('.pills li:nth-child(2) .skill-name').html(jobCategoryData[chartArrayNumber].skillName2);
	value = jobCategoryData[chartArrayNumber].skillPercent2 + '%';
	$('.pills li:nth-child(2) .caption').html(value);
	$('.pills li:nth-child(2) .bar-graph .bar').width(value);

	if ('skillName3' in jobCategoryData[chartArrayNumber]) {
		$('.pills li:nth-child(3) .skill-name').html(jobCategoryData[chartArrayNumber].skillName3);
		value = jobCategoryData[chartArrayNumber].skillPercent3 + '%';
		$('.pills li:nth-child(3) .caption').html(value);
		$('.pills li:nth-child(3) .bar-graph .bar').width(value);
		$('.pills li:nth-child(3)').show();
	} else {
		$('.pills li:nth-child(3)').hide();

	}
	if ('skillName4' in jobCategoryData[chartArrayNumber]) {
		$('.pills li:nth-child(4) .skill-name').html(jobCategoryData[chartArrayNumber].skillName4);
		value = jobCategoryData[chartArrayNumber].skillPercent4 + '%';
		$('.pills li:nth-child(4) .caption').html(value);
		$('.pills li:nth-child(4) .bar-graph .bar').width(value);
		$('.pills li:nth-child(4)').show();
	} else {
		$('.pills li:nth-child(4)').hide();

	}
	if ('skillName5' in jobCategoryData[chartArrayNumber]) {
		$('.pills li:nth-child(5) .skill-name').html(jobCategoryData[chartArrayNumber].skillName5);
		value = jobCategoryData[chartArrayNumber].skillPercent5 + '%';
		$('.pills li:nth-child(5) .caption').html(value);
		$('.pills li:nth-child(5) .bar-graph .bar').width(value);
		$('.pills li:nth-child(5)').show();
	} else {
		$('.pills li:nth-child(5)').hide();

	}
	if ('skillName6' in jobCategoryData[chartArrayNumber]) {
		$('.pills li:nth-child(6) .skill-name').html(jobCategoryData[chartArrayNumber].skillName6);
		value = jobCategoryData[chartArrayNumber].skillPercent6 + '%';
		$('.pills li:nth-child(6) .caption').html(value);
		$('.pills li:nth-child(6) .bar-graph .bar').width(value);
		$('.pills li:nth-child(6)').show();
	} else {
		$('.pills li:nth-child(6)').hide();

	}

}