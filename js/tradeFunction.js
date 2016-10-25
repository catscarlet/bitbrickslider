function stepwiseBuy(pay, priceList, whocallme) {
    var i = priceList.sale.length - 1;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;
    var fee = priceList.fee;

    while (detectIt) {
        //console.log(i);
        //console.log('pay: ' + pay);
        //console.log('priceList.sale[i].sumOfValue: ' + priceList.sale[i].sumOfValue);
        if (pay > priceList.sale[i].sumOfValue) {
            --i;
            if (i < 0) {
                console.log('error');
                return false;
            }
        } else {
            detectIt = false;
            detectIndex = i;
        }
    }

    //console.log('detectIndex:' + detectIndex);
    if (detectIndex < priceList.sale.length - 1) {
        remain = pay - priceList.sale[i - 1].sumOfValue;
        exchangeCount = priceList.sale[i - 1].sumOfCoins;
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain / priceList.sale[i].valuePerCoin;
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount.toFixed(8);;
}


function stepwiseSell(pay, priceList, whocallme) {
    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;
    var fee = priceList.fee;

    while (detectIt) {
        if (pay > priceList.buy[i].sumOfCoins) {
            i++;
            if (i > priceList.buy.length) {
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
        remain = pay - priceList.buy[i - 1].sumOfCoins;
        exchangeCount = priceList.buy[i - 1].sumOfValue;
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * priceList.buy[i].valuePerCoin;
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount.toFixed(8);

}

function withdrawWithPercentFee(pay, fee_percent, whocallme) {
    var receive;
    receive = pay * (1 - fee_percent);
    return receive;
}

function withdrawWithFixedFee(pay, fee_fixed, whocallme) {
    var receive;
    receive = pay - fee_fixed;
    return receive;
}
