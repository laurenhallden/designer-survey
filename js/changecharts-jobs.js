// Controlling the display of each job description card

$('.job-buttons button').click(function(){
	$('.job-card').hide();
	var activeSkill = $(this).attr('class');
	$('.job-buttons button').removeClass('active');
	$(this).addClass('active');

	$('.job-card').hide();
	fadeIn(activeSkill);
});

function fadeIn(activeSkill) {
	$('.job-card').each(function(i, obj) {
		var cardId = $(this).attr('id');
	    if (activeSkill.includes(cardId)) {
	       $(this).fadeIn('slow');
	    } else {
	      $(this).hide();
	    };
	});
}

// Functions for changing box plot charts and all their accompanying info

// first, find the active job cateogory in the list
function jobCategories() {
	var activeCat = $('.job-categories li.active').attr("data-item");
};

// add active classes when new category is clicked
$('.job-categories li').click(function(){

	$('.job-categories li').removeClass('active');
	$(this).addClass('active');
	var activeCat = $(this).attr("data-item");
	var catName = $(this).html();

	// fade out the last set of details
	$('.job-details-column').fadeOut(function() {
		jobCategories();
		loadJobChart(activeCat,catName);
	});
});

// switch cateogry data based on list item
function loadJobChart(number,name) {
	var chartArrayNumber = (number-1)

	// update the box plot chart
	myBox1.data = boxPlots[chartArrayNumber];
	myBox1.update();

	// update the box plot and paragraph heading
	$('#job-category-heading').html(name);
	$('#job-category-title').html(name);

	// update the stats appearing alongside this chart
	loadJobStats(chartArrayNumber);

	// fade it all in
	$('.job-details-column').fadeIn();
};

function loadJobStats(number){
	var chartArrayNumber = (number);

	// update the job paragraph description
	$('#this-job').html(jobCategoryData[chartArrayNumber].thisJob);
	$('#job-q1').html(jobCategoryData[chartArrayNumber].q1);
	$('#job-q3').html(jobCategoryData[chartArrayNumber].q3);
	$('#job-min').html(jobCategoryData[chartArrayNumber].min);
	$('#job-max').html(jobCategoryData[chartArrayNumber].max);
	$('#job-median').html(jobCategoryData[chartArrayNumber].median);

}