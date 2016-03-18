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

$('first_value').text('first_value');

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

function r0b1b2ud2d1r(r0) {
    $('#value0').text(r0);
    var b1 = rmb_to_btcofbtctrade(r0);
    $('#value1').text(b1);
    var b2 = btcofbtctrade_to_btcofexmo(b1);
    $('#value2').text(b2);
    var u0 = btcofexmo_to_usd(b2);
    $('#value3').text(u0);
    var d2 = usd_to_dogeofexmo(u0);
    $('#value4').text(d2);
    var d1 = dogeofexmo_to_dogeofbtctrade(d2);
    $('#value5').text(d1);
    var rmb = dogeofbtctrade_to_rmb(d1);
    $('#value6').text(rmb);
}

function rmbToBtcAtBtctrade(pay) {
    return stepwiseBuy(pay, rmbToBtcAtBtctradeList);
}

function transBtcFromBtctrade(btc1) {
    var btc2;
    btc2 = btc1 - 0.001;
    return btc2;
}

function btcToUsdAtExmo(pay) {
    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;

    while (detectIt) {
        if (pay > usdToBtcAtExmoList.sale.sumOfCoins[i]) {
            i++;
            if (i >= usdToBtcAtExmoList.sale.sumOfCoins.length) {
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
        remain = pay - usdToBtcAtExmoList.sale.sumOfCoins[i - 1];
        exchangeCount = usdToBtcAtExmoList.sale.sumOfValue[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * usdToBtcAtExmoList.sale.valuePerCoin[i];
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
}

function usdToDogeAtExmo(pay) {
      var i = 0;
      var detectIt = true;
      var detectIndex;
      var remain;
      var exchangeCount;

      while (detectIt) {
          if (pay > dogeOfExmo.buy.sumOfValue[i]) {
              i++;
              if (i >= dogeOfExmo.buy.sumOfValue.length) {
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
          remain = pay - dogeOfExmo.buy.sumOfValue[i - 1];
          exchangeCount = dogeOfExmo.buy.sumOfCoins[i - 1];
      }else {
          remain = pay;
          exchangeCount = 0;
      }

      console.log('exchangeCount1:' + exchangeCount);
      exchangeCount = exchangeCount + remain / dogeOfExmo.buy.valuePerCoin[i];
      console.log('exchangeCount2:' + exchangeCount);
      return exchangeCount;
  }

function transDogeAtexmo(doge1) {
      var doge2;
      doge2 = doge1 - 1;
      return doge2;
  }

function DogeToRmbAtBtctrade(pay) {
    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;

    while (detectIt) {
        if (pay > rmbToDogeAtBtctradeList.sale.sumOfCoins[i]) {
            i++;
            if (i >= rmbToDogeAtBtctradeList.sale.sumOfCoins.length) {
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
        remain = pay - rmbToDogeAtBtctradeList.sale.sumOfCoins[i - 1];
        exchangeCount = rmbToDogeAtBtctradeList.sale.sumOfValue[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * rmbToDogeAtBtctradeList.sale.valuePerCoin[i];
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
}

function btcToDogeAtExmo(pay) {
    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;

    while (detectIt) {
        if (pay > btcToDogefromexmoList.buy.sumOfCoins[i]) {
            i++;
            if (i >= btcToDogefromexmoList.buy.sumOfCoins.length) {
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
        remain = pay - btcToDogefromexmoList.buy.sumOfCoins[i - 1];
        exchangeCount = btcToDogefromexmoList.buy.sumOfValue[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * btcToDogefromexmoList.buy.valuePerCoin[i];
    console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
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
