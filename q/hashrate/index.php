<?php
require '../util.php';
$config = (require '../../config.php');
$info = fetch_getinfo($config['api']);
$difficulty = $info['difficulty'];
$hashrate = round($difficulty / $config['blockTargetInterval']);
print_r($hashrate);