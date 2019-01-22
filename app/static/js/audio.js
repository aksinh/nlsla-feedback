

$(document).ready(function() {

  var audioOn = true;
	$("#read-icon").click(function() {
    if (audioOn) {
      document.getElementById("read-on").innerHTML = "Off";
      audioOn = false;
      window.speechSynthesis.cancel();

    } else {
      document.getElementById("read-on").innerHTML = "On";
      audioOn = true;
      var msg = new SpeechSynthesisUtterance($('.pt-page-1').text());
      msg.volume = 1;
      window.speechSynthesis.speak(msg);

    }
	});


  $('.pt-page-1').mouseenter(function(){
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance($('.pt-page-1').text());
    if (audioOn) {
      msg.volume = 1;
    } else {
      msg.volume = 0;
    }
    window.speechSynthesis.speak(msg);
  })
  $('.pt-page-2').mouseenter(function(){
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance($('.pt-page-2').text());
    if (audioOn) {
      msg.volume = 1;
    } else {
      msg.volume = 0;
    }
    window.speechSynthesis.speak(msg);
  })
  $('.pt-page-3').mouseenter(function(){
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance($('.pt-page-3').text());
    if (audioOn) {
      msg.volume = 1;
    } else {
      msg.volume = 0;
    }
    window.speechSynthesis.speak(msg);
  })
  $('.pt-page-4').mouseenter(function(){
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance($('.pt-page-4').text());
    if (audioOn) {
      msg.volume = 1;
    } else {
      msg.volume = 0;
    }
    window.speechSynthesis.speak(msg);
  })
  $('.pt-page-5').mouseenter(function(){
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance($('.pt-page-5').text());
    if (audioOn) {
      msg.volume = 1;
    } else {
      msg.volume = 0;
    }
    window.speechSynthesis.speak(msg);
  })


});
