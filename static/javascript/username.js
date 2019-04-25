function checkUsername(userElem) {
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
        var jsonresp = JSON.parse(xhr.response);
        if (jsonresp.exists) {
            document.getElementById("usercheck").innerHTML = "&#10062;"
        } else {
            document.getElementById("usercheck").innerHTML = "&#9989;"
        }
    }
    xhr.open("POST", "/username");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({
        "username": userElem.value
    }));
    return false;
}