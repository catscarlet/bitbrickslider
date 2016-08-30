//var dataX = new Array;
//var dataY = new Array;

$(function() {
    $('#slider').slider({
        min: 1,
        max: 10000,
        step: 0.01,
        value: 2700,
        start: function(event, ui) {
            //console.log('start');
        },
        stop: function(event, ui) {
            //console.log('stop');
        },
        slide: function(event, ui) {
            r0d1d2b2b1r(ui.value);
            $('#input1').val(ui.value);
        }
    });
});


$(document).ready(function() {
    $('#useInput').click(function() {
        inputValue1 = $('#input1').val();
        $('#slider').slider('value', inputValue1);
        r0d1d2b2b1r(inputValue1);
    });

    $('#auto1').click(function() {
        var tempData;
        var maxEarn = 0;
        var maxPercent = -100;
        var maxEarnAtPay;
        for (var i = 1; i < 10000; i = i + 1) {
            console.log(i);
            tempData = r0d1d2b2b1r(i);
            if (tempData.percent1 > maxPercent) {
                maxPercent = tempData.percent1;
                maxEarn = tempData.value1;
                maxEarnAtPay = i;
            }
            //dataX[i] = i;
            //dataY[i] = tempData.value1;
        }
        //console.log(maxPercent,maxEarn,maxEarnAtPay);
        //console.log(dataX);
        //console.log(dataY);
        inputValue1 = maxEarnAtPay;
        $('#input1').val(inputValue1);
        $('#slider').slider('value', inputValue1);
        r0d1d2b2b1r(inputValue1);
        //r0b1b2d2d1r(inputValue1);
        //drawDatas(dataX, dataY);
    });

    $('#auto2').click(function() {
        var tempData;
        var maxEarn = 0;
        var maxPercent = -100;
        var maxEarnAtPay;
        for (var i = 1; i < 10000; i = i + 1) {
            console.log(i);
            tempData = r0d1d2b2b1r(i);
            if (tempData.percent1 > maxPercent) {
                maxPercent = tempData.percent1;
                maxEarn = tempData.value1;
                maxEarnAtPay = i;
            }
            //dataX[i] = i;
            //dataY[i] = tempData.value1;
        }
        //console.log(maxPercent,maxEarn,maxEarnAtPay);
        //console.log(dataX);
        //console.log(dataY);
        inputValue1 = maxEarnAtPay;
        $('#input1').val(inputValue1);
        $('#slider').slider('value', inputValue1);
        //r0d1d2b2b1r(inputValue1);
        r0b1b2d2d1r(inputValue1);
        //drawDatas(dataX, dataY);
    });
});


function getSliderValue() {
    var value = $('#slider').slider('value');
    console.log('SliderValue:' + value);
    r0d1d2b2b1r(value);
}

function r0b1b2d2d1r(pay) {
    $('#value0').text(pay);

    var r0 = transfers(pay, 'Percent', 0.0);
    $('#value1').text(r0);
    $('#loss1').text((r0 - pay).toFixed(8));

    var b1 = stepwiseBuy(r0, rmbToBtcAtBtctradeList);
    $('#value2').text(b1);
    //$('#loss2').text((b2 - b1).toFixed(8));

    var b2 = transfers(b1, 'Fixed_Value', 0.002);
    $('#value3').text(b2);
    $('#loss3').text((b2 - b1).toFixed(8));

    var d2 = stepwiseBuy(b2, btcToDogefromexmoList);
    $('#value4').text(d2);
    //$('#loss4').text((b2 - b1).toFixed(8));

    var d1 = transfers(d2, 'Fixed_Value', 1);
    $('#value5').text(d1);
    $('#loss5').text(d2 - d1);

    var r1 = stepwiseSell(d1, rmbToDogeAtBtctradeList);
    $('#value6').text(r1);

    var rmb = transfers(r1, 'Percent', 0.4);
    $('#value7').text(rmb);
    $('#loss7').text((rmb - r1).toFixed(8));
    //suary

    var earn = (rmb - r0).toFixed(8);
    var earnPercent = (earn / r0) * 100;
    $('#value8').text(earn);
    $('#loss8').text(earnPercent.toFixed(2) + '%');

    var earnData = new Array;
    earnData.value1 = earn;
    earnData.percent1 = earnPercent;
    return earnData;
}

