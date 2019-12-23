<?php
require '../util.php';
$config = (require '../../config.php');
$info = fetch_getinfo($config['api']);
$supplyRaw = $info['already_generated_coins'];
$supply = number_format($supplyRaw, $config['coinDecimals'], ".", "");
print_r($supply);