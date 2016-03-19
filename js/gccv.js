var rmbToBtcAtBtctradeList;
var usdToBtcAtExmoList;
var rmbToDogeAtBtctradeList;
var dogeToUsdAtBtctradeList;
var btcToDogefromexmoList;


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

function getRmbToBtcAtBtctradeList() {
    url = 'btctrade/getbtclistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            rmbToBtcAtBtctradeList = JSON.parse(msg);
        }
    });
}

/*
function getDogeFromExmo() {
    url = 'exmo/getdogelistfromexmo.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            dogeOfExmo = JSON.parse(msg);
        }
    });
}
*/

function getRmbToDogeAtBtctradeList() {
    url = 'btctrade/getdogelistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            rmbToDogeAtBtctradeList = JSON.parse(msg);
        }
    });
}

function getBtcToDogeAtExmoList() {
    url = 'exmo/getBtcToDogefromexmo.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            btcToDogefromexmoList = JSON.parse(msg);
        }
    });
}

$(document).ready(function() {

    getUsdToBtcAtExmoList();
    getRmbToBtcAtBtctradeList();
    //getDogeFromExmo();
    getRmbToDogeAtBtctradeList();
    getBtcToDogeAtExmoList();

    $('#rmbToBtcAtBtctradeList').click(function() {
        console.log(rmbToBtcAtBtctradeList);
    });

    $('#usdToBtcAtExmoList').click(function() {
        console.log(usdToBtcAtExmoList);
    });

    $('#btcToDogefromexmoList').click(function() {
        console.log(btcToDogefromexmoList);
    });

    /*
        $('#draw').click(function() {
            getDrawBtctrade();
        });
*/

    $('#getSlider').click(function() {
        getSliderValue();
    });

});
