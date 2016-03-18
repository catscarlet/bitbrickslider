function drawCharts(data) {
    middleValue = (data.buy.valuePerCoin[0] + data.sale.valuePerCoin[0]) / 2;
    //doublerange = (middleValue - data.buy.values[49]).toFixed(2);
    chartData = new Array;

    xOfBuy = data.buy.valuePerCoin;
    yOfBuy = data.buy.sumOfValue;

    console.log(middleValue);
    for (var i = 0 ; i < data.buy.valuePerCoin.length; i++) {
        unit_price = xOfBuy[i];
        sumOfPrice = yOfBuy[i];
        //console.log([x[i],y[i]]);
        chartData[data.buy.valuePerCoin.length - 1 - i ] = [unit_price,sumOfPrice];
    }

    chartData[data.buy.valuePerCoin.length] = [middleValue,0];

    xOfSale = data.sale.valuePerCoin;
    yOfSale = data.sale.sumOfValue;

    for (var i = 0 ; i < data.buy.valuePerCoin.length; i++) {
        unit_price = xOfSale[i];
        sumOfPrice = yOfSale[i];
        //console.log([x[i],y[i]]);
        chartData[data.buy.valuePerCoin.length + i + 1] = [unit_price,sumOfPrice];
    }



    console.log(chartData);

    $('#container').highcharts({
        title: {
            text: 'title',
            x: -20 //center
        },
        subtitle: {
            text: 'subtitle',
            x: -20
        },
        xAxis: {
            tickInterval: 1
        },
        yAxis: {
            title: {
                text: 'sumOfValue'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'y',
            data: chartData
        }]
    });
};
