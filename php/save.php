<?php

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST');

	include("connect.php");
	header("Connect-type: text/html; charset = utf-8");
	$slcdb = mysqli_select_db($db_link, "final");
	if (!$slcdb) {
		die("資料庫選擇失敗");
	}

	$mon = $_POST["mon"];
	$so2 = $_POST["so2"];
	$co1 = $_POST["co1"];
	$pm10 = $_POST["pm10"];
	$no2 = $_POST["no2"];
	$o38 = $_POST["o38"];
	$pm25 = $_POST["pm25"];
	$aqi = $_POST["aqi"];

	$sql_query = "INSERT INTO `record`(`monitordate`, `so2subindex`, `cosubindex`, `pm10subindex`, `no2subindex`, `o38subindex`, `pm25subindex`, `aqi`) VALUES ('".$mon."',".$so2.",".$co1.",'".$pm10."',".$no2.",".$o38.",'".$pm25."','".$aqi."')";

	$result = mysqli_query($db_link, $sql_query);

	$sql_lastobs = "SELECT `id` FROM `record` order by `id` desc LIMIT 0 , 1";
	$lastobsquery = mysqli_query($db_link, $sql_lastobs);
	$row = mysqli_fetch_array($lastobsquery, MYSQLI_ASSOC);
	if ($result) {
		echo $row["id"];
	}else{
		echo $sql_query;
	}

?>