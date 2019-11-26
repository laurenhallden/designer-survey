// ALL THE DATA. for all charts goes in this file,
// and loadcharts.js or changecharts.js calls it


// All box plots together

const boxplotDataAll = {
  // define label tree
  labels: [['Visual','Designer'],['Content','Designer'],['Front-end','Designer'],['UX/UI','Designer'],['UX Designer/','Researcher'],['Creative/Art','Director'],'Manager'],
  datasets: [{
    backgroundColor: 'rgba(137, 235, 215, .6)',
    borderColor: 'rgba(137, 235, 215, 1)',
    borderWidth: 3,
    padding: 10,
    itemRadius: 0,
    data: [
        {min: 38400,
            q1: 49000,
            median: 64000,
            q3: 76000,
            max: 114000
        },
        {min: 51840,
            q1: 70000,
            median: 79500,
            q3: 92500,
            max: 97000
        },
        {min: 48000,
            q1: 63700,
            median: 85250,
            q3: 111420,
            max: 174000
        },
        {min: 35000,
            q1: 71250,
            median: 90500,
            q3: 116000,
            max: 175000
        },
        {min: 48000,
            q1: 78720,
            median: 93588,
            q3: 124800,
            max: 154000
        },
        {min: 62000,
            q1: 85490,
            median: 101250,
            q3: 120000,
            max: 135000
        },
        {min: 53000,
            q1: 81000,
            median: 128500,
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
        min: '$51,840',
        q1: '$70,000',
        median: '$79,500',
        q3: '$92,500',
        max: '$97,000',
        thisJob: 'How information is communicated to audiences.',
        skillName1: 'Content Strategy',
        skillPercent1: 100,
        skillName2: 'UX or Experience Design',
        skillPercent2: 50,
        skillName3: 'Research',
        skillPercent3: 40
    },

    // Design Director
    {
        name: 'Design Director',
        min: '$51,840',
        q1: '$70,000',
        median: '$79,500',
        q3: '$92,500',
        max:'$97,000',
        thisJob: 'Creating design systems used throughout their organization. (May also be called an Art Director or Creative Director).',
        skillName1: 'Visual Design',
        skillPercent1: 82,
        skillName2: 'Team Leadership',
        skillPercent2: 79,
        skillName3: 'Print Design',
        skillPercent3: 61,
        skillName4: 'UX Design',
        skillPercent4: 50,
        skillName5: 'Content Strategy',
        skillPercent5: 46
    },

    // Front-end Designer
    {
        name: 'Front-end Designer',
        min: '$51,840',
        q1: '$70,000',
        median: '$79,500',
        q3: '$92,500',
        max: '$97,000',
        thisJob: 'Creating and coding websites and user interfaces.',
        skillName1: 'Front-end Development',
        skillPercent1: 50,
        skillName2: 'UX or Experience Design',
        skillPercent2: 88,
        skillName3: 'Visual Design',
        skillPercent3: 88,
        skillName4: 'Research',
        skillPercent4: 53,
        skillName5: 'Content Strategy',
        skillPercent5: 38,
        skillName6: 'Team Leadership',
        skillPercent6: 38
    },

    // Manager
    {
        name: 'Manager',
        min: '$51,840',
        q1: '$70,000',
        median: '$79,500',
        q3: '$92,500',
        max: '$97,000',
        thisJob: 'Running design teams and managing team members.',
        skillName1: 'UX or Experience Design',
        skillPercent1: 10,
        skillName2: 'Team Leadership',
        skillPercent2: 10,
        skillName3: 'Visual Design',
        skillPercent3: 67,
        skillName4: 'Project Mgmt',
        skillPercent4: 54,
        skillName5: 'Research',
        skillPercent5: 46
    },

    // UX Designer or Researcher
    {
        name: 'UX Designer or Researcher',
        min: '$51,840',
        q1: '$70,000',
        median: '$79,500',
        q3: '$92,500',
        max: '$97,000',
        thisJob: 'Designing the best ways for users to interact with and experience digital products.',
        skillName1: 'UX or Experience Design',
        skillPercent1: 88,
        skillName2: 'Research',
        skillPercent2: 60
    },

    // UX/UI Designer
    {
        name: 'UX/UI Designer',
        min: '$51,840',
        q1: '$70,000',
        median: '$79,500',
        q3: '$92,500',
        max: '$97,000',
        thisJob: 'Both user experience design and visual interface design.',
        skillName1: 'UX or Experience Design',
        skillPercent1: 100,
        skillName2: 'Visual Design',
        skillPercent2: 100,
        skillName3: 'Research',
        skillPercent3: 59,
        skillName4: 'Team Leadership',
        skillPercent4: 34
    },

    // Visual Designer
    {
        name: 'Visual Designer',
        min: '$51,840',
        q1: '$70,000',
        median: '$79,500',
        q3: '$92,500',
        max: '$97,000',
        thisJob: 'May include marketing, brand, print, or visual UI design (but not UX).',
        skillName1: 'Visual Design',
        skillPercent1: 73,
        skillName2: 'Print Design',
        skillPercent2: 73,
        skillName3: 'Content Strat',
        skillPercent3: 33,
        skillName4: 'Project Mgmt',
        skillPercent4: 30,
        skillName5: 'Research',
        skillPercent5: 21
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
            {min: 51840,
                q1: 70000,
                median: 79500,
                q3: 92500,
                max: 97000
            }
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
                q1: 85490,
                median: 101250,
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
                q1: 63700,
                median: 85250,
                q3: 111420,
                max: 174000
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
                median: 128500,
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
                q1: 78720,
                median: 93588,
                q3: 124800,
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
                q1: 71250,
                median: 90500,
                q3: 116000,
                max: 175000
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
            {min: 38400,
                q1: 49000,
                median: 64000,
                q3: 76000,
                max: 114000
            }
        ]
      }]
    }
]

// histogram data

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