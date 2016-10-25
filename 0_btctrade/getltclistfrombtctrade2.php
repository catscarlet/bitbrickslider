<?php

$name = 'use_rmb_to_buy_ltc@btctrade';
$url = 'rmb2ltc_btctrade.json';

$contents = file_get_contents($url);
$dealList = json_decode($contents, true);
$buy = valueCalc($dealList['buy']);
$sale = valueCalc($dealList['sale']);
$fee = 0;

$result = array('name' => $name, 'fee' => $fee,'buy' => $buy,'sale' => $sale);

echo json_encode($result);

function valueCalc($dealList)
{
    $atThisValueTmp = 0;
    $atThisCoinsTmp = 0;
    $result = array();
    $array = array();
    foreach ($dealList as $id => $data) {
        $tmp['valuePerCoin'] = (float) $data['p'];
        $tmp['amount'] = (float) $data['n'];
        $tmp['sumOfValue'] = $tmp['valuePerCoin'] * $tmp['amount'] + $atThisValueTmp;
        $tmp['sumOfCoins'] = $tmp['amount'] + $atThisCoinsTmp;

        $result[] = $tmp;

        $atThisValueTmp = $tmp['sumOfValue'][$id];
        $atThisCoinsTmp = $tmp['sumOfCoins'][$id];
    }

    $re_order = usort($result, 're_order');

    return $result;
}

function re_order($a, $b)
{
    if ($a['valuePerCoin'] == $b['valuePerCoin']) {
        return 0;
    }

    return ($a['valuePerCoin'] > $b['valuePerCoin']) ? -1 : 1;
}
