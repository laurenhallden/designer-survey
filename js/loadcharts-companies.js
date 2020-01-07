window.onload = function () {

	Chart.defaults.global.defaultFontFamily = "'Source Code Pro', monospace";

	// Load boxplots of comp by company size
	const ctxCompanySize = document.getElementById("canvas-compsize").getContext("2d");
	window.myBoxCompanySize = new Chart(ctxCompanySize, {
	type: 'boxplot',
	data: boxplotCompanySize,
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
	    text: 'Boxplots of compensation by company size'
	  }
	}
	});

	// Load boxplots of comp by company type
	const ctxCompanyType = document.getElementById("canvas-comptype").getContext("2d");
	window.myBoxCompanyType = new Chart(ctxCompanyType, {
	type: 'boxplot',
	data: boxplotCompanyType,
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
	    text: 'Boxplots of compensation by company type'
	  }
	}
	});
}