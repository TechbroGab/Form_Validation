const form = document.getElementById("form")
const password =  document.getElementById("password")
const conPassword = document.getElementById("conPassword")
var error = document.getElementById("error")
var error2 = document.getElementById("error2")

password.addEventListener("input", (event) => {
  if (password.validity.tooShort) {
    password.setCustomValidity("password is weak");
  } else {
    password.setCustomValidity("");
  }
});


conPassword.addEventListener("input", function fail() {
    if (conPassword.value !== password.value) {
        conPassword.setCustomValidity(`password doesn't match`);
    } else {
        conPassword.setCustomValidity("");
    }
})


password.addEventListener("input", (passCheck) => {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/;
    if(password.value.match(regularExpression)) {
        password.setCustomValidity("");
    } else {
        password.setCustomValidity("password must include UPPERCASE, lowercase, special character and numbers");
    }
})



password.addEventListener("input", function passUnder() {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/;
    if(password.value.match(regularExpression)) {
       error.innerText = errMess("")
    } else {
        error.innerText = errMess("password must include UPPERCASE, lowercase, special character and numbers")
    }
})

conPassword.addEventListener("input", function passUnder2() {
    if(conPassword.value !== password.value) {
        error2.innerText = errMess("Password doesn't match")
    } else {
        error2.innerText = errMess("")
    }
})

function errMess(message){
    return message
}