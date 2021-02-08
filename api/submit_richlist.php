<?php
    // Turn off all error reporting
    error_reporting(0);

	$file = "richlist.json";
	$arr = array();
	try {
        // Get form data
        $form = $_POST['rich'];
        $formDecoded = json_decode($form, true);

        // TODO: validation was performed on caller page but should be performed here instead for safety
   
        $json = file_get_contents($file);
        $arr = json_decode($json, true);
        if (in_array($formDecoded , $arr)) {
            echo '{"result": "Already exists"}';
        } else {
            array_push($arr, $formDecoded);
            $json = json_encode($arr, JSON_PRETTY_PRINT);
            if (file_put_contents($file, $json)) {
                echo '{"result": "Richlist entry submitted successfuly"}';
            }
            else {
                echo '{"result": "Error putting entry to file"}';
            }
        }
    }
    catch (Exception $e) {
        echo '{"result":' + $e->getMessage() + ' }';
    }  
?>