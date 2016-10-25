function getLtcToBtcFromBtc_e() {
    url = '2_btc-e/get_ltc_to_btc_from_btc-e.php';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(msg) {
            ltc2btc_btce = msg;
            console.log(ltc2btc_btce);
        }
    });
}

function getRmbToLtcFromBtctrade() {
    url = '0_btctrade/getltclistfrombtctrade2.php';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(msg) {
            rmb2ltc_btctrade = msg;
            console.log(rmb2ltc_btctrade);
        }
    });
}

function getRmbToBtcFromBtctrade() {
    url = '0_btctrade/getbtclistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(msg) {
            rmb2btc_btctrade = msg;
            console.log(rmb2btc_btctrade);
        }
    });
}

function getRmbToLtcFromBtcc() {
    url = '1_btcc/get_rmb_to_ltc_from_btcc.php';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(msg) {
            rmb2ltc_btcc = msg;
            console.log(rmb2ltc_btcc);
        }
    });
}

$(document).ready(function() {
    getLtcToBtcFromBtc_e();
    getRmbToLtcFromBtctrade();
    getRmbToBtcFromBtctrade();
    getRmbToLtcFromBtcc();
});
