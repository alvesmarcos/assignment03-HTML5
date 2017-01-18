var image;
var idvideo = "#video";
var video;
var flag = true;

var sum_introducao;
var sum_campo;
var sum_marcando;
var sum_atacando;
var sum_turnovers;
var sum_scrimmage;
var sum_snap;
var sum_quarterback;
var sum_times;
var sum_tempo;
var sum_superbowl;
var sum_conclusao;

function introduction() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 1,
		end: 60,
		onStart: function( options ) {
					document.getElementById("enquete").style.visibility = "hidden";
				    image.src = "res/intro.png"
				  	sum_introducao.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_introducao.style.color = "#424242"
				}
	});
};

function field() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 60,
		end: 126,
		onStart: function( options ) {
				    image.src = "res/ocampo.png"
				    sum_campo.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_campo.style.color = "#424242"
				}
	});
};

function score() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 126,
		end: 251,
		onStart: function( options ) {
				    image.src = "res/marcando.png"
				    sum_marcando.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_marcando.style.color = "#424242"
				}
	});
};

function attacking() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 251,
		end: 418,
		onStart: function( options ) {
				    image.src = "res/atacando.png"
				    sum_atacando.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_atacando.style.color = "#424242"
				}
	});
};

function turnovers() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 418,
		end: 506,
		onStart: function( options ) {
				    image.src = "res/turnovers.png"
				    sum_turnovers.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_turnovers.style.color = "#424242"
				}
	});
};

function scrimmage() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 506,
		end: 534,
		onStart: function( options ) {
				    image.src = "res/scrimmage.png"
				    sum_scrimmage.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_scrimmage.style.color = "#424242"
				}
	});
};

function snap() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 534,
		end: 559,
		onStart: function( options ) {
				    image.src = "res/snap.png"
				    sum_snap.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_snap.style.color = "#424242"
				}
	});
};

function quarterback() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 559,
		end: 620,
		onStart: function( options ) {
				    image.src = "res/quarterback.png"
				    sum_quarterback.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_quarterback.style.color = "#424242"
				}
	});
};

function teams() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 620,
		end: 691,
		onStart: function( options ) {
				    image.src = "res/ostimes.png"
				    sum_times.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_times.style.color = "#424242"
				}
	});
};

function time() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 691,
		end: 764,
		onStart: function( options ) {
				    image.src = "res/otempo.png"
				    sum_tempo.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_tempo.style.color = "#424242"
				}
	});
};

function superbowl() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 764,
		end: 854,
		onStart: function( options ) {
				    image.src = "res/superbowl.png"
				    sum_superbowl.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_superbowl.style.color = "#424242"
				}
	});
};

function finished() {
	var popcorn = Popcorn(idvideo); 
	popcorn.code({
		start: 854,
		end: 933,
		onStart: function( options ) {
				    image.src = "res/nfl-wallpaper.jpg"
				    sum_conclusao.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
			 	image.src = "res/shield.jpg"
				    sum_conclusao.style.color = "#424242"
					document.getElementById("enquete").style.visibility = "visible";
				}
	});
};

document.addEventListener("DOMContentLoaded", introduction, false);
document.addEventListener("DOMContentLoaded", field, false);
document.addEventListener("DOMContentLoaded", score, false);
document.addEventListener("DOMContentLoaded", attacking, false);
document.addEventListener("DOMContentLoaded", turnovers, false);
document.addEventListener("DOMContentLoaded", scrimmage, false);
document.addEventListener("DOMContentLoaded", snap, false);
document.addEventListener("DOMContentLoaded", quarterback, false);
document.addEventListener("DOMContentLoaded", teams, false);
document.addEventListener("DOMContentLoaded", time, false);
document.addEventListener("DOMContentLoaded", superbowl, false);
document.addEventListener("DOMContentLoaded", finished, false);


window.onload = function () {
	image = document.getElementById("presentation");
	sum_introducao = document.getElementById("sum_intro");
	sum_campo = document.getElementById("sum_campo");
	sum_marcando = document.getElementById("sum_marcando");
	sum_atacando = document.getElementById("sum_atacando");
	sum_turnovers = document.getElementById("sum_turnovers");
	sum_scrimmage = document.getElementById("sum_scrim");
	sum_snap = document.getElementById("sum_snap");
	sum_quarterback = document.getElementById("sum_qb");
	sum_times = document.getElementById("sum_times");
	sum_tempo = document.getElementById("sum_tempo");
	sum_superbowl = document.getElementById("sum_super");
	sum_conclusao = document.getElementById("sum_conclu");
	video = document.getElementById("video");
	var btn_enable_disable = document.getElementById("btn_ene_dis");
	var btn_1 = document.getElementById("btn_1");
	var btn_2 = document.getElementById("btn_2");
	var btn_3 = document.getElementById("btn_3");
	var btn_4 = document.getElementById("btn_4");
	var btn_5 = document.getElementById("btn_5");

	btn_1.onclick = function() { getHttpResponseText("http://localhost:8080/1.txt"); close(); }
	btn_2.onclick = function() { getHttpResponseText("http://localhost:8080/2.txt"); close(); }
	btn_3.onclick = function() { getHttpResponseText("http://localhost:8080/3.txt"); close(); }
	btn_4.onclick = function() { getHttpResponseText("http://localhost:8080/4.txt"); close(); }
	btn_5.onclick = function() { getHttpResponseText("http://localhost:8080/5.txt"); close(); }


	btn_enable_disable.onclick = function() {
		
		if(flag){
			video.style.height = "2px";
			btn_enable_disable.className = "btn btn-success";
			btn_enable_disable.innerHTML = "habilitar vídeo";
			flag = false;
		} else {
			video.style.height = "auto";
			btn_enable_disable.className = "btn btn-danger";
			btn_enable_disable.innerHTML = "desabilitar vídeo";
			flag = true;
		}
	}
	
	sum_introducao.onclick = function() {
		video.currentTime = 1; 
	}
	sum_campo.onclick = function() {
		video.currentTime = 60; 
	}
	sum_marcando.onclick = function() {
		video.currentTime = 126; 
	}
	sum_atacando.onclick = function() {
		video.currentTime = 251; 
	}
	sum_turnovers.onclick = function() {
		video.currentTime = 418; 
	}
	sum_scrimmage.onclick = function() {
		video.currentTime = 506; 
	}
	sum_snap.onclick = function() {
		video.currentTime = 534; 
	}
	sum_quarterback.onclick = function() {
		video.currentTime = 559; 
	}
	sum_times.onclick = function() {
		video.currentTime = 620; 
	}
	sum_tempo.onclick = function() {
		video.currentTime = 691; 
	}
	sum_superbowl.onclick = function() {
		video.currentTime = 764; 
	}
	sum_conclusao.onclick = function() {
		video.currentTime = 854; 
	}
};


function getHttpResponseText(url){
    var xhttp = new XMLHttpRequest();
 	xhttp.open('GET', url, true);

    xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        	var result = "PARCIAL DA VOTAÇÃO\n";
			alert(result.concat(this.responseText));
        }
    };
    xhttp.send();
}

function close(){
	document.getElementById("enquete").style.visibility = "hidden";
}