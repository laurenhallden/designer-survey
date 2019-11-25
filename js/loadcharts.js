window.onload = function () {

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
	        stepSize: 20000, // <----- This prop sets the stepSize
	        beginAtZero: false,
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

	const ctx1 = document.getElementById("canvas-1").getContext("2d");
	console.log(boxPlots[3]);
  window.myBox1 = new Chart(ctx1, {
    type: 'boxplot',
    data: boxPlots[3],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
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
            padding: 30,
            fontColor: '#e0e0e3',
            fontSize: 14,
            fontStyle: 500,
            stepSize: 20000, // <----- This prop sets the stepSize
            beginAtZero: false,
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
}