$(document).ready(function() {
    //BRYANTS TODO LIST:
    //TODO: check over other JS and make JS as light as possible- less JS the better! (NLSLA said audience might have poor internet connection)
    //TODO: make html tabbable
    //TODO: test rendering of website in all browsers (including all versions of IE 10 &+)
    //TODO: make sure mobile version is accessibile- especially for iPad/ mobile Safari!!!!!!!!

    //General TODO: is there a better way to select all text elements rather than listing them all?
    //TEST
  //FONT SIZES
 $('.increaseFSize').click(function() {
   //Test code to see if it works...
   //Implement dictionary that allows access to correpsonding things that was returned
   var pfontSize = $("p").css("fontSize");
   var h1fontSize = $("h1").css("fontSize");
   var h2fontSize = $("h2").css("fontSize");
   pfontSize += 5;
   h1fontSize += 5;
   h2fontSize += 5;
   $('p').css('font-size', fontSize);
   $('h1').css('font-size', fontSize);
   $('h2').css('font-size', fontSize);
 });
 $('.decreaseFSize').click(function() {
   var pfontSize = $("p").css("fontSize");
   var h1fontSize = $("h1").css("fontSize");
   var h2fontSize = $("h2").css("fontSize");
   pfontSize -= 5;
   h1fontSize -= 5;
   h2fontSize -= 5;
   $('p').css('font-size', fontSize);
   $('h1').css('font-size', fontSize);
   $('h2').css('font-size', fontSize);
 });

 $('.increaseContrast').click(function() {
  $('body').css('background-color', blue);
  $('p').css('background-color', yellow);
 });


 $('.sansseriffButton').click(function() {
  $('h1').css('font-family', 'sans-serif');
  $('p').css('font-family', 'sans-serif');
 });
 $('.seriffButton').click(function() {
   $('h1').css('font-family', 'serif');
   $('p').css('font-family', 'serif');
 });

//TODO: Add padding increase function



});
