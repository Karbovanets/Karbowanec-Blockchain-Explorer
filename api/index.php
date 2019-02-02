<?php
require '../config.php';
$url 	= $node . '/json_rpc';
//$geturl =  $node . '/getinfo';
$mode = "post";
if (isset($_GET['mode']) && $_GET['mode'] != "") 
	$mode = $_GET['mode'];

if ($mode =="post" && isset($_POST)) {

	$postData = file_get_contents('php://input');

	header('Content-Type: application/json');

	foreach($_POST as $key=>$value) { 
		$fields_string .= $key.'='.$value.'&'; 
	}
	
	rtrim($fields_string, '&');

	$ch = curl_init();

	curl_setopt($ch,CURLOPT_URL, $url);
	curl_setopt($ch,CURLOPT_POST, count($_POST));
	curl_setopt($ch,CURLOPT_POSTFIELDS, $postData);

	$result = curl_exec($ch);

	curl_close($ch);
	die();

} elseif ($mode =="get") {

	if (isset($_GET['url']) && $_GET['url'] != "") {
		$geturl = trim($_GET['url']);
		header('Content-Type: application/json; charset=utf-8');
	} else {
		header('Content-Type: text/html; charset=utf-8');
	}
	
	$ch = curl_init();  
	curl_setopt($ch, CURLOPT_URL, $geturl);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
	$result = curl_exec($ch); 
	curl_close($ch);
	die($result);
	
}
