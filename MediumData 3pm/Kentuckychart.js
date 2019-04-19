Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Median Age of Residents in FL, KY, TN, TX'
    },
    subtitle: {
        text:  'Source: <a href="https://api.census.gov/data/2010/dec/sf1?get=NAME,H010001&for=county:*&in=state:36&key=59a41ecf0dff091bd991b35c87176ffd56b8107d">2010 Census</a>'
    },
    xAxis: {
        categories: ['Male', 'Female'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Median Age in Years'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} years</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Florida',
        data: [
            39.4, 42.1
        ],
        color: 'grey'
    }, {
        name: 'Kentucky',
        data: [
            36.7, 39.3 
        ],
        color: 'red'
    }, {
        name: 'Tennessee',
        data: [
            36.7, 39.2 
        ],
        color: 'grey'
    }, {
        name: 'Texas',
        data: [
            32.6, 34.6
        ],
        color: 'grey'
    }]
});
