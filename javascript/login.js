// Login code
const LOGINFORM = document.getElementById('loginform');

LOGINFORM.addEventListener('submit', function (e) {
  e.preventDefault();
  // alert("Thank you for logging in"); 
  
  const REGURL = 'https://robert-note.herokuapp.com/api/v1/users/sign_in';
  let nameSent = document.getElementById('loginusername');
  let passwordSent = document.getElementById('loginpassword');

  let user = {
    name: nameSent.value,
    password: passwordSent.value,
  };

  fetch(REGURL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then((json) => {
    localStorage.setItem("token", json.token); 
    localStorage.setItem("user_name", json.user_name); 
    localStorage.setItem("user_id", json.user_id); 
    var test = localStorage.getItem("token");
    console.log(test);
    window.location.href = "mainpageloggedin.html";
  })
  
  .catch((error) => {
    console.error('Error:', error);
  });
  
});
