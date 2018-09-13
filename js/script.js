$(document).ready(function() {
	if ($(window).width() < 1024) {
		$("#open-modal").attr("href", "resume.pdf");
		$("#open-modal").attr("download", "Tiffany Wong - Resume");
	} else {
		// Modal - Resume
		var btn         = document.getElementById("open-modal");
		var modal       = document.getElementById("modal");
		var resume      = document.getElementById("resume");
		var caption     = document.getElementById("caption");
		var captionText = document.getElementById("captionText").innerHTML;

		btn.onclick = function(){
		    modal.style.display = "block";
		    resume.src = this.src;
		    caption.innerHTML = captionText;
		}

		var span = document.getElementsByClassName("close")[0];
		span.onclick = function() {
		  modal.style.display = "none";
		}

		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}
	}
});
