<?php
require '../util.php';
$config = (require '../../config.php');
$hashData = fetch_rpc($config['api'], 'getlastblockheader', '""');
$hash = $hashData['result']['block_header']['hash'];
$blockData = fetch_rpc($config['api'], 'f_block_json', '{"hash":"'.$hash.'"}');
$supplyRaw = $blockData['result']['block']['alreadyGeneratedCoins'];
$supply = number_format($supplyRaw / $config['coinUnits'], $config['coinDecimals'], ".", "");
print_r($supply);