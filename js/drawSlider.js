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

function r0b1b2d2d1r(r0) {
    $('#value0').text(r0);
    var b1 = stepwiseBuy(r0, rmbToBtcAtBtctradeList);
    $('#value1').text(b1);
    var b2 = transBtcFromBtctrade(b1);
    $('#value2').text(b2);
    $('#loss2').text((b2 - b1).toFixed(8));
    var d2 = stepwiseBuy(b2, btcToDogefromexmoList);
    $('#value3').text(d2);
    var d1 = transDogeAtexmo(d2);
    $('#value4').text(d1);
    $('#loss4').text(d2 - d1);
    var rmb = stepwiseSell(d1, rmbToDogeAtBtctradeList,'rmbToDogeAtBtctradeList');
    $('#value5').text(rmb);
    var earn = (rmb - r0).toFixed(8);
    $('#value6').text(earn);
    var earnPercent = (earn / r0) * 100;
    $('#loss6').text(earnPercent.toFixed(2) + '%');
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
