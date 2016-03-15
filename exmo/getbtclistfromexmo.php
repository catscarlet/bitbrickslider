<?php

//system("/bin/bash /var/www/getcalccoinvaluephp/wgetpost.sh");
$url = 'ordersActive.json';
$contents = file_get_contents($url);

$dealList = json_decode($contents, true);

$buy = valueCalc($dealList['data']['orders']['buy']);
$sale = valueCalc($dealList['data']['orders']['sell']);

$result = array('buy' => $buy,'sale' => $sale);

echo json_encode($result);

function valueCalc($dealList)
{
    $atThisValueTmp = 0;
    $atThisCoinsTmp = 0;
    foreach ($dealList as $id => $data) {
        $result['valuePerCoin'][$id] = (float) $data[0];
        $result['amount'][$id] = (float) $data[1];
        $result['sumOfValue'][$id] = (float) $data[2] + $atThisValueTmp;
        $result['sumOfCoins'][$id] = $atThisCoinsTmp + $result['amount'][$id];
        $atThisValueTmp = $result['sumOfValue'][$id];
        $atThisCoinsTmp = $result['sumOfCoins'][$id];
    }

    return $result;
}
