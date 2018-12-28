$(document).ready(function() {
  var audioOn = true;
	$("#read-icon").click(function() {
    if (audioOn) {
      $("#read-on").addClass("hidden");
      $("#read-off").removeClass("hidden");
      audioOn = false;
    } else {
      $("#read-off").addClass("hidden");
      $("#read-on").removeClass("hidden");
      audioOn = true;
    }
	});
});
