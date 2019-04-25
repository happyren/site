var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
}

function checkPassword(userElem) {
    var xhr = new XMLHttpRequest()
    xhr.onload = function() {
      var jsonresp = JSON.parse(xhr.response);
      document.getElementById('password-strength-meter').value = jsonresp.score;
      if(jsonresp.message) {
        document.getElementById('password-strength-text').innerHTML = "Strength: " +  "<strong>" + strength[jsonresp.score] + "</strong>" + " <span class='feedback'>" + jsonresp.message + "</span>"; 
      }
      else {
          text.innerHTML = "";
      }
    }
    xhr.open("POST", "/password");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    if(userElem.value)
      xhr.send(JSON.stringify({
        "password": userElem.value
      }));
    return false;
  }