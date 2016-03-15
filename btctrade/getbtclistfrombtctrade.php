<?php

$url = 'trust_btc.json';
//$url = 'http://www.btctrade.com/coin/rmb/btc/trust.js';
$contents = file_get_contents($url);
$dealList = json_decode($contents, true);
$buy = valueCalc2($dealList['buy']);
$sale = valueCalc2($dealList['sale']);

$result = array('buy' => $buy,'sale' => $sale);

echo json_encode($result);

function valueCalc($dealList)
{
    $atThisValueTmp = 0;
    $atThisCoinsTmp = 0;
    foreach ($dealList as $id => $data) {
        $result[$id]['value'] = $data['p'];
        $result[$id]['amount'] = $data['n'];
        $result[$id]['sumOfValue'] = $atThisValueTmp + $data['p'];
        $result[$id]['sumOfCoins'] = $atThisCoinsTmp + $data['n'];
        $atThisValueTmp = $result[$id]['sumOfValue'];
        $atThisCoinsTmp = $result[$id]['sumOfCoins'];
    }

    return $result;
}

function valueCalc2($dealList)
{
    $atThisValueTmp = 0;
    $atThisCoinsTmp = 0;
    foreach ($dealList as $id => $data) {
        $result['valuePerCoin'][$id] = (float) $data['p'];
        $result['amount'][$id] = (float) $data['n'];
        $result['sumOfValue'][$id] = ($result['valuePerCoin'][$id] * $result['amount'][$id]) + $atThisValueTmp;
        $result['sumOfCoins'][$id] = $data['n']  + $atThisCoinsTmp;
        $atThisValueTmp = $result['sumOfValue'][$id];
        $atThisCoinsTmp = $result['sumOfCoins'][$id];
    }

    return $result;
}
