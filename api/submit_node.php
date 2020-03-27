<?php
    // Turn off all error reporting
    error_reporting(0);

	$file = "nodes.json";
	$arr = array();
	try {
        // Get form data
        $form = $_POST['node'];
        // Validate
        $_url = $form . '/feeaddress';       
        //$context = stream_context_create(array('http' => array('header'=>'Connection: close\r\n')));
        //$response = file_get_contents($_url,false,$context);

        $ch = curl_init();
        $timeout = 5;
        curl_setopt($ch, CURLOPT_URL,  $_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $response = curl_exec($ch);
        curl_close($ch);

        if (!is_string($response) || !strlen($response)) { 
            echo '{"result": "No response"}';
        } else {      
            $info = json_decode($response, true);
            if (!empty($info)) {
                $feeAddress = $info['fee_address'];
                $feeAmount =  $info['fee_amount'];
                if(isset($feeAddress) === true) { // we can actually add node without fee
                    $json = file_get_contents($file);
                    $arr = json_decode($json, true);
                    if (in_array($form , $arr)) {
                        echo '{"result": "Already exists"}';
                    } else {
                        array_push($arr, $form);
                        $json = json_encode($arr, JSON_PRETTY_PRINT);
                        if (file_put_contents($file, $json)) {
                            echo '{"result": "Node submitted successfuly"}';
                        }
                        else {
                            echo '{"result": "Error putting entry to file"}';
                        }
                    }
                } else {
                    echo '{"result": "Couldn\'t find node fee data"}';
                }
            } else {
                echo '{"result": "Couldn\'t get fee info"}';
            }
        }       
    }
    catch (Exception $e) {
        echo '{"result":' + $e->getMessage() + ' }';
    }
?>