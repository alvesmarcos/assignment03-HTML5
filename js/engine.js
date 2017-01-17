var image;
var idvideo = "#video";

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
		end: 123,
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
		start: 123,
		end: 249,
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
		start: 249,
		end: 416,
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
		start: 416,
		end: 503,
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
		start: 503,
		end: 531,
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
		start: 531,
		end: 557,
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
		start: 557,
		end: 617,
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
		start: 617,
		end: 687,
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
		start: 687,
		end: 762,
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
		start: 762,
		end: 854,
		onStart: function( options ) {
				    image.src = "res/superbowl.png"
				    sum_superbowl.style.color = "#aa00ff"
				},
		onEnd: function( options ) {
				    sum_superbowl.style.color = "424242"
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
};


