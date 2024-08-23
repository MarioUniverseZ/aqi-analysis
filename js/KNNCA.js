var nowdata = new Array(15);
var alldata = new Object();

window.onload = function(){
	document.getElementById("mon").value = "";
	document.getElementById("so2").value = "";
	document.getElementById("co1").value = "";
	document.getElementById("pm10").value = "";
	document.getElementById("no2").value = "";
	document.getElementById("o38").value = "";
	document.getElementById("pm25").value = "";

	queryallfromdb("kmeanscentroid");
	queryallfromdb("testdata");
}

function queryallfromdb(target){
	$.ajax({
		type: "POST",
		url: "php/final_sql.php",
		data:{
			"targettable": target,
		},
		success: function(data){
			data = JSON.parse(data);
			console.log(data[0]);
			alldata[target] = data;
		},
		error: function(){
			alert("發生錯誤 狀態:" + jqXHR.readyState + " " + jqXHR.status);
		},
	})
}

function testinput(){ /*測試用函數*/
	if ( /*防呆*/
		document.getElementById("mon").value != "" &&  
		document.getElementById("so2").value != "" &&
		document.getElementById("co1").value != "" &&
		document.getElementById("pm10").value != "" &&
		document.getElementById("no2").value != "" &&
		document.getElementById("o38").value != "" &&
		document.getElementById("pm25").value != ""
		){
		if ( /*判斷標準基於美國空氣分指數及對應的污染物項目濃度指數表*/
			document.getElementById("so2").value < 484.7 &&
			document.getElementById("co1").value < 34.35 &&
			document.getElementById("no2").value < 676.8 &&
			document.getElementById("o38").value < 210
			){

			/*alert("success");*/
			nowdata[0] = document.getElementById("mon").value;
			nowdata[1] = document.getElementById("so2").value;
			nowdata[2] = document.getElementById("co1").value;
			nowdata[3] = document.getElementById("pm10").value;
			nowdata[4] = document.getElementById("no2").value;
			nowdata[5] = document.getElementById("o38").value;
			nowdata[6] = document.getElementById("pm25").value;


			console.log(nowdata);
			return("success");
		}else{
			alert("請分別確認二氧化硫、二氧化氮或臭氧8小時副指標數值是否超出對應於AQI = 200的資料以及一氧化碳副指標數值是否超出對應於AQI = 300的資料，詳見維基百科/空氣質量指數");
		}
	}else{
		alert("請完整填寫上述表單!");
	}
}

function kmeans(){
	if (testinput() != "success") {return;}
	else{
		var kscore = new Array(5); /*質心數量為5*/
		for (var j = 0; j <= 4; j++){
			var tempscore = 0;

			for (var i = 0; i <= 6; i++) { /*kmeanscentroid第j個質心，第i+1筆資料*/
				if (i == 1) { /*so2*/
					tempscore += 1-Math.abs(nowdata[i] - alldata["kmeanscentroid"][j][i+1]) / (74-0);
				}
				else if (i == 2) { /*co1*/
					tempscore += 1-Math.abs(nowdata[i] - alldata["kmeanscentroid"][j][i+1]) / (18-0);
				}
				else if (i == 4) { /*no2*/
					tempscore += 1-Math.abs(nowdata[i] - alldata["kmeanscentroid"][j][i+1]) / (81-0);
				}
				else if (i == 5) { /*o38*/
					tempscore += 1-Math.abs(nowdata[i] - alldata["kmeanscentroid"][j][i+1]) / (151-13);
				}
				else { /*mon, pm10, pm25*/
					if (nowdata[i] == alldata["kmeanscentroid"][j][i+1]) {
						tempscore ++;
					}
				}
			}
			kscore[j] = tempscore;
		}
		/*console.log(kscore);*/
	}
	var nowcluster = kscore.indexOf(Math.max.apply(null, kscore)) + 1;
	document.getElementById("nowcluster").innerHTML = nowcluster;
	var nowkmeanspep = alldata["kmeanscentroid"][nowcluster-1][8];
	document.getElementById("nowkmeanspep").innerHTML = nowkmeanspep;

	nowdata[7] = nowcluster;
	nowdata[8] = nowkmeanspep;
}

function knn(){
	if (testinput() != "success") {
		return;
	}else{
		var knnscore = new Array(1000); /*資料筆數為1000*/
		for (var j = 0; j <= 999; j++) {
			var tempscore = 0;

			for (var i = 0; i <= 6; i++) { /*kmeanscentroid第j個質心，第i+1筆資料*/
				if (i == 1) { /*so2*/
					tempscore += 1-Math.abs(nowdata[i] - alldata["testdata"][j][i+1]) / (74-0);
				}
				else if (i == 2) { /*co1*/
					tempscore += 1-Math.abs(nowdata[i] - alldata["testdata"][j][i+1]) / (18-0);
				}
				else if (i == 4) { /*no2*/
					tempscore += 1-Math.abs(nowdata[i] - alldata["testdata"][j][i+1]) / (81-0);
				}
				else if (i == 5) { /*o38*/
					tempscore += 1-Math.abs(nowdata[i] - alldata["testdata"][j][i+1]) / (151-13);
				}
				else { /*mon, pm10, pm25*/
					if (nowdata[i] == alldata["testdata"][j][i+1]) {
						tempscore ++;
					}
				}
			}
			knnscore[j] = tempscore;
		}
		console.log(knnscore);
	}
	var nowknnid = knnscore.indexOf(Math.max.apply(null, knnscore)) + 1;
	document.getElementById("nowknnid").innerHTML = nowknnid;
	var nowknnpep = alldata["testdata"][nowknnid-1][8];
	document.getElementById("nowknnpep").innerHTML = nowknnpep;
	nowdata[9] = nowknnid;
	nowdata[10] = nowknnpep;
	
}

function crossanalysis(){
	var nowcapep = "";
	if (!nowdata[7]){
		alert("請先進行kmeans");
	}
	/*TODO*/
	else if (nowdata[7] == "0") {
		if (nowdata[6] == "34~67") {
			nowcapep = "Good";
		}
	}
	else if (nowdata[7] == "1") {
		if (nowdata[6] == "34~67") {
			nowcapep = "Very Good";
		}
		if (nowdata[3] == "23~44") {
			nowcapep = "Very Good";
		}
	}
	else if (nowdata[7] == "3") {
		if (nowdata[6] == "68~101") {
			nowcapep = "Good";
		}
	}
	else if (nowdata[7] == "4") {
		if (nowdata[3] == "23~44") {
			nowcapep = "Fair";
		}
	}
	if (!nowcapep) { nowcapep = "NONE"; }
	document.getElementById("nowCAfinal").innerHTML = nowcapep;
	nowdata[11] = nowcapep;
}

function sendresult(){
	if (!nowdata[7]) {
		alert("先進行kmeans");
		return;
	}
	else if(!nowdata[9]){
		alert("先進行knn");
		return;
	}
	else if(!nowdata[11]){
		alert("先進行交叉分析");
		return;
	}
	$.ajax({
		type: "POST",
		url: "php/savedata.php",
		data: {"nowdata": nowdata},
		success: function(data){
			alert("第" + data + "筆資料輸入完成");
		},
		error: function(){
			alert("發生錯誤 狀態:" + jqXHR.readyState + " " + jqXHR.status);
		},
	});
}

function clearinput(){
	document.getElementById("mon").value = "";
	document.getElementById("so2").value = "";
	document.getElementById("co1").value = "";
	document.getElementById("pm10").value = "";
	document.getElementById("no2").value = "";
	document.getElementById("o38").value = "";
	document.getElementById("pm25").value = "";
	document.getElementById("nowcluster").value = "";
	document.getElementById("nowkmeanspep").value = "";
	document.getElementById("nowknnid").value = "";
	document.getElementById("nowknnpep").value = "";
	document.getElementById("nowCAfinal").value = "";
	nowdata.length = 0;
}