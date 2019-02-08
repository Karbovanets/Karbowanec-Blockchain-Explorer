<?php
require '../util.php';
$config = (require '../../config.php');
$blockHeader = fetch_rpc($config['api'], 'getlastblockheader', '""');
$rewardRaw = $blockHeader['result']['block_header']['reward'];
$reward = number_format($rewardRaw / $config['coinUnits'], $config['coinDecimals'], ".", "");
print_r($reward);