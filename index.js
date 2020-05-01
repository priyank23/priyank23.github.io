function set_height_width() { 
    
    var elmnt = document.getElementsByClassName("container")[0];
    var leftMargin = ($(window).width() - 500)/2;
    var RightMargin = ($(window).width() - 500)/2;
    
    if(leftMargin<=0) {
        elmnt.style.width = "80%";
        elmnt.style.marginLeft = "10%";
        elmnt.style.marginRight = "10%";
    }
    else { 
        elmnt.style.width = "500px";
        elmnt.style.marginLeft = leftMargin.toString(10)+"px" ;
        elmnt.style.marginRight = RightMargin.toString(10)+"px" ;
    }

    var topPadding = ($(window).height() - 316)/2;

    if(topPadding >0) {
        elmnt.style.height = "316px";
        elmnt.style.paddingTop = topPadding.toString(10)+"px";
        elmnt.style.paddingBottom = topPadding.toString(10)+"px";
    }
    else {
        elmnt.style.height = "auto";
        elmnt.style.paddingTop = "20%";
    }
    $('body').height($(window).height());
}

$(document).ready(function() {
    $(window).bind('resize', set_height_width);
    set_height_width();
});

document.onkeydown = function(event) {
    if(event.keyCode == 65) {   
        console.log("about Page Clicked");
        document.getElementById('about').click();
    }
    if(event.keyCode == 66) {
        console.log("Blog Page Clicked");
        document.getElementById('blog').click();
    }
    if(event.keyCode == 67) {
        console.log("Contact Page Clicked");
        document.getElementById('Contact').click();
    }
    if(event.keyCode == 72) {
        console.log("Home Page Clicked");
        window.location.hash = '';
    }
    if(event.keyCode == 82) {
        console.log("Resume Page Clicked");
        document.getElementById('cv').click();
    }
}