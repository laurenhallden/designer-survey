window.onload = function () {

	// load gender gap histogram
	const ctxGender = document.getElementById("canvas-gender").getContext("2d");
	window.myHistogramGender = new Chart(ctxGender, {
	type: 'bar',
	data: categoryAndGender,
	options: {
	  responsive: true,
	  legend: {
	    display: false
	  },
	  tooltips: {
      displayColors: false,
			callbacks: {
        // use label callback to return the desired label
        label: function(tooltipItem, data) {
          var label = tooltipItem.xLabel;
          return tooltipItem.yLabel + '%';
        },
        title: function(tooltipItem, data) {
        	var title = tooltipItem[0].xLabel[0] + ' ' + tooltipItem[0].xLabel[1];
        	return title;
        }
      }
    },
		scales: {
			xAxes: [{
			  ticks: {
			    autoSkip: false,
			    fontColor: '#e0e0e3',
			    fontSize: 14,
			    fontStyle: 500,
			  },
			  gridLines: { display: false }
			}],
			yAxes: [{
			  display: true,
			  scaleLabel: {
			    display: false
			  },
			  gridLines: { color: "#4D4D59" },
			  ticks: {
			    fontColor: '#e0e0e3',
			    fontSize: 14,
			    fontStyle: 500,
			    beginAtZero: false,
			  }
			 }]
	  },
	  title: {
	    display: false,
	    text: 'Histogram of gaps by role'
	  }
	}
	});

	console.log(categoryAndGender);
}