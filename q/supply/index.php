<?php 

$data_string = '{"jsonrpc":"2.0","id":"test","method":"getlastblockheader","params":" "}';

$ch = curl_init('http://52.21.253.162:32348/json_rpc');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);

$result = curl_exec($ch);

// print_r($result);

// Decode the response
$responseData = json_decode($result, TRUE);

// Print the date from the response
// print_r($responseData);

$hash = $responseData['result']['block_header']['hash'];

//print_r($hash);
curl_close($ch);

$data_string2 = '{"jsonrpc":"2.0","id":"test","method":"f_block_json","params":{"hash":"'.$hash.'"}}';


$ch2 = curl_init('http://52.21.253.162:32348/json_rpc');
curl_setopt($ch2, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch2, CURLOPT_POSTFIELDS, $data_string2);
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch2, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string2))
);

$block = curl_exec($ch2);

// Decode the response
$blockData = json_decode($block, TRUE);

//print_r($blockData);

$supply = $blockData[result][block][alreadyGeneratedCoins];

$supply  = number_format($supply / 1000000000000, 12, ".", "");

print_r($supply);

curl_close($ch2);
?>