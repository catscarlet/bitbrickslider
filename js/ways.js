function way00(input00) {
    //way-00 ltc@btctrade - ltc@btc-e - btc@btc-e - btc@btctrade
    //console.log(input_ltc);

    var fee_ltc_btctrade_out = 0.001;
    var fee_ltc_btc_e_out = 0.005;
    var returnJson;

    output00 = stepwiseBuy(input00, rmb2ltc_btctrade, '');
    //console.log(output00);

    output01 = withdrawWithFixedFee(output00, fee_ltc_btctrade_out, '');
    //console.log(output00);

    output02 = stepwiseSell(output01, ltc2btc_btce, '');
    //console.log(output00);

    output03 = withdrawWithPercentFee(output02, fee_ltc_btc_e_out, '');
    //console.log(output00);

    output04 = stepwiseSell(output03, rmb2btc_btctrade, '');
    //console.log(output00);

    returnJson = {
        'output': output04,
        'data': {
            'input00': input00,
            'output00': output00,
            'output01': output01,
            'output02': output02,
            'output03': output03,
            'output04': output04,
        }
    };
    return returnJson;
}

function way01(input00) {
    //way-00 rmb@btcc - ltc@btcc - ltc@btc-e - btc@btc-e - btc@btctrade
    //console.log(input_ltc);

    var fee_ltc_btcc_out_fixed = 0.001;
    var fee_ltc_btc_e_out_percent = 0.005;
    var result;

    output00 = stepwiseBuy(input00, rmb2ltc_btcc, '');
    //console.log(output00);

    output01 = withdrawWithFixedFee(output00, fee_ltc_btcc_out_fixed, '');
    //console.log(output00);

    output02 = stepwiseSell(output01, ltc2btc_btce, '');
    //console.log(output00);

    output03 = withdrawWithPercentFee(output02, fee_ltc_btc_e_out_percent, '');
    //console.log(output00);

    output04 = stepwiseSell(output03, rmb2btc_btctrade, '');
    //console.log(output00);

    result = {
        'input00': input00,
        'output': output04,
        'data': {
            'input00': input00,
            'output00': output00,
            'output01': output01,
            'output02': output02,
            'output03': output03,
            'output04': output04,
        }
    };
    return result;
}
