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

// COMPANIES PAGES DATA

const boxplotCompanySize = {
  // define label tree
  labels: ['5-10','11-50','51-250','250+'],
  datasets: [{
    backgroundColor: 'rgba(97, 167, 208, .25)',
    borderColor: 'rgba(97, 167, 208, 1)',
    borderWidth: 3,
    padding: 10,
    itemRadius: 0,
    data: [
        {min: 48000,
            q1: 64000,
            median: 71000,
            q3: 78000,
            max: 85000
        },
        {min: 35000,
            q1: 62000,
            median: 83000,
            q3: 96000,
            max: 140000
        },
        {min: 43000,
            q1: 70000,
            median: 84000,
            q3: 105000,
            max: 154000
        },
        {min: 38000,
            q1: 73000,
            median: 97000,
            q3: 126000,
            max: 185000
        }
    ]
  }]
};

const boxplotCompanyType = {
  // define label tree
  labels: ['Agency','In-House'],
  datasets: [{
    backgroundColor: 'rgba(97, 167, 208, .25)',
    borderColor: 'rgba(97, 167, 208, 1)',
    borderWidth: 3,
    padding: 10,
    itemRadius: 0,
    data: [
        {min: 35000,
            q1: 70000,
            median: 85000,
            q3: 100000,
            max: 140000
        },
        {min: 38000,
            q1: 70000,
            median: 94000,
            q3: 125000,
            max: 192000
        }
    ]
  }]
};

const benefits = {
  // define label tree
  labels: ['Employer-matched retirement account',
  'Employer-paid medical insurance',
  'Paid parental leave (beyond minimums)',
  'Professional development funding',
  'Fitness/wellness benefits',
  'Transportation/commuter benefits',
  'Wellness room (for nursing, meditation or prayer)',
  'Courtesy services or discounts for services',
  'Employer-provided meal at least once a week',
  'Professional association memberships',
  'Child care'],
  datasets: [{
    backgroundColor: 'rgba(97, 167, 208, .25)',
    borderColor: 'rgba(97, 167, 208, 1)',
    borderWidth: 3,
    padding: 10,
    itemRadius: 0,
    data: [74,69,58,55,46,45,36,29,18,14,1]
  }]
};

// DEMOGRAPHICS PAGE DATA

// Gaps by job category and gender

const categoryAndGender = {
  // define label tree
  labels: [['Visual','Designer'],['Front-end','Designer'],['UX/UI','Designer'],['UX Designer/','Researcher'],['Creative/Art','Director'],['Manager',''],['Overall','']],
  datasets: [{
    backgroundColor: 'rgba(220, 134, 255, .25)',
    borderColor: 'rgba(220, 134, 255, 1)',
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
    backgroundColor: 'rgba(220, 134, 255, .25)',
    borderColor: 'rgba(220, 134, 255, 1)',
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