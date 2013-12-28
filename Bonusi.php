<?php
http://stackoverflow.com/questions/3667762/sending-json-via-ajax-to-php-using-jquery


/**
 * File used to calculate the bonuses
 * 
 * @Author: Rezart Veliaj
 */

$data = json_decode($_GET['data']);

$lloji_1 = $data->{'lloji_1'};
$lloji_2 = $data->{'lloji_2'};
$lloji_3 = $data->{'lloji_3'};
$lloji_4 = $data->{'lloji_4'};
$lloji_5 = $data->{'lloji_5'};

$data = calculateBonus($lloji_1, $lloji_2, $lloji_3, $lloji_4, $lloji_5);

echo json_encode($data);
  
function calculateBonus($lloji_1, $lloji_2, $lloji_3, $lloji_4, $lloji_5)
{
       $sasia = Array('','','','','','','','','','');
	   
	   $sasia_1 = 2*(int)$lloji_1;
	   $sasia_2 = 2*(int)$lloji_2;
	   $sasia_3 = 2*(int)$lloji_3;
	   $sasia_4 = 2*(int)$lloji_4;
	   $sasia_5 = 2*(int)$lloji_5;
	   
	   $sasia_6 = (2.3)*(int)$lloji_1;
	   $sasia_7 = (2.3)*(int)$lloji_2;
	   $sasia_8 = (2.3)*(int)$lloji_3;
	   $sasia_9 = (2.3)*(int)$lloji_4;
	   $sasia_10 = (2.3)*(int)$lloji_5;

	 $data = array('lloji_1'=>$lloji_1,'lloji_2'=>$lloji_2,'lloji_3'=>$lloji_3,'lloji_4'=>$lloji_4,'lloji_5'=>$lloji_5,
	               'sasia_1'=>$sasia_1,'sasia_2'=>$sasia_2,'sasia_3'=>$sasia_3,'sasia_4'=>$sasia_4,'sasia_5'=>$sasia_5,
				   'sasia_6'=>$sasia_6,'sasia_7'=>$sasia_7,'sasia_8'=>$sasia_8,'sasia_9'=>$sasia_9,'sasia_10'=>$sasia_10
	               );  
return $data;
}



