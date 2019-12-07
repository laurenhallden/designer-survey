window.onload = function () {

	Chart.defaults.global.defaultFontFamily = "'Source Code Pro', monospace";

	// Load all box plots together
	const ctxAll = document.getElementById("canvas-all").getContext("2d");
	window.myBoxAll = new Chart(ctxAll, {
	type: 'boxplot',
	data: boxplotDataAll,
	options: {
	  responsive: true,
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
	    text: 'Boxplots of all jobs'
	  }
	}
	});


	//load 1 boxplot per category
	const ctx1 = document.getElementById("canvas-1").getContext("2d");
  	window.myBox1 = new Chart(ctx1, {
    type: 'boxplot',
    data: boxPlots[0],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
 			annotation: {
						annotations: [{
							type: 'line',
							mode: 'horizontal',
							scaleID: 'y-axis-1',
							value: 60000,
							borderColor: 'rgba(255, 0, 0, 0.5)',
							borderWidth: 4,
							label: {
								enabled: false,
								content: 'Test label'
							},
						}]
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
	          return;
	        },
	        title: function(tooltipItem, data) {
	          return;
	        },
			    footer: function(tooltipItems, data) {
			    	var thisItem = data.datasets[0].data[0];
			    	var Min = 'Min: ' + thisItem.min;
			    	var Q1 = 'Q1: ' + thisItem.q1;
			    	var Median = 'Median: ' + thisItem.median;
			    	var Q3 = 'Q3: ' + thisItem.q3;
			    	var Max = 'Max: ' + thisItem.max;
			      return [Max, Q3, Median, Q1, Min];
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
            padding: 20,
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
        text: 'Boxplots of 1 job'
      }
    }
  });

  // load the first job category's charts
  loadJobChart(1,'Content Designer');
}