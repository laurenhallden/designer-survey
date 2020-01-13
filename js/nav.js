var index = $('.subnav .nav-item.active').index();
var text = $('.subnav .nav-item.active').html();

if (index == 0) {
	$('.subnav').attr('class','navbar subnav lime');
	$('.content-wrapper').attr('class','content-wrapper lime');
} else if (index == 1) {
	$('.subnav').attr('class','navbar subnav green');
	$('.content-wrapper').attr('class','content-wrapper green');
} else if (index == 2) {
	$('.subnav').attr('class','navbar subnav blue');
	$('.content-wrapper').attr('class','content-wrapper blue');
} else if (index == 3) {
	$('.subnav').attr('class','navbar subnav purple');
	$('.content-wrapper').attr('class','content-wrapper purple');
} else {
	$('.subnav').attr('class','navbar subnav red');
	$('.content-wrapper').attr('class','content-wrapper red');
}