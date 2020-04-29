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
    getPage('./about-partial.html','aboutPage');
}

function getBlogPage() {
    getPage('./blog-partial.html','BlogPage');
}