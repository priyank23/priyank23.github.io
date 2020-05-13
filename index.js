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

    var topPadding = (0.8*$(window).height() - 316)/2;

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

window.onhashchange = function(){
    var page = window.location.hash;
    console.log(page.substring(1,page.length-5));
    if(page== '#' || page == '') {
        this.homeClicked();
    }
    else {
        document.getElementById(page.substring(1,page.length-5)).click();
    }
}

window.onload = function() {
    window.location.hash = '';
}

document.getElementById('about').addEventListener("click", function(){
    var cnts= document.getElementsByClassName('outer-container');
    for(var i=0;i<cnts.length;i++) {
        if(window.getComputedStyle(cnts[i]).display === 'block') cnts[i].style.display= 'none';
    }
    document.getElementById('about-Page').style.display = "block";
});

document.getElementById('blog').addEventListener("click", function(){
    var cnts= document.getElementsByClassName('outer-container');
    for(var i=0;i<cnts.length;i++) {
        if(window.getComputedStyle(cnts[i]).display === 'block') cnts[i].style.display= 'none';
    }
    document.getElementById('blog-Page').style.display = "block";
});

document.getElementById('Project').addEventListener("click", function(){
    var cnts= document.getElementsByClassName('outer-container');
    for(var i=0;i<cnts.length;i++) {
        if(window.getComputedStyle(cnts[i]).display === 'block') cnts[i].style.display= 'none';
    }
    document.getElementById('Project-Page').style.display = "block";
});

function homeClicked() {
    var cnts= document.getElementsByClassName('outer-container');
    for(var i=0;i<cnts.length;i++) {
        if(window.getComputedStyle(cnts[i]).display === 'block') cnts[i].style.display= 'none';
    }
    document.getElementById('home').style.display = "block";
}

document.onkeydown = function(event) {
    if(event.keyCode == 65 && !event.ctrlKey) {   
        console.log("about Page Clicked");
        document.getElementById('about').click();
    }
    if(event.keyCode == 66 && !event.ctrlKey) {
        console.log("Blog Page Clicked");
        document.getElementById('blog').click();
    }
    if(event.keyCode == 80 && !event.ctrlKey) {
        console.log("Contact Page Clicked");
        document.getElementById('Project').click();
    }
    if(event.keyCode == 72 && !event.ctrlKey) {
        console.log("Home Page Clicked");
        window.location.hash = '';
        homeClicked();
    }
    if(event.keyCode == 82 && !event.ctrlKey) {
        console.log("Resume Page Clicked");
        document.getElementById('CV').click();
    }
}

function myFunction() {
    console.log("width-shortened");
    var x = document.getElementById("top-bar");
    if (x.className === "contact-bar") {
      x.className += " responsive";
    } else {
      x.className = "contact-bar";
    }
}
function openContactBarAbout() {
    var x = document.getElementById("bottomAbout");
    if (x.className === "contact-bar") {
      x.className += " responsive";
    } else {
      x.className = "contact-bar";
    }
}

function openContactBarProjects() {
    x = document.getElementById("bottomProjects");
    if (x.className === "contact-bar") {
      x.className += " responsive";
    } else {
      x.className = "contact-bar";
    }
}

function backClicked() {
    window.history.back();
}