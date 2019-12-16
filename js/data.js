// ALL THE DATA. for all charts goes in this file,
// and loadcharts.js or changecharts.js calls it


// JOBS PAGE DATA

// All box plots together

const boxplotDataAll = {
  // define label tree
  labels: [['Visual','Designer'],['Content','Designer'],['Front-end','Designer'],['UX/UI','Designer'],['UX Designer/','Researcher'],['Creative/Art','Director'],['Manager','']],
  datasets: [{
    backgroundColor: 'rgba(137, 235, 215, .25)',
    borderColor: 'rgba(137, 235, 215, 1)',
    borderWidth: 3,
    padding: 10,
    itemRadius: 0,
    data: [
        {min: 38000,
            q1: 49000,
            median: 64000,
            q3: 74000,
            max: 95000
        },
        {min: 52000,
            q1: 70000,
            median: 80000,
            q3: 93000,
            max: 97000
        },
        {min: 48000,
            q1: 63000,
            median: 83000,
            q3: 107000,
            max: 160000
        },
        {min: 35000,
            q1: 71000,
            median: 90000,
            q3: 111000,
            max: 170000
        },
        {min: 48000,
            q1: 81000,
            median: 95000,
            q3: 125000,
            max: 154000
        },
        {min: 62000,
            q1: 84000,
            median: 100000,
            q3: 120000,
            max: 135000
        },
        {min: 53000,
            q1: 81000,
            median: 129000,
            q3: 156000,
            max: 240000
        }
    ]
  }]
};

var jobCategoryData = [

    // Content Designer
    {
        name: 'Content Designer',
        min: '$52,000',
        q1: '$70,000',
        median: '$80,000',
        q3: '$93,000',
        max: '$97,000',
    },

    // Design Director
    {
        name: 'Design Director',
        min: '$62,000',
        q1: '$84,000',
        median: '$100,000',
        q3: '$120,000',
        max:'$135,000',
        lev1Name: 'Senior',
        lev1Years: '11 years',
        lev1Pay: '$100k',
        lev2Name: 'Lead',
        lev2Years: '13 years',
        lev2Pay: '$125k',
    },

    // Front-end Designer
    {
        name: 'Front-end Designer',
        min: '$48,000',
        q1: '$63,000',
        median: '$83,000',
        q3: '$107,000',
        max: '$160,000',
        lev1Name: 'Int.',
        lev1Years: '6 years',
        lev1Pay: '$65k',
        lev2Name: 'Senior',
        lev2Years: '9 years',
        lev2Pay: '$88k',
        lev3Name: 'Lead',
        lev3Years: '13 years',
        lev3Pay: '$126k'
    },

    // Manager
    {
        name: 'Manager',
        min: '$53,000',
        q1: '$81,000',
        median: '$129,000',
        q3: '$156,000',
        max: '$240,000',
        lev1Name: 'Senior',
        lev1Years: '10 years',
        lev1Pay: '$109k',
        lev2Name: 'Lead',
        lev2Years: '12 years',
        lev2Pay: '$145k'
    },

    // UX Designer or Researcher
    {
        name: 'UX Designer or Researcher',
        min: '$48,000',
        q1: '$81,000',
        median: '$95,000',
        q3: '$125,000',
        max: '$154,000',
        lev1Name: 'Int.',
        lev1Years: '4 years',
        lev1Pay: '$84k',
        lev2Name: 'Senior',
        lev2Years: '8 years',
        lev2Pay: '$113k',
    },

    // UX/UI Designer
    {
        name: 'UX/UI Designer',
        min: '$35,000',
        q1: '$71,000',
        median: '$90,000',
        q3: '$111,000',
        max: '$170,000',
        lev1Name: 'Int.',
        lev1Years: '5 years',
        lev1Pay: '$78k',
        lev2Name: 'Senior',
        lev2Years: '8 years',
        lev2Pay: '$105k',
        lev3Name: 'Lead',
        lev3Years: '11 years',
        lev3Pay: '$119k'
    },

    // Visual Designer
    {
        name: 'Visual Designer',
        min: '$38,000',
        q1: '$49,000',
        median: '$64,000',
        q3: '$74,000',
        max: '$95,000',
        lev1Name: 'Junior',
        lev1Years: '3 years',
        lev1Pay: '$48k',
        lev2Name: 'Int.',
        lev2Years: '8 years',
        lev2Pay: '$65k',
        lev3Name: 'Senior',
        lev3Years: '15 years',
        lev3Pay: '$76k'
    }
]

var boxPlots = [

    // Box plot - Content Designer
    {
      labels: [],
      datasets: [{
        backgroundColor: 'rgba(137, 235, 215, .25)',
        borderColor: 'rgba(137, 235, 215, 1)',
        borderWidth: 3,
        padding: 10,
        itemRadius: 0,
        data: [
            {min: 52000,
                q1: 70000,
                median: 80000,
                q3: 93000,
                max: 97000
            },
        ]

      }]
    },

    // Box plot - Design Director
    {
      labels: [],
      datasets: [{
        backgroundColor: 'rgba(137, 235, 215, .25)',
        borderColor: 'rgba(137, 235, 215, 1)',
        borderWidth: 3,
        padding: 10,
        itemRadius: 0,
        data: [
            {min: 62000,
                q1: 84000,
                median: 100000,
                q3: 120000,
                max: 135000
            }
        ]
      }]
    },

    // Box plot - Front-end Designer
    {
      labels: [],
      datasets: [{
        backgroundColor: 'rgba(137, 235, 215, .25)',
        borderColor: 'rgba(137, 235, 215, 1)',
        borderWidth: 3,
        padding: 10,
        itemRadius: 0,
        data: [
            {min: 48000,
                q1: 63000,
                median: 83000,
                q3: 107000,
                max: 160000
            }
        ]
      }]
    },

    // Box plot - Management
    {
      labels: [],
      datasets: [{
        backgroundColor: 'rgba(137, 235, 215, .25)',
        borderColor: 'rgba(137, 235, 215, 1)',
        borderWidth: 3,
        padding: 10,
        itemRadius: 0,
        data: [
            {min: 53000,
                q1: 81000,
                median: 129000,
                q3: 156000,
                max: 240000
            }
        ]
      }]
    },

    // Box plot - UX Designer or Researcher
    {
      labels: [],
      datasets: [{
        backgroundColor: 'rgba(137, 235, 215, .25)',
        borderColor: 'rgba(137, 235, 215, 1)',
        borderWidth: 3,
        padding: 10,
        itemRadius: 0,
        data: [
            {min: 48000,
                q1: 81000,
                median: 95000,
                q3: 125000,
                max: 154000
            }
        ]
      }]
    },

    // Box plot - UX/UI Designer
    {
      labels: [],
      datasets: [{
        backgroundColor: 'rgba(137, 235, 215, .25)',
        borderColor: 'rgba(137, 235, 215, 1)',
        borderWidth: 3,
        padding: 10,
        itemRadius: 0,
        data: [
            {min: 35000,
                q1: 71000,
                median: 90000,
                q3: 111000,
                max: 170000
            }
        ]
      }]
    },

    // Box plot - Visual Designer
    {
      labels: [],
      datasets: [{
        backgroundColor: 'rgba(137, 235, 215, .25)',
        borderColor: 'rgba(137, 235, 215, 1)',
        borderWidth: 3,
        padding: 10,
        itemRadius: 0,
        data: [
            {min: 38000,
                q1: 49000,
                median: 64000,
                q3: 74000,
                max: 95000
            }
        ]
      }]
    }
]

// DEMOGRAPHICS PAGE DATA

// Gaps by job category and gender

const categoryAndGender = {
  // define label tree
  labels: [['Visual','Designer'],['Front-end','Designer'],['UX/UI','Designer'],['UX Designer/','Researcher'],['Creative/Art','Director'],['Manager',''],['Overall','']],
  datasets: [{
    backgroundColor: 'rgba(97, 167, 208, .25)',
    borderColor: 'rgba(97, 167, 208, 1)',
    borderWidth: 3,
    padding: 10,
    itemRadius: 0,
    data: [28.2,35.4,17.8,-4.1,8.8,23.2,17.1]
  }]
};


const boxplotDataGenderAndRace = {
  // define label tree
  labels: [['Men:','white'],['Men:','non-white'],['Non-men:','white'],['Non-men:','non-white']],
  datasets: [{
    backgroundColor: 'rgba(97, 167, 208, .25)',
    borderColor: 'rgba(97, 167, 208, 1)',
    borderWidth: 3,
    padding: 10,
    itemRadius: 0,
    data: [
        {min: 38000,
            q1: 74000,
            median: 95000,
            q3: 123000,
            max: 192000
        },
        {min: 46000,
            q1: 73000,
            median: 95000,
            q3: 123000,
            max: 185000
        },
        {min: 35000,
            q1: 67000,
            median: 82000,
            q3: 114000,
            max: 180000
        },
        {min: 40000,
            q1: 62000,
            median: 78000,
            q3: 94000,
            max: 140000
        }
    ]
  }]
};

// histogram data DLETE THIS

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
                backgroundColor: 'rgba(137, 235, 215, 1)',
                borderColor: 'rgba(137, 235, 215, 1)',
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
                backgroundColor: 'rgba(137, 235, 215, 1)',
                borderColor: 'rgba(137, 235, 215, 1)',
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
                backgroundColor: 'rgba(137, 235, 215, 1)',
                borderColor: 'rgba(137, 235, 215, 1)',
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
                backgroundColor: 'rgba(137, 235, 215, 1)',
                borderColor: 'rgba(137, 235, 215, 1)',
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
                backgroundColor: 'rgba(137, 235, 215, 1)',
                borderColor: 'rgba(137, 235, 215, 1)',
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
                backgroundColor: 'rgba(137, 235, 215, 1)',
                borderColor: 'rgba(137, 235, 215, 1)',
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
                backgroundColor: 'rgba(137, 235, 215, 1)',
                borderColor: 'rgba(137, 235, 215, 1)',
                borderWidth: 1
            }]
        }
]