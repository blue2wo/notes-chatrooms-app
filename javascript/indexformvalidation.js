
function validateRegisterForm() {
  let u = document.forms["registerform"]["username"].value;
  let p1 = document.forms["registerform"]["password"].value;
  let p2 = document.forms["registerform"]["password2"].value;

  if (u == "") {
    // alert("Please enter a username");
    document.getElementById("registerMessage").innerHTML = "Please enter a username";
    return false;
  }
  if (p1 == "") {
    document.getElementById("registerMessage").innerHTML = "Please enter a password";
    return false;
  }
  if (p2 == "") {
    document.getElementById("registerMessage").innerHTML = "Please confirm your password";
    return false;
  }
  if (p1 !== p2) {
    document.getElementById("registerMessage").innerHTML = "Your passwords don't match";
    return false;
  }
}


function validateLoginForm() {
  let logu = document.forms["loginform"]["loginusername"].value;
  let logp1 = document.forms["loginform"]["loginpassword"].value;

  if (logu == "") {
    // alert("Please enter a username");
    document.getElementById("loginMessage").innerHTML = "Please enter your username";
    return false;
  }
  if (logp1 == "") {
    document.getElementById("loginMessage").innerHTML = "Please enter your password";
    return false;
  }
}