<?php

$url = 'trust.json';
$url = 'http://www.btctrade.com/coin/rmb/btc/trust.js';
$contents = file_get_contents($url);
$dealList = json_decode($contents, true);

$buy = valueCalc($dealList['buy']);
$sale = valueCalc($dealList['sale']);

$result = array('buy' => $buy,'sale' => $sale);

echo json_encode($result);

function valueCalc($dealList)
{
    $atThisValueTmp = 0;
    foreach ($dealList as $id => $data) {
        $result['value'][$id] = $data['p'];
        $result['amount'][$id] = $data['n'];
        $result['atThisValue'][$id] = $atThisValueTmp + $data['p'] * $data['n'];
        $atThisValueTmp = $result['atThisValue'][$id];
    }

    return $result;
}
