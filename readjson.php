<?php

$url = "trust.json";
$contents = file_get_contents($url);
$salelist = json_decode($contents);

foreach ($salelist as $salemethod => $value1) {
    echo $salemethod . "<br>";
    foreach ($value1 as $saleindex => $value2)
    {
        //echo $saleindex . "<br>";
        foreach ($value2 as $saleinfo => $saleamount)
        {
            if ($saleinfo == 'p') {
                $mount_group = $saleamount;
                echo "The value $mount_group has ";

            }
            if ($saleinfo == 'n') {
                $value_group = $saleamount;
                echo "$value_group , value ". $value_group*$mount_group . "<br>";
            }

        }

}


}



 ?>
