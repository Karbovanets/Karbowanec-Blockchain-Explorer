<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require '../util.php';
$config = (require '../../config.php');
$info = fetch_getinfo($config['api']);
$difficulty = $info['difficulty'];
$hashrate = round($difficulty / $config['blockTargetInterval']);