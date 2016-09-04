$(function() {
	$('#container').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Recent User'
        },
        yAxis: {
            title: {
                text: 'Signups Per Day'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Users',
            data: [3, 4, 3, 5, 4, 10, 12]
        }]
    });
});