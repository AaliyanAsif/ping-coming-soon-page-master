var input = document.getElementById("mail");
var button = document.getElementById("btn");

var text = document.querySelector(".error-p");

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    input.classList.remove("error");
    text.innerHTML = "";
    return true;
  }

  input.classList.add("error");
  text.innerHTML = "Please provide a valid email address ";
  //   alert("You have entered an invalid email address!");
  return false;
}
