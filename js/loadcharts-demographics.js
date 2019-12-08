window.onload = function () {

	Chart.defaults.global.defaultFontFamily = "'Source Code Pro', monospace";

	// load gender gap histogram
	const ctxGender = document.getElementById("canvas-gender").getContext("2d");
	window.myHistogramGender = new Chart(ctxGender, {
	type: 'bar',
	data: categoryAndGender,
	options: {
	  responsive: true,
	  maintainAspectRatio: false,
	  legend: {
	    display: false
	  },
	  tooltips: {
      displayColors: false,
      footerFontStyle: 'regular',
      bodyFontSize: 14,
      footerSpacing: 12,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      xPadding: 15,
      yPadding: 15,
      cornerRadius: 4,
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
			    fontSize: 12,
			    fontStyle: 600,
			  },
			  gridLines: {
			  	display: false
			  }
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
			    fontStyle: 600,
			    beginAtZero: false,
			    stepSize: 10,
			    padding: 10
			  }
			 }]
	  },
	  title: {
	    display: false
	  }
	}
	});


	// Load boxplots of race + gender
	const ctxGenderAndRace = document.getElementById("canvas-gender-race").getContext("2d");
	window.myBoxGenderAndRace = new Chart(ctxGenderAndRace, {
	type: 'boxplot',
	data: boxplotDataGenderAndRace,
	options: {
	  responsive: true,
	  maintainAspectRatio: false,
	  legend: {
	    display: false
	  },
	  tooltips: {
      displayColors: false,
      footerFontStyle: 'regular',
      bodyFontSize: 14,
      footerSpacing: 12,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      xPadding: 15,
      yPadding: 15,
			cornerRadius: 4,
      callbacks: {
        // use label callback to return the desired label
        label: function(tooltipItem, data) {
          var label = tooltipItem.xLabel;
          return 'Median salary: ' + tooltipItem.yLabel;
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
	        fontStyle: 600,
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
	        fontStyle: 600,
	        stepSize: 20000, // <----- This prop sets the stepSize
	        beginAtZero: false,
					padding: 10,
	        callback: function(value, index, values) {
	          if(parseInt(value) >= 1000){
	            return Math.abs(value) > 999 ? '$' + Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : '$' + Math.sign(value)*Math.abs(value)
	             //return '$' + value2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	          } else {
	             return '$' + value;
	          }
	        }, 
	      }
	    }]
	  },
	  title: {
	    display: false,
	    text: 'Boxplots of gender and race data'
	  }
	}
	});
}