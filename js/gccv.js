var btcOfBtctrade;
var btcOfExmo;
var dogeOfBtctrade;
var dogeOfExmo;

function getBtcFromExmo() {
    url = 'exmo/getbtclistfromexmo.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            btcOfExmo = JSON.parse(msg);
        }
    });
}

function getBtcFromBtctrade() {
    url = 'btctrade/getbtclistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            btcOfBtctrade = JSON.parse(msg);
        }
    });
}

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

function getDogeFromBtctrade() {
    url = 'btctrade/getdogelistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            dogeOfBtctrade = JSON.parse(msg);
        }
    });
}

$(document).ready(function() {

    getBtcFromExmo();
    getBtcFromBtctrade();
    getDogeFromExmo();
    getDogeFromBtctrade();

    $('#btctrade').click(function() {
        console.log(btcOfBtctrade);
    });

    $('#exmo').click(function() {
        console.log(btcOfExmo);
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
