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
    foreach ($dealList as $id => $data) {
        $result['value'][$id] = $data[0];
        $result['amount'][$id] = $data[1];
        $result['valueXamount'][$id] = $data[2];
        $result['atThisValue'][$id] = $atThisValueTmp + $data[0] * $data[1];
        $atThisValueTmp = $result['atThisValue'][$id];
    }

    return $result;
}
