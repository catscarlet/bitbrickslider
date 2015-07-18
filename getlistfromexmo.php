<?php

/*
 发送post请求
 @param string $url 请求地址
 @param array $post_data post键值对数据
 @return string
*/

function send_post($url, $post_data) {
  $postdata = http_build_query($post_data);
  $options = array(
      'http' => array(
          'method' => 'POST',
            'header' => 'Content-type:application/x-www-form-urlencoded',
            'content' => $postdata,
            'timeout' => 15 * 60 // 超时时间（单位:s）
        )
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    return $result;
}



//$post_data = {"csrf_token":"","format":"html","pair":"BTC_USD"}
$post_data = array('txt' => 'txt1','txt2' => 'txt2');


echo send_post('http://pi.catscarlet.com:8091/getcalccoinvaluephp/posttest.php', $post_data);



?>
