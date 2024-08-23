<?php

	include("connect.php");
	header("Connect-type = text/html; charset = utf-8");
	$slcdb = mysqli_select_db($db_link, "final");
	$nowdata = $_POST["nowdata"];
	/*if (!$slcdb) {
		die("資料庫連接失敗");
	}*/

	$sql_query = "INSERT INTO `recordk`(`monitordate`, `so2subindex`, `cosubindex`, `pm10subindex`, `no2subindex`, `o38subindex`, `pm25subindex`, `kmeans_cluster`, `kmeans_aqi`, `knn_id`, `knn_aqi`, `ca_aqi`) VALUES ('".$nowdata[0]."','".$nowdata[1]."','".$nowdata[2]."','".$nowdata[3]."','".$nowdata[4]."','".$nowdata[5]."','".$nowdata[6]."','".$nowdata[7]."','".$nowdata[8]."','".$nowdata[9]."','".$nowdata[10]."','".$nowdata[11]."')";

	$result = mysqli_query($db_link, $sql_query);
	if ($result) {
		echo "";
	}else{
		echo "false";
	}

	$sql_lastobs = "SELECT `id` FROM `recordk` order by `id` desc LIMIT 0 , 1";
	$lastobsquery = mysqli_query($db_link, $sql_lastobs);
	$row = mysqli_fetch_array($lastobsquery, MYSQLI_ASSOC);
	if ($result) {
		echo $row["id"];
	}else{
		echo $sql_query;
	}


?>