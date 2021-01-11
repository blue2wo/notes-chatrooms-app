document.getElementById("logoutButton").addEventListener("click", logoutTokenDestroy);
let userToken = localStorage.getItem("token");

function logoutTokenDestroy() {
  console.log(userToken);
  console.log('test');
  userToken = localStorage.setItem("token", '');
  console.log(userToken);
  console.log('test');
  window.location.href = "index.html";
}

  
if(userToken == '') {
  window.location.href = "index.html";
}