function r0d1d2b2b1r(pay) {
    $('#value0').text(pay);

    var r0 = transfers(pay, 'Percent', 0.0);
    $('#value1').text(r0);
    $('#loss1').text((r0 - pay).toFixed(8));

    var d1 = stepwiseBuy(r0, rmbToDogeAtBtctradeList);
    $('#value2').text(d1);
    //$('#loss2').text((b2 - b1).toFixed(8));

    var d2 = transfers(d1, 'Percent', 0.5);
    $('#value3').text(d2);
    $('#loss3').text((d2 - d1).toFixed(8));

    var b2 = stepwiseSell(d2, btcToDogefromexmoList);
    $('#value4').text(b2);
    //$('#loss4').text((b2 - b1).toFixed(8));

    var b1 = transfers(b2, 'Fixed_Value', 0.0001);
    $('#value5').text(b1);
    $('#loss5').text(b1 - b2);

    var r1 = stepwiseSell(b1, rmbToBtcAtBtctradeList);
    $('#value6').text(r1);

    var rmb = transfers(r1, 'Percent', 0.4);
    $('#value7').text(rmb);
    $('#loss7').text((rmb - r1).toFixed(8));
    //suary

    var earn = (rmb - r0).toFixed(8);
    var earnPercent = (earn / r0) * 100;
    $('#value8').text(earn);
    $('#loss8').text(earnPercent.toFixed(2) + '%');

    var earnData = new Array;
    earnData.value1 = earn;
    earnData.percent1 = earnPercent;
    return earnData;
}

function rmbToBtcAtBtctrade(pay) {
    return stepwiseBuy(pay, rmbToBtcAtBtctradeList);
}

function transBtcFromBtctrade(btc1) {
    var btc2;
    btc2 = btc1 - 0.001;
    return btc2;
}

function transDogeAtexmo(doge1) {
    var doge2;
    doge2 = doge1 - 1;
    return doge2;
}

function stepwiseBuy(pay, priceList, whoCalledMe) {
    if (whoCalledMe) {
        console.log(whoCalledMe + ' called stepwiseBuy');
        console.log(pay);
        console.log(priceList);
    } else {
        //console.log('called stepwiseBuy');
    }

    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;

    while (detectIt) {
        if (whoCalledMe) {
            console.log('detecting:' + i);
            console.log('priceList.sumOfCoins:' + priceList.sale.sumOfCoins[i]);
        }
        if (pay > priceList.sale.sumOfValue[i]) {
            i++;
            if (i >= priceList.sale.sumOfValue.length) {
                console.log('error');
                return false;
            }
        } else {
            detectIt = false;
            detectIndex = i;
        }
    }

    //console.log('detectIndex:' + detectIndex);
    if (detectIndex > 0) {
        remain = pay - priceList.sale.sumOfValue[i - 1];
        exchangeCount = priceList.sale.sumOfCoins[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain / priceList.sale.valuePerCoin[i];
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount.toFixed(8);;

}


function stepwiseSell(pay, priceList, whoCalledMe) {
    if (whoCalledMe) {
        console.log(whoCalledMe + ' called stepwiseSell');
        console.log('Pay: ' + pay);
        console.log(priceList);
    } else {
        //console.log('called stepwiseSell');
    }
    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;

    while (detectIt) {
        if (whoCalledMe) {
            console.log('detecting:' + i);
            console.log('priceList.sumOfCoins:' + priceList.buy.sumOfCoins[i]);
        }

        if (pay > priceList.buy.sumOfCoins[i]) {
            i++;
            if (i >= priceList.buy.sumOfCoins.length) {
                console.log('error');
                return false;
            }
        } else {
            detectIt = false;
            detectIndex = i;
        }
    }

    //console.log('detectIndex:' + detectIndex);
    if (detectIndex > 0) {
        remain = pay - priceList.buy.sumOfCoins[i - 1];
        exchangeCount = priceList.buy.sumOfValue[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * priceList.buy.valuePerCoin[i];
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount.toFixed(8);

}

function depositRmbAtBtctrade(rmb1) {
    var rmb2;
    var cost = 0;
    rmb2 = rmb1 - cost;
    return rmb2;
}

function withdrawRmbAtBtctrade(rmb1) {
    var rmb2;
    var cost = 0;
    rmb2 = rmb1 - cost;
    return rmb2;
}

function transfers(pay, fee_method, fee) {
    var rmb2;
    var cost = 0;
    if (fee_method == 'Percent') {
        exchangeValue = pay * ((100 - fee) / 100);
        return exchangeValue;
    } else if (fee_method == 'Fixed_Value') {
        exchangeValue = pay - fee;
        return exchangeValue;
    } else {
        console.log('transfers error');
        return false;
    }
}
