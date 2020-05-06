function getPage(contenturl, id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', contenturl, true);
    xhr.onload = function () {
        if (this.status == 200) {
            document.getElementById(id).innerHTML = this.responseText;
        }
        else {
            document.getElementById(id).innerHTML = '<p>' + this.status + ' Error' + '<p>';
        }
    }

    xhr.send();
}

function getAboutPage() {
    getPage('./about-partial.html','about-Page');
}

function getBlogPage() {
    getPage('./blog-partial.html','blog-Page');
}

function showStory() {
    var leftElement = document.getElementsByClassName('left');
    for(var i=0;i<leftElement.length;i++) {
        if(window.getComputedStyle(leftElement[i]).visibility === "hidden" ){
            leftElement[i].style.visibility='visible';
            leftElement[i].style.animation='transitionLeft 2s';
            leftElement[i].style.display = 'block';
        }
        else {
            leftElement[i].style.visibility='hidden';
            leftElement[i].style.animation='';
            leftElement[i].style.display = 'none';
        }
    }

    var rightElement = document.getElementsByClassName('right');
    for(var i=0;i<rightElement.length;i++) {
        if(window.getComputedStyle(rightElement[i]).visibility === "hidden" ){
            rightElement[i].style.visibility='visible';
            rightElement[i].style.animation='transitionRight 2s';
            rightElement[i].style.display = 'block';
        }
        else {
            rightElement[i].style.visibility='hidden';
            rightElement[i].style.animation='';
            rightElement[i].style.display='none';
        }
    }

    var footNote=document.getElementById('footNote');

    if(window.getComputedStyle(footNote).visibility === "hidden") footNote.style.visibility='visible';
    else footNote.style.visibility = 'hidden';
}