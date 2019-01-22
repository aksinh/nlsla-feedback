

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


  // $('.pt-page-1').mouseenter(function(){
  //   window.speechSynthesis.cancel();
  //   var msg = new SpeechSynthesisUtterance($('.pt-page-1').text());
  //   if (audioOn) {
  //     msg.volume = 1;
  //   } else {
  //     msg.volume = 0;
  //   }
  //   window.speechSynthesis.speak(msg);
  // })
  // $('.pt-page-2').mouseenter(function(){
  //   window.speechSynthesis.cancel();
  //   var msg = new SpeechSynthesisUtterance($('.pt-page-2').text());
  //   if (audioOn) {
  //     msg.volume = 1;
  //   } else {
  //     msg.volume = 0;
  //   }
  //   window.speechSynthesis.speak(msg);
  // })
  // $('.pt-page-3').mouseenter(function(){
  //   window.speechSynthesis.cancel();
  //   var msg = new SpeechSynthesisUtterance($('.pt-page-3').text());
  //   if (audioOn) {
  //     msg.volume = 1;
  //   } else {
  //     msg.volume = 0;
  //   }
  //   window.speechSynthesis.speak(msg);
  // })
  // $('.pt-page-4').mouseenter(function(){
  //   window.speechSynthesis.cancel();
  //   var msg = new SpeechSynthesisUtterance($('.pt-page-4').text());
  //   if (audioOn) {
  //     msg.volume = 1;
  //   } else {
  //     msg.volume = 0;
  //   }
  //   window.speechSynthesis.speak(msg);
  // })
  // $('.pt-page-5').mouseenter(function(){
  //   window.speechSynthesis.cancel();
  //   var msg = new SpeechSynthesisUtterance($('.pt-page-5').text());
  //   if (audioOn) {
  //     msg.volume = 1;
  //   } else {
  //     msg.volume = 0;
  //   }
  //   window.speechSynthesis.speak(msg);
  // })


});
