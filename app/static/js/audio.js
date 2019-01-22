

$(document).ready(function() {

  var audioOn = true;
	$("#read-icon").click(function() {
    if (audioOn) {
      window.speechSynthesis.cancel();
      document.getElementById("read-on").innerHTML = "Off";
      var msg = new SpeechSynthesisUtterance("Off");
      audioOn = false;
      window.speechSynthesis.speak(msg);

    } else {
      window.speechSynthesis.cancel();
      document.getElementById("read-on").innerHTML = "On";
      var msg = new SpeechSynthesisUtterance("On");
      audioOn = true;
      window.speechSynthesis.speak(msg);

    }
	});

  $('.hasText').mouseenter(function(){
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance(this.textContent);
    if (audioOn) window.speechSynthesis.speak(msg);
    this.style.backgroundColor = "yellow";
  })

  $('.hasText').mouseleave(function(){
    this.style.backgroundColor = "transparent";

  })



});
