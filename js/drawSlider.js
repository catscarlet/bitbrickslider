  $(function() {
      $("#slider").slider({
          min: 0,
          max: 3200,
          step: 0.01,
          value: 2700,
          start: function(event, ui) {
              //console.log('start');
          },
          stop: function(event, ui) {
              //console.log('stop');
          },
          slide: function(event, ui) {
              r0b1b2d2d1r(ui.value);
          }
      });
  });

function getSliderValue() {
    var value = $("#slider").slider("values", 0);
    console.log('SliderValue:' + value);
    r0b1b2d2d1r(value);
}

function r0b1b2d2d1r(pay) {
    $('#value0').text(pay);

    var r0 = transfers(pay,'Percent',0.3);
    $('#value1').text(r0);
    $('#loss1').text((r0 - pay).toFixed(8));

    var b1 = stepwiseBuy(r0, rmbToBtcAtBtctradeList);
    $('#value2').text(b1);
    //$('#loss2').text((b2 - b1).toFixed(8));

    var b2 = transfers(b1,'Fixed_Value',0.002);
    $('#value3').text(b2);
    $('#loss3').text((b2 - b1).toFixed(8));

    var d2 = stepwiseBuy(b2, btcToDogefromexmoList);
    $('#value4').text(d2);
    //$('#loss4').text((b2 - b1).toFixed(8));

    var d1 = transfers(d2,'Fixed_Value',1);
    $('#value5').text(d1);
    $('#loss5').text(d2 - d1);

    var r1 = stepwiseSell(d1, rmbToDogeAtBtctradeList,'rmbToDogeAtBtctradeList');
    $('#value6').text(r1);

    var rmb = transfers(r1,'Percent',0.4);
    $('#value7').text(d1);
    $('#loss7').text(d2 - d1);
    //suary

    var earn = (rmb - r0).toFixed(8);
    var earnPercent = (earn / r0) * 100;
    $('#value8').text(earn);
    $('#loss8').text(earnPercent.toFixed(2) + '%');
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
        console.log('called stepwiseBuy');
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
        if (pay > priceList.buy.sumOfValue[i]) {
            i++;
            if (i >= priceList.buy.sumOfValue.length) {
                console.log('error');
                return false;
            }
        } else {
            detectIt = false;
            detectIndex = i;
        }
    }

    console.log('detectIndex:' + detectIndex);
    if (detectIndex > 0) {
        remain = pay - priceList.buy.sumOfValue[i - 1];
        exchangeCount = priceList.buy.sumOfCoins[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain / priceList.buy.valuePerCoin[i];
    console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount.toFixed(8);;

}


function stepwiseSell(pay, priceList, whoCalledMe) {
    if (whoCalledMe) {
        console.log(whoCalledMe + ' called stepwiseSell');
        console.log('Pay: ' + pay);
        console.log(priceList);
    } else {
        console.log('called stepwiseSell');
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

        if (pay > priceList.sale.sumOfCoins[i]) {
            i++;
            if (i >= priceList.sale.sumOfCoins.length) {
                console.log('error');
                return false;
            }
        } else {
            detectIt = false;
            detectIndex = i;
        }
    }

    console.log('detectIndex:' + detectIndex);
    if (detectIndex > 0) {
        remain = pay - priceList.sale.sumOfCoins[i - 1];
        exchangeCount = priceList.sale.sumOfValue[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * priceList.sale.valuePerCoin[i];
    console.log('exchangeCount2:' + exchangeCount);
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
