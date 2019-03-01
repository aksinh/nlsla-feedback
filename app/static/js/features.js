$(document).ready(function() {
    //BRYANTS TODO LIST:
    //TODO: make html tabbable
    //TODO: test rendering of website in all browsers (including all versions of IE 10 &+)
    //TODO: make sure mobile version is accessibile- especially for iPad/ mobile Safari!!!!!!!!

//**Change font size**//
var fontLevel = 0;
$('.increaseFontSize').click(function() {
  if (fontLevel >= 0 && fontLevel < 10){
    fontLevel += 1;
    updateFontSizes();
  }
});

$('.decreaseFontSize').click(function() {
  if (fontLevel > 0 && fontLevel <= 10){
    fontLevel -= 1;
    updateFontSizes();
  }
});

function updateFontSizes(){
  $('.question').css('font-size', parseFloat(fontLevel) + 28 + 'px');
  $('.a-select-text').css('font-size', parseFloat(fontLevel) + 11 + 'px');
  $('.back_forward_btn_text').css('font-size', parseFloat(fontLevel) + 11 + 'px');
}

//**Change contrast of background**//
function changeContrast(backgroundColor, textColor){
  $('body').css('background-color', backgroundColor);
  $('.question').css('color', textColor);
  $('.a-select-text').css('color', textColor);
  $('.back_forward_btn_text').css('color', textColor);

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
