$(document).ready(function() {

    $(".accessibility_button").click(function() {
        //toggles whether menu is visible or not upon clicking hamburger button
        var option_display_value = $(".option").css("display");
        $(".option").css({'display':(option_display_value == 'none' ? 'initial': 'none')});
    });

    //clicking outside of div hides the accessibility menu
    $(document).click(function() {
        $(".option").css({'display': 'none'});
    });

    //clicking in the elements of the menu does not hide the accessibility menu
    $(".option").click(function(e) {
        e.stopPropagation(); 
        return false;        
    });

    //clicking the accessibility button does not automatically the accessibility menu
    $(".accessibility_button").click(function(e) {
        e.stopPropagation(); 
        return false;        
    });
  });
  