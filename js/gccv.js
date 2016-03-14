function getValueFromBtctrade() {
    url = 'getlistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            valueFromBtctrade = JSON.parse(msg);
        }
    });
}

function getValueFromExmo() {
    url = 'exmo/getlistfromexmo.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            valueFromExmo = JSON.parse(msg);
            console.log(valueFromExmo);
            //drawCharts(data);
            return valueFromExmo;
        }
    });
}

function getDrawBtctrade() {
    url = 'btctrade/getlistfrombtctrade.php';
    $.ajax({
        type: 'GET',
        url: url,
        success: function(msg) {
            data = JSON.parse(msg);
            console.log(data);
            //drawCharts(data);
            return data;
        }
    });
}

var dataOfBtctrade;

$(document).ready(function() {

    dataOfBtctrade = getDrawBtctrade();
    dataOfExmo = getValueFromExmo();

    $('#btctrade').click(function() {
        console.log(valueFromBtctrade);
    });

    $('#exmo').click(function() {
        console.log(valueFromExmo);
    });

    $('#draw').click(function() {
        getDrawBtctrade();
    });

    $('#getSlider').click(function() {
        getSliderValue();
    });

});
