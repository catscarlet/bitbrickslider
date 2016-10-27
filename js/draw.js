$(function() {
    $('#slider').slider({
        min: 100,
        max: 10000,
        step: 0.01,
        start: function(event, ui) {
            //console.log('start');
        },
        stop: function(event, ui) {
            //console.log('stop');
        },
        slide: function(event, ui) {
            $('#input1').val(ui.value);
            getSliderValue(ui.value);
        }
    });
});


$(document).ready(function() {
    $('#useInput1').click(function() {
        var input00 = $('#input1').val();
        var best_rst = way00(input00);
        setTable(best_rst);

    });
    $('#auto1').click(function() {
        var best_rst = brickslider();
        var input00 = best_rst.data.input00;
        $('#input1').val(input00);
    });

});

function getSliderValue(value) {
    console.log(value);
    var rst = way01(value);
    setTable(rst);
}


function setTable(rst) {
    var data = rst.data;
    var x = parseFloat(data.input00);
    var y = parseFloat(rst.output);
    benefit = y - x;
    benefit_percent = benefit / x;
    console.log(rst);
    $('#input00').text(data.input00);
    $('#output00').text(data.output00);
    $('#output01').text(data.output01);
    $('#output02').text(data.output02);
    $('#output03').text(data.output03);
    $('#output04').text(data.output04);
    $('#benefit').text(benefit);

    //$('#output00').text(data.output00);
    //$('#output01').text(data.output01);
    var loss2 = data.output01 - data.output00;
    console.log(loss2);
    $('#loss1').text(loss2);
    //$('#output03').text(data.output03);
    var loss3 = data.output03 - data.output02;
    console.log(loss3);
    $('#loss4').text(loss3);
    $('#benefit_percent').text((benefit_percent * 100) + '%');
}
