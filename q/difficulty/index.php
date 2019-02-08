<?php
require '../util.php';
$config = (require '../../config.php');
$info = fetch_getinfo($config['api']);
print_r($info['difficulty']);