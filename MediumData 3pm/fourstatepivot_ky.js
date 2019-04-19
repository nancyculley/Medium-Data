
//Creating the double bar chart for median age and gender
var categories = [
    'Florida', 'Kentucky', 'Tennessee', 'Texas'
];

Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Median Age Range by Gender in FL, KY, TN, TX'
    },
    subtitle: {
        text: 'Source: <a href="https://api.census.gov/data/2010/dec/sf1?get=NAME,H010001&for=county:*&in=state:36&key=59a41ecf0dff091bd991b35c87176ffd56b8107d">2010 Census</a>'
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value);
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + " "+ this.point.category + '</b><br/>' +
                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
        name: 'Male',
        data: [
            -39.4, -36.7, -36.7, -32.6
        ]
    }, {
        name: 'Female',
        data: [
            42.1, 39.3, 39.2, 34.6
        ]
    }]
});