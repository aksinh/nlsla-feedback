$(document).ready(function() {
    //BRYANTS TODO LIST:
    //TODO: check over other JS and make JS as light as possible- less JS the better! (NLSLA said audience might have poor internet connection)
    //TODO: make html tabbable
    //TODO: test rendering of website in all browsers (including all versions of IE 10 &+)
    //TODO: make sure mobile version is accessibile- especially for iPad/ mobile Safari!!!!!!!!

    //General TODO: is there a better way to select all text elements rather than listing them all?

//**Change contrast of background**//
//TODO: is there a better way than looping through all id's?
function changeFontSize(id, isIncreased){
  var el = document.getElementById(id);
  var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  el.style.fontSize = (fontSize + (isIncreased ? 1 : -1)) + 'px';
}

$('.increaseFSize').click(function() {
  changeFontSize('foo', true);
  changeFontSize('p2', true);
  changeFontSize('p1', true);
  changeFontSize('header2', true);
});
$('.decreaseFSize').click(function() {
   changeFontSize('foo', false);
   changeFontSize('p2', false);
   changeFontSize('p1', false);
   changeFontSize('header2', false);
});


//**Change contrast of background**//
function changeContrast(backgroundColor, textColor){
  $('body').css('background-color', backgroundColor);
  $('p').css('color', textColor);
  $('h1').css('color', textColor);
  $('h2').css('color', textColor);
}

 $('.blackBack_WhiteText').click(function() {
   changeContrast('black', 'white');

 });

 $('.whiteBack_BlackText').click(function() {
   changeContrast('white', '#383838');
 });

 $('.sepiaBack_BrownText').click(function() {
   changeContrast('#F4ECD8', '#685444');
 });

//**Change font-style**//
 $('.sansseriffButton').click(function() {
   $('h1').css('font-family', 'sans-serif');
   $('h2').css('font-family', 'sans-serif');
   $('p').css('font-family', 'sans-serif');
 });
 $('.seriffButton').click(function() {
   $('h1').css('font-family', 'serif');
   $('h2').css('font-family', 'serif');
   $('p').css('font-family', 'serif');
 });

//**Change line-heights**//
function changeLineHeight(id, isIncreased){
  var el = document.getElementById(id);
  var style = window.getComputedStyle(el, null).getPropertyValue('line-height');
  var fontSize = parseFloat(style);
  el.style.lineHeight = (fontSize + (isIncreased ? 1 : -1)) + 'px';
}
$('.lineHeightUp').click(function() {
  changeLineHeight('foo', true);
  changeLineHeight('p2', true);
  changeLineHeight('p1', true);
  changeLineHeight('header2', true);
});

$('.lineHeightDown').click(function() {
  changeLineHeight('foo', false);
  changeLineHeight('p2', false);
  changeLineHeight('p1', false);
  changeLineHeight('header2', false);
});



});
