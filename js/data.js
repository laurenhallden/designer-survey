// all the data

var testArray = ['first','second','third','fourth','fifth','sixth','seventh'];

var jobCharts = [

// Visual designer
        {
            labels: [35000,40000,45000,50000,50000,60000,65000,70000,75000,80000,85000,90000,95000,100000,105000,110000,115000,120000,125000,130000,135000,140000,145000,150000,155000,160000,165000,170000,175000,180000],
            datasets: [{
                label: 'Median: $64,000',
                data: [{
                    x: 60000,
                    y: 20
                }, {
                    x: 60000,
                    y: 0
                }],
                borderColor: 'rgba(222, 109, 109, 1)',

                // Changes this dataset to become a line
                type: 'line'
            }, {
                data: [3.23,9.68,19.35,9.68,6.45,6.45,19.35,6.45,6.45,6.45,0.00,0.00,3.23,0.00,0.00,3.23,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00],
                backgroundColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderWidth: 1
            }]
        },

// UX Designer or Researcher
        {
            labels: [35000,40000,45000,50000,50000,60000,65000,70000,75000,80000,85000,90000,95000,100000,105000,110000,115000,120000,125000,130000,135000,140000,145000,150000,155000,160000,165000,170000,175000,180000],
            datasets: [{
                label: 'Median: $93,588',
                data: [{
                    x: 90000,
                    y: 20
                }, {
                    x: 90000,
                    y: 0
                }],
                borderColor: 'rgba(222, 109, 109, 1)',

                // Changes this dataset to become a line
                type: 'line'
            }, {
                data: [0.00,0.00,2.44,0.00,0.00,2.44,2.44,9.76,7.32,9.76,7.32,9.76,9.76,4.88,0.00,2.44,2.44,7.32,4.88,2.44,7.32,0.00,4.88,2.44,0.00,0.00,0.00,0.00,0.00],
                backgroundColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderWidth: 1
            }]
        },

// UX/UI
        {
            labels: [35000,40000,45000,50000,50000,60000,65000,70000,75000,80000,85000,90000,95000,100000,105000,110000,115000,120000,125000,130000,135000,140000,145000,150000,155000,160000,165000,170000,175000,180000],
            datasets: [{
                label: 'Median: $90,500',
                data: [{
                    x: 90000,
                    y: 20
                }, {
                    x: 90000,
                    y: 0
                }],
                borderColor: 'rgba(222, 109, 109, 1)',

                // Changes this dataset to become a line
                type: 'line'
            }, {
                data: [1.00,0.00,5.00,4.00,1.00,4.00,6.00,9.00,8.00,8.00,4.00,4.00,8.00,6.00,5.00,3.00,3.00,4.00,0.00,7.00,5.00,1.00,0.00,2.00,0.00,0.00,0.00,1.00,1.00],
                backgroundColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderWidth: 1
            }]
        },

// Content Designer
        {
            labels: [35000,40000,45000,50000,50000,60000,65000,70000,75000,80000,85000,90000,95000,100000,105000,110000,115000,120000,125000,130000,135000,140000,145000,150000,155000,160000,165000,170000,175000,180000],
            datasets: [{
                label: 'Median: $79,500',
                data: [{
                    x: 75000,
                    y: 20
                }, {
                    x: 75000,
                    y: 0
                }],
                borderColor: 'rgba(222, 109, 109, 1)',

                // Changes this dataset to become a line
                type: 'line'
            }, {
                data: [0.00,0.00,0.00,11.11,0.00,11.11,0.00,11.11,22.22,22.22,0.00,11.11,11.11,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00],
                backgroundColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderWidth: 1
            }]
        },

// Front-end designer
        {
            labels: [35000,40000,45000,50000,50000,60000,65000,70000,75000,80000,85000,90000,95000,100000,105000,110000,115000,120000,125000,130000,135000,140000,145000,150000,155000,160000,165000,170000,175000,180000],
            datasets: [{
                label: 'Median: $85,250',
                data: [{
                    x: 85000,
                    y: 20
                }, {
                    x: 85000,
                    y: 0
                }],
                borderColor: 'rgba(222, 109, 109, 1)',

                // Changes this dataset to become a line
                type: 'line'
            }, {
                data: [0.00,0.00,5.88,5.88,8.82,11.76,5.88,5.88,2.94,5.88,11.76,5.88,0.00,2.94,5.88,0.00,2.94,5.88,0.00,0.00,2.94,2.94,0.00,0.00,0.00,2.94,0.00,2.94,0.00],
                backgroundColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderWidth: 1
            }]
        },

// Design Director
        {
            labels: [35000,40000,45000,50000,50000,60000,65000,70000,75000,80000,85000,90000,95000,100000,105000,110000,115000,120000,125000,130000,135000,140000,145000,150000,155000,160000,165000,170000,175000,180000],
            datasets: [{
                label: 'Median: $101,250',
                data: [{
                    x: 100000,
                    y: 20
                }, {
                    x: 100000,
                    y: 0
                }],
                borderColor: 'rgba(222, 109, 109, 1)',

                // Changes this dataset to become a line
                type: 'line'
            }, {
                data: [0.00,0.00,0.00,0.00,0.00,4.17,0.00,8.33,8.33,8.33,8.33,4.17,8.33,16.67,4.17,12.50,4.17,4.17,0.00,4.17,4.17,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00],
                backgroundColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderWidth: 1
            }]
        },

// Managmenet
        {
            labels: [50000,50000,60000,65000,70000,75000,80000,85000,90000,95000,100000,105000,110000,115000,120000,125000,130000,135000,140000,145000,150000,155000,160000,165000,170000,175000,180000,185000,190000,200000,205555,210000,215000,220000,225000,230000,235000,240000],
            datasets: [{
                label: 'Median: $128,500',
                data: [{
                    x: 125000,
                    y: 20
                }, {
                    x: 125000,
                    y: 0
                }],
                borderColor: 'rgba(222, 109, 109, 1)',

                // Changes this dataset to become a line
                type: 'line'
            }, {
                data: [4.17,0.00,8.33,0.00,8.33,4.17,4.17,0.00,0.00,0.00,0.00,4.17,8.33,4.17,0.00,4.17,8.33,0.00,4.17,4.17,8.33,0.00,8.33,0.00,0.00,4.17,4.17,0.00,0.00,0.00,0.00,0.00,0.00,4.17,0.00,0.00,0.00,0.00,4.17],
                backgroundColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderColor: [
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)',
                    'rgba(137, 235, 215, 1)'
                ],
                borderWidth: 1
            }]
        }
]