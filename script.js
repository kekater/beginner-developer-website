// script.js
function loadContent(section) {
    var contentContainer = document.getElementById('content-container');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', section + '-content.html', true);  

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentContainer.innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}
