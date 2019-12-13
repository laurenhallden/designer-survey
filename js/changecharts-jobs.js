// Functions for displayig jobs cards

$('.job-buttons button').click(function(){
	var activeSkill = $(this).attr('class');
	$('.job-buttons button').removeClass('active');
	$(this).addClass('active');

	$('.job-card').each(function(i, obj) {
		var cardId = $(this).attr('id');
	    if (activeSkill.includes(cardId)) {
	      $(this).removeClass('hidden');
	    } else {
	      $(this).addClass('hidden');
	    }
	});
});


// Functions for changing box plot charts and all their accompanying info

// first, find the active job cateogory in the list
function jobCategories() {
	var activeCat = $('.job-categories li.active').attr("data-item");
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
	$('#job-max').html(jobCategoryData[chartArrayNumber].max)

}