let httpRequest
function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    httpRequest.onreadystatechange = handleRequestContent;
    httpRequest.open('GET', 'http://www.example.org/some.file', true); // 第三个决定是否异步
    httpRequest.send();
}

function handleRequestContent() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
        } else {
            alert(`There was a problem with the request.${httpRequest.responseText}`);
        }
    }
}
