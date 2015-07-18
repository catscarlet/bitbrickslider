<?php

//system("/bin/bash /var/www/getcalccoinvaluephp/wgetpost.sh");
$url = "ordersActive.json";
$contents = file_get_contents($url);
$salelist = json_decode($contents);
$saledata = $salelist->data;
$saleorder = $saledata->orders;
$saleorder_buy =$saleorder->buy;
$saleorder_buy_result = $saleorder_buy_amount = $saleorder_buy_price = $saleorder_buy_sum = 0;

foreach ($saleorder_buy as $saleindex => $saleorder_buy_info) {

foreach ($saleorder_buy_info as $saleorder_buy_name => $saleorder_buy_value)
{
#    echo $saleorder_buy_value;
    switch ($saleorder_buy_name) {

        case 'result':
                $saleorder_buy_result = $saleorder_buy_value;
                $saleorder_buy_sum = $saleorder_buy_sum + $saleorder_buy_result;
                break;

        case 'amount':
                $saleorder_buy_amount = $saleorder_buy_value;
                break;

        case 'price':
                $saleorder_buy_price = $saleorder_buy_value;
                echo "[" . $saleindex . "]The price ".$saleorder_buy_price." has ".$saleorder_buy_amount." , result is ".$saleorder_buy_result." , and all beyond this value is ".$saleorder_buy_sum."<br>" ;
                break;

        default:
            echo "Error !!!";
            break;
    }

}
}

?>
