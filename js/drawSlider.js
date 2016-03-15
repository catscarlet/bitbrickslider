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
              console.log('s_to_p');
              console.log(ui.value);
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
    b1 = r0_to_b1(r0);
    console.log('b1:' + b1);
    b2 = b1_to_b2(b1);
    console.log('b2:' + b2);
    u0 = b2_to_u0(b2);
    console.log('u0:' + u0);

}

function r0_to_b1(r0) {
    i = 0;
    detectIt = true;
    while (detectIt) {
        if (r0 > btcOfBtctrade.buy.sumOfValue[i]) {
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

    console.log('detectIndex:' + detectIndex);
    if (detectIndex > 0) {
        remain = r0 - btcOfBtctrade.buy.sumOfValue[i - 1];
        exchangeCount = btcOfBtctrade.buy.sumOfCoins[i - 1];
    }else {
        remain = r0;
        exchangeCount = 0;
    }

    console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain / btcOfBtctrade.buy.valuePerCoin[i];
    console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
}

function b1_to_b2(b1) {
    b2 = b1 - 0.001;
    return b2;
}

function b2_to_u0(b2) {
    i = 0;
    detectIt = true;
    while (detectIt) {
        if (b2 > btcOfExmo.sale.sumOfCoins[i]) {
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

    console.log('detectIndex:' + detectIndex);
    if (detectIndex > 0) {
        remain = b2 - btcOfExmo.sale.sumOfCoins[i - 1];
        exchangeCount = btcOfExmo.sale.sumOfValue[i - 1];
    }else {
        remain = b2;
        exchangeCount = 0;
    }

    console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * btcOfExmo.sale.valuePerCoin[i];
    console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
}

function u0_to_d2(u0) {
    i = 0;
    detectIt = true;
    while (detectIt) {
        if (b2 > btcOfExmo.sale.sumOfCoins[i]) {
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

    console.log('detectIndex:' + detectIndex);
    if (detectIndex > 0) {
        remain = b2 - btcOfExmo.sale.sumOfCoins[i - 1];
        exchangeCount = btcOfExmo.sale.sumOfValue[i - 1];
    }else {
        remain = b2;
        exchangeCount = 0;
    }

    console.log('exchangeCount1:' + exchangeCount);
    exchangeCount = exchangeCount + remain * btcOfExmo.sale.valuePerCoin[i];
    console.log('exchangeCount2:' + exchangeCount);
    return exchangeCount;
}

function d1_to_d2(d1) {
    d2 = d1 * 0.95;
    return d2;
}
