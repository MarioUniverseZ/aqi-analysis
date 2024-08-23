<?php

	$db_host = "localhost";
	$db_username = "root";
	$db_password = ""; /*your MySQL password*/

	$db_link = mysqli_connect($db_host, $db_username, $db_password);
	if (!$db_link) {
		die("連接失敗");
	}
	mysqli_query($db_link, "SET NAMES 'utf8'");

?>