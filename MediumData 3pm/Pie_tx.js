// Build the chart
Highcharts.chart('container1', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Race Demographics Texas'
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
      y: 51,
      sliced: true,
      selected: true
    }, {
      name: 'Latinx',
      y: 27
    }, {
      name: 'Other',
      y: 8
    }, {
      name: 'African-American',
      y: 9
    }, {
      name: 'Multi-Racial',
      y: 2
    }]
  }]
});