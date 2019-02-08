<?php
require '../util.php';
$config = (require '../../config.php');
$info = fetch_getinfo($config['api']);
$feeRaw = $info['min_tx_fee'];
$fee = number_format($feeRaw / $config['coinUnits'], $config['coinDecimals'], ".", "");
print_r($fee);