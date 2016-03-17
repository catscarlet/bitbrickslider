  $(function() {
      $("#slider").slider({
          min: 0,
          max: 10000,
          step: 0.01,
          value: 7000,
          start: function(event, ui) {
              console.log('start');
          },
          stop: function(event, ui) {
              console.log('stop');
              //console.log(ui.value);
              r0b1b2ud2d1r(ui.value);
          },
          slide: function(event, ui) {

          }
      });

  });

function getSliderValue() {
    var value = $("#slider").slider("values", 0);
    console.log('SliderValue:' + value);
    r0b1b2ud2d1r(value);
}

function r0b1b2ud2d1r(r0) {
    console.log('r0:' + r0);
    var b1 = rmb_to_btcofbtctrade(r0);
    console.log('b1:' + b1);
    var b2 = btcofbtctrade_to_btcofexmo(b1);
    console.log('b2:' + b2);
    var u0 = btcofexmo_to_usd(b2);
    console.log('u0:' + u0);
    var d2 = usd_to_dogeofexmo(u0);
    console.log('d2:' + d2);
    var d1 = dogeofexmo_to_dogeofbtctrade(d2);
    console.log('d1:' + d1);
    var rmb = dogeofbtctrade_to_rmb(d1);
    console.log('rmb' + rmb);
}

function rmb_to_btcofbtctrade(pay) {
    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;

    while (detectIt) {
        if (pay > btcOfBtctrade.buy.sumOfValue[i]) {
            i++;
            if (i >= btcOfBtctrade.buy.sumOfValue.length) {
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
        remain = pay - btcOfBtctrade.buy.sumOfValue[i - 1];
        exchangeCount = btcOfBtctrade.buy.sumOfCoins[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain / btcOfBtctrade.buy.valuePerCoin[i];
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
}

function btcofbtctrade_to_btcofexmo(btcofbtctrade) {
    var btcofexmo;
    btcofexmo = btcofbtctrade - 0.001;
    return btcofexmo;
}

function btcofexmo_to_usd(pay) {
    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;

    while (detectIt) {
        if (pay > btcOfExmo.sale.sumOfCoins[i]) {
            i++;
            if (i >= btcOfExmo.sale.sumOfCoins.length) {
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
        remain = pay - btcOfExmo.sale.sumOfCoins[i - 1];
        exchangeCount = btcOfExmo.sale.sumOfValue[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * btcOfExmo.sale.valuePerCoin[i];
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
}

function usd_to_dogeofexmo(pay) {
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

function dogeofexmo_to_dogeofbtctrade(dogeofexmo) {
      var dogeofbtctrade;
      dogeofbtctrade = dogeofexmo - 1;
      return dogeofbtctrade;
  }

function dogeofbtctrade_to_rmb(pay) {
    var i = 0;
    var detectIt = true;
    var detectIndex;
    var remain;
    var exchangeCount;

    while (detectIt) {
        if (pay > dogeOfBtctrade.sale.sumOfCoins[i]) {
            i++;
            if (i >= dogeOfBtctrade.sale.sumOfCoins.length) {
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
        remain = pay - dogeOfBtctrade.sale.sumOfCoins[i - 1];
        exchangeCount = dogeOfBtctrade.sale.sumOfValue[i - 1];
    }else {
        remain = pay;
        exchangeCount = 0;
    }

    //console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * dogeOfBtctrade.sale.valuePerCoin[i];
    //console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
}
