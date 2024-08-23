window.onload = function() {
	document.getElementById("mon").value = "";
	document.getElementById("so2").value = "";
	document.getElementById("co1").value = "";
	document.getElementById("pm10").value = "";
	document.getElementById("no2").value = "";
	document.getElementById("o38").value = "";
	document.getElementById("pm25").value = "";

}

/*J48: C = 0.25, M = 5, accuracy: 90.4%*/
function tree(){

	/*決策樹程式本體
	pm25subindex = 34~67
|   o38subindex <= 49.07818
|   |   no2subindex <= 48
|   |   |   pm10subindex = 23~44
|   |   |   |   monitordate = 2022-11-22: Very Good (11.0/5.0)
|   |   |   |   monitordate = 2022-11-21: Good (10.0/4.0)
|   |   |   |   monitordate = 2022-11-20: Very Good (10.0/2.0)
|   |   |   |   monitordate = 2022-11-19: Very Good (12.0/5.0)
|   |   |   |   monitordate = 2022-11-18
|   |   |   |   |   o38subindex <= 38: Very Good (5.0)
|   |   |   |   |   o38subindex > 38: Good (7.0/1.0)
|   |   |   |   monitordate = 2022-11-17
|   |   |   |   |   no2subindex <= 38: Good (7.0/2.0)
|   |   |   |   |   no2subindex > 38: Very Good (7.0)
|   |   |   |   monitordate = 2022-11-16: Good (6.0/3.0)
|   |   |   |   monitordate = 2022-11-15: Very Good (16.0/2.0)
|   |   |   |   monitordate = 2022-11-14: Very Good (23.0/4.0)
|   |   |   |   monitordate = 2022-11-13
|   |   |   |   |   no2subindex <= 32: Very Good (12.0/4.0)
|   |   |   |   |   no2subindex > 32: Good (11.0/1.0)
|   |   |   |   monitordate = 2022-11-12: Good (13.0/5.0)
|   |   |   |   monitordate = 2022-11-11: Good (6.0/3.0)
|   |   |   |   monitordate = 2022-11-10: Good (8.0/4.0)
|   |   |   pm10subindex = 45~65: Good (26.0/2.0)
|   |   |   pm10subindex = 1~22: Very Good (32.0)
|   |   |   pm10subindex = 66~87: Good (1.0)
|   |   no2subindex > 48: Good (52.0)
|   o38subindex > 49.07818
|   |   o38subindex <= 80: Good (53.0)
|   |   o38subindex > 80: Fair (8.0)
pm25subindex = 0~33
|   no2subindex <= 48
|   |   o38subindex <= 49.07818: Very Good (282.0)
|   |   o38subindex > 49.07818: Good (8.0)
|   no2subindex > 48: Good (17.0)
pm25subindex = 68~101
|   o38subindex <= 80
|   |   pm10subindex = 23~44: Good (39.0/1.0)
|   |   pm10subindex = 45~65
|   |   |   monitordate = 2022-11-22: Fair (13.0/4.0)
|   |   |   monitordate = 2022-11-21: Good (13.0/1.0)
|   |   |   monitordate = 2022-11-20: Fair (10.0/4.0)
|   |   |   monitordate = 2022-11-19: Good (4.0/1.0)
|   |   |   monitordate = 2022-11-18: Fair (9.0/2.0)
|   |   |   monitordate = 2022-11-17: Good (21.0/1.0)
|   |   |   monitordate = 2022-11-16
|   |   |   |   no2subindex <= 30: Good (5.0/1.0)
|   |   |   |   no2subindex > 30: Fair (5.0/1.0)
|   |   |   monitordate = 2022-11-15: Good (3.0)
|   |   |   monitordate = 2022-11-14
|   |   |   |   no2subindex <= 32: Good (6.0/1.0)
|   |   |   |   no2subindex > 32: Fair (8.0)
|   |   |   monitordate = 2022-11-13: Fair (11.0/4.0)
|   |   |   monitordate = 2022-11-12: Fair (11.0/4.0)
|   |   |   monitordate = 2022-11-11: Fair (23.0/6.0)
|   |   |   monitordate = 2022-11-10
|   |   |   |   no2subindex <= 48: Good (10.0/1.0)
|   |   |   |   no2subindex > 48: Fair (6.0/2.0)
|   |   pm10subindex = 1~22: Good (0.0)
|   |   pm10subindex = 66~87: Fair (25.0)
|   o38subindex > 80
|   |   o38subindex <= 115: Fair (49.0)
|   |   o38subindex > 115: Poor (10.0)
pm25subindex = 102~135: Fair (76.0/15.0)

Number of Leaves  : 47

Size of the tree : 	65

*/

	if (document.getElementById("pm25").value == "34~67") {
		if (document.getElementById("o38").value <= 49.07818) {
			if (document.getElementById("no2").value <= 48) {
				if (document.getElementById("pm10").value == "23~44") {
					if (document.getElementById("mon").value == "2022-11-22") {
						document.getElementById("aqi").innerHTML = "Very Good";
					}
					if (document.getElementById("mon").value == "2022-11-21") {
						document.getElementById("aqi").innerHTML = "Good";
					}
					if (document.getElementById("mon").value == "2022-11-20") {
						document.getElementById("aqi").innerHTML = "Very Good";
					}
					if (document.getElementById("mon").value == "2022-11-19") {
						document.getElementById("aqi").innerHTML = "Very Good";
					}
					if (document.getElementById("mon").value == "2022-11-18") {
						if (document.getElementById("o38").value <= 38) {
							document.getElementById("aqi").innerHTML = "Very Good";
						}
						if (document.getElementById("o38").value > 38) {
							document.getElementById("aqi").innerHTML = "Good";
						}
					}
					if (document.getElementById("mon").value == "2022-11-17") {
						if (document.getElementById("no2").value <= 38) {
							document.getElementById("aqi").innerHTML = "Good";
						}
						if (document.getElementById("no2").value > 38) {
							document.getElementById("aqi").innerHTML = "Very Good";
						}
					}
					if (document.getElementById("mon").value == "2022-11-16") {
						document.getElementById("aqi").innerHTML = "Good";
					}
					if (document.getElementById("mon").value == "2022-11-15") {
						document.getElementById("aqi").innerHTML = "Very Good";
					}
					if (document.getElementById("mon").value == "2022-11-14") {
						document.getElementById("aqi").innerHTML = "Very Good";
					}
					if (document.getElementById("mon").value == "2022-11-13") {
						if (document.getElementById("no2").value <= 32) {
							document.getElementById("aqi").innerHTML = "Very Good";
						}
						if (document.getElementById("no2").value > 32) {
							document.getElementById("aqi").innerHTML = "Good";
						}
					}
					if (document.getElementById("mon").value == "2022-11-12") {
						document.getElementById("aqi").innerHTML = "Good";
					}
					if (document.getElementById("mon").value == "2022-11-11") {
						document.getElementById("aqi").innerHTML = "Good";
					}
					if (document.getElementById("mon").value == "2022-11-10") {
						document.getElementById("aqi").innerHTML = "Good";
					}
				}
				if (document.getElementById("pm10").value == "45~65") {
					document.getElementById("aqi").innerHTML = "Good";
				}
				if (document.getElementById("pm10").value == "1~22") {
					document.getElementById("aqi").innerHTML = "Very Good";
				}
				if (document.getElementById("pm10").value == "66~87") {
					document.getElementById("aqi").innerHTML = "Good";
				}
			}
			if (document.getElementById("no2").value > 48) {
				document.getElementById("aqi").innerHTML = "Good";
			}
		}
		if (document.getElementById("o38").value > 49.07818) {
			if (document.getElementById("o38").value <= 80) {
				document.getElementById("aqi").innerHTML = "Good";
			}
			if (document.getElementById("o38").value > 80) {
				document.getElementById("aqi").innerHTML = "Fair";
			}
		}
	}
	if (document.getElementById("pm25").value == "0~33") {
		if (document.getElementById("no2").value <= 48) {
			if (document.getElementById("o38").value <= 49.07818) {
				document.getElementById("aqi").innerHTML = "Very Good";
			}
			if (document.getElementById("o38").value > 49.07818) {
				document.getElementById("aqi").innerHTML = "Good";
			}
		}
		if (document.getElementById("no2").value > 48) {
			document.getElementById("aqi").innerHTML = "Good";
		}
	}
	if (document.getElementById("pm25").value == "68~101") {
		if (document.getElementById("o38").value <= 80) {
			if (document.getElementById("pm10").value == "23~44") {
				document.getElementById("aqi").innerHTML = "Good";
			}
			if (document.getElementById("pm10").value == "45~65") {
				if (document.getElementById("mon").value == "2022-11-22") {
					document.getElementById("aqi").innerHTML = "Fair";
				}
				if (document.getElementById("mon").value == "2022-11-21") {
					document.getElementById("aqi").innerHTML = "Good";
				}
				if (document.getElementById("mon").value == "2022-11-20") {
					document.getElementById("aqi").innerHTML = "Fair";
				}
				if (document.getElementById("mon").value == "2022-11-19") {
					document.getElementById("aqi").innerHTML = "Good";
				}
				if (document.getElementById("mon").value == "2022-11-18") {
					document.getElementById("aqi").innerHTML = "Fair";
				}
				if (document.getElementById("mon").value == "2022-11-17") {
					document.getElementById("aqi").innerHTML = "Good";
				}
				if (document.getElementById("mon").value == "2022-11-16") {
					if (document.getElementById("no2").value <= 30) {
						document.getElementById("aqi").innerHTML = "Good";
					}
					if (document.getElementById("no2").value > 30) {
						document.getElementById("aqi").innerHTML = "Fair";
					}
				}
				if (document.getElementById("mon").value == "2022-11-15") {
					document.getElementById("aqi").innerHTML = "Good";
				}
				if (document.getElementById("mon").value == "2022-11-14") {
					if (document.getElementById("no2").value <= 32) {
						document.getElementById("aqi").innerHTML = "Good";
					}
					if (document.getElementById("no2").value > 32) {
						document.getElementById("aqi").innerHTML = "Fair";
					}
				}
				if (document.getElementById("mon").value == "2022-11-13") {
					document.getElementById("aqi").innerHTML = "Fair";
				}
				if (document.getElementById("mon").value == "2022-11-12") {
					document.getElementById("aqi").innerHTML = "Fair";
				}
				if (document.getElementById("mon").value == "2022-11-11") {
					document.getElementById("aqi").innerHTML = "Fair";
				}
				if (document.getElementById("mon").value == "2022-11-10") {
					if (document.getElementById("no2").value <= 48) {
						document.getElementById("aqi").innerHTML = "Good";
					}
					if (document.getElementById("no2").value > 48) {
						document.getElementById("aqi").innerHTML = "Fair";
					}
				}
			}
			if (document.getElementById("pm10").value == "1~22") {
				document.getElementById("aqi").innerHTML = "Good";
			}
			if (document.getElementById("pm10").value == "66~87") {
				document.getElementById("aqi").innerHTML = "Fair";
			}
		}
		if (document.getElementById("o38").value > 80) {
			if (document.getElementById("o38").value <= 115) {
				document.getElementById("aqi").innerHTML = "Fair";
			}
			if (document.getElementById("o38").value > 115) {
				document.getElementById("aqi").innerHTML = "Poor";
			}
		}
	}
	if (document.getElementById("pm25").value == "102~135") {
		document.getElementById("aqi").innerHTML = "Fair";
	}

	/*php*/
	$.ajax({
		type: "POST",
		url: "php/save.php",
		data: {
			"mon": document.getElementById("mon").value,
			"so2": document.getElementById("so2").value,
			"co1": document.getElementById("co1").value,
			"pm10": document.getElementById("pm10").value,
			"no2": document.getElementById("no2").value,
			"o38": document.getElementById("o38").value,
			"pm25": document.getElementById("pm25").value,
			"aqi": document.getElementById("aqi").innerHTML,
		},
		success: function(data){
			/*if (data != "1")
				alert(data);
			*/
			alert("第" + data + "筆資料記錄成功");
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert("發生錯誤 狀態: " + jqXHR.readyState + " " + jqXHR.status);
		},
	})

	document.getElementById("mon").value = "";
	document.getElementById("so2").value = "";
	document.getElementById("co1").value = "";
	document.getElementById("pm10").value = "";
	document.getElementById("no2").value = "";
	document.getElementById("o38").value = "";
	document.getElementById("pm25").value = "";
}