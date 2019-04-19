// Build the chart
Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Race Demographics Tennessee'
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
      y: 74,
      sliced: true,
      selected: true
    }, {
      name: 'Latinx',
      y: 2
    }, {
      name: 'Other',
      y: 2
    }, {
      name: 'African-American',
      y: 16
    }, {
      name: 'Multi-Racial',
      y: 2
    },
    {
      name: 'Asian',
      y: 1
    }]
  }]
});