<?php

//system("/bin/bash /var/www/getcalccoinvaluephp/wgetpost.sh");
//$data = file_get_contents('book_btc.json');

$url = 'book_doge.json';

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

function httpsRequest($url, $data = null)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    if (!empty($data)) {
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    if (curl_errno($curl)) {
        $this->_doLog('Curl Error:'.curl_error($curl).' Request Url:'.$url);
    }
    curl_close($curl);

    return $output;
}
