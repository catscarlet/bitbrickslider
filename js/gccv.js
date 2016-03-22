var rmbToBtcAtBtctradeList;
//var usdToBtcAtExmoList;
var rmbToDogeAtBtctradeList;
var btcToDogefromexmoList;

/*
function getUsdToBtcAtExmoList() {
    url = 'exmo/getUsdToBtcfromexmo.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            usdToBtcAtExmoList = JSON.parse(msg);
        }
    });
}
*/

function getRmbToBtcAtBtctradeList() {
    $('#rmbToBtcAtBtctradeList').prop('disabled', true);
    url = 'btctrade/getbtclistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            rmbToBtcAtBtctradeList = JSON.parse(msg);
            $('#rmbToBtcAtBtctradeList').prop('disabled', false);
        }
    });
}

function getRmbToDogeAtBtctradeList() {
    $('#rmbToDogeAtBtctradeList').prop('disabled', true);
    url = 'btctrade/getdogelistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            rmbToDogeAtBtctradeList = JSON.parse(msg);
            $('#rmbToDogeAtBtctradeList').prop('disabled', false);
        }
    });
}

function getBtcToDogeAtExmoList() {
    $('#btcToDogefromexmoList').prop('disabled', true);
    url = 'exmo/getBtcToDogefromexmo.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            btcToDogefromexmoList = JSON.parse(msg);
            $('#btcToDogefromexmoList').prop('disabled', false);
        }
    });
}

$(document).ready(function() {



    //getUsdToBtcAtExmoList();
    getRmbToBtcAtBtctradeList();
    getRmbToDogeAtBtctradeList();
    getBtcToDogeAtExmoList();

    $('#rmbToBtcAtBtctradeList').click(function() {
        console.log(rmbToBtcAtBtctradeList);
    });

    $('#btcToDogefromexmoList').click(function() {
        console.log(btcToDogefromexmoList);
    });

    $('#rmbToDogeAtBtctradeList').click(function() {
        console.log(rmbToDogeAtBtctradeList);
    });

    $('#freshall').click(function() {
        getRmbToBtcAtBtctradeList();
        getRmbToDogeAtBtctradeList();
        getBtcToDogeAtExmoList();
    });

    $('#getSlider').click(function() {
        getSliderValue();
    });
});
