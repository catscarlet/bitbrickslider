<?php
//$trustvalue = readfile("trust.json");
$url = "trust.json";
$contents = file_get_contents($url);
//echo $contents;
//echo json_decode($contents,false);
//var_dump(json_decode($contents,true));

$atr = json_decode($contents);

//echo $atr["buy"]["0"]["p"] ;
//var_dump(json_decode($contents,false));

foreach ($atr as $key1 => $value1) {
    echo $key1 . "<br>";
    foreach ($value1 as $key2 => $value2)
    {
        echo $key2 . "<br>";
        foreach ($value2 as $key3 => $value3)
        {

            //
                echo $key3 ." = ". $value3 . "<br>";
        }
    # code...
}


}



 ?>
