window.onscroll = function() {
	scrollFunction();
}

function scrollFunction() {
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		document.getElementById("topBtn").style.display = "block";
		document.getElementById("topBtn").style.animation = "fadeIn ease-in 1";
		document.getElementById("topBtn").style.animationDuration = "0.5s";
		document.getElementById("topBtn").style.animationFillMode = "forwards";


	} else {
		document.getElementById("topBtn").style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
