var btcOfBtctrade;
var btcOfExmo;


function getValueFromExmo() {
    url = 'exmo/getbtclistfromexmo.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            valueFromExmo = JSON.parse(msg);
            //console.log(valueFromExmo);
            btcOfExmo = valueFromExmo;
            //return valueFromExmo;
        }
    });
}

function getDrawBtctrade() {
    url = 'btctrade/getbtclistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            btcOfBtctrade = data;
            //return data;
        }
    });
}



$(document).ready(function() {

    getDrawBtctrade();
    getValueFromExmo();

    $('#btctrade').click(function() {
        console.log(btcOfBtctrade);
    });

    $('#exmo').click(function() {
        console.log(btcOfExmo);
    });

    $('#draw').click(function() {
        getDrawBtctrade();
    });

    $('#getSlider').click(function() {
        getSliderValue();
    });

});
