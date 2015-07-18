<?php

//$url = "http://www.btctrade.com/coin/rmb/btc/trust.js";
$url = "trust.json";
$contents = file_get_contents($url);
$salelist = json_decode($contents);

foreach ($salelist as $salemethod => $value1) {
    echo $salemethod . "<br>";
    $value_sum = 0 ;
    foreach ($value1 as $saleindex => $value2)
    {
        echo "[" . $saleindex . "]";
        foreach ($value2 as $saleinfo => $saleamount)
        {
            if ($saleinfo == 'p') {
                $mount_group = $saleamount;
                echo "The price $mount_group has ";

            }
            if ($saleinfo == 'n') {
                $value_group = $saleamount;
                echo "$value_group , value ". $value_group*$mount_group ." . ";
                $value_sum = $value_sum+  $value_group*$mount_group;
                echo "and all beyond this value is ". $value_sum ;
                echo "<br>";
            }

        }

}

}

 ?>
