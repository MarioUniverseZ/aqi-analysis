var status = "play"

function WekaDT(){
	window.location = "WekaDT.html";
}

function KNNCA(){
	window.location = "KNNCA.html";
}

function playPause(){
	var video = document.getElementById("counter");
	if (status == "pause") {
		video.play();
		status = "play";
	}else{
		video.pause();
		status = "pause"
	}
}