var chartData = {
  datasets: [{
    type: "scatter",
    label: "My First dataset",
    data: [{
      x: 1,
      y: 0.4
    }, {
      x: 0.3,
      y: 0.22
    }],
    showLine: false
  }, {
    type: "scatter",
    label: "My Second dataset",
    data: [{
      x: Math.random(),
      y: Math.random()
    }, {
      x: Math.random(),
      y: Math.random()
    }],
    showLine: false
  }, {
    type: 'line',
    label: 'Line Dataset 1',
          backgroundColor: 'rgba(137, 235, 215, .25)',
          borderColor: 'rgba(137, 235, 215, 1)',
    data: [{
      x: 0.4,
      y: 1
    }, {
      x: 1,
      y: 0.5
    }],
    fill:false
  }, {
    type: 'line',
    label: 'Line Dataset 2',
          backgroundColor: 'rgba(137, 235, 215, .25)',
          borderColor: 'rgba(137, 235, 215, 1)',
    data: [{
      x: 0.6,
      y: 0.9
    }, {
      x: 0.1,
      y: 0.7
    }],
    fill:true
  }]
};

var options = {
  scales: {
    xAxes: [{
      display: false,
      ticks: {
        max: 1.025,
        min: -0.025
      }
    }],
    yAxes: [{
      display: false,
      ticks: {
        max: 1.025,
        min: -0.025
      }
    }],
  }
}

var ctx = document.getElementById("canvas-gender").getContext("2d");


window.myChart = Chart.Scatter(ctx, {
  data: chartData,
  options: options
});
