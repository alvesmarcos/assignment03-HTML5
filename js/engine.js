window.onload = function() {
	var video = document.getElementById('ivideo');

	document.getElementById('playpausebtn').onclick = playpause(this, video);
}

var playpause = function(button, video) {
	document.alert('Fui clicado');

	if(video.paused){
		video.play();
		button.innerHTML = "Pause";
	} else {
		video.pause();
		button.innerHTML = "Play";
	}
}