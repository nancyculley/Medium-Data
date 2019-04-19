// Build the chart
Highcharts.chart('container1', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Race Demographics Florida'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  
  series: [{
    name: '% of race out of state population',
    colorByPoint: true,
    data: [{
      name: 'White',
      y: 61,
      sliced: true,
      selected: true
    }, {
      name: 'Latinx',
      y: 18
    }, {
      name: 'Other',
      y: 3
    }, {
      name: 'African-American',
      y: 13
    }, {
      name: 'Multi-Racial',
      y: 2
    },
    {
      name: 'Asian',
      y: 2
    }]
  }]
});