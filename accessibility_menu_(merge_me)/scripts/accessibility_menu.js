$(document).ready(function () {

    $(".accessibility_button").click(function () {
        //toggles whether menu is visible or not upon clicking hamburger button
        var option_display_value = $(".option").css("display");
        $(".option").css({ 'display': (option_display_value == 'none' ? 'initial' : 'none') });
    });

    //clicking outside of div hides the accessibility menu
    $(document).click(function () {
        $(".option").css({ 'display': 'none' });
    });

    //increase font size
    $("#increase_font_size").click(function () {
        document.getElementById("text").style.fontSize = "larger";

    });

    //decrease font size
    $("#decrease_font_size").click(function () {
        document.getElementById("text").style.fontSize = "smaller";
    });

    //revert to initial font size
    $("#medium_font_size").click(function () {
        document.getElementById("text").style.fontSize = "initial";
    });

    //change to font 1-arial
    $("#font1").click(function () {
        document.getElementById("text").style.fontFamily = "Arial";
    });

    //change to font 2-times new roman
    $("#font2").click(function () {
        document.getElementById("text").style.fontFamily = "Times New Roman";
    });


    function changeContrast(backgroundColor, textColor){
        $('#text').css('color', textColor);
        $('body').css('background-color', backgroundColor);
        $('.question').css('color', textColor);
        $('.a-select-text').css('color', textColor);
        $('.back_forward_btn_text').css('color', textColor);
    }
    //change to dark theme
    $('#dark').click(function() {
        changeContrast('black', 'white');
    });
    
    //change to light theme
    $('#light').click(function() {
        changeContrast('white', '#383838');
    });
    
    //change to sepia theme
    $('#sepia').click(function() {
        changeContrast('#F4ECD8', '#685444');
    });
     

    //clicking in the elements of the menu does not hide the accessibility menu
    $(".option").click(function (e) {
        e.stopPropagation();
        return false;
    });

    //clicking the accessibility button does not automatically the accessibility menu
    $(".accessibility_button").click(function (e) {
        e.stopPropagation();
        return false;
    });
});


