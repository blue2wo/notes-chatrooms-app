

// Sign up code
const REGISTERFORM = document.getElementById('registerform');

REGISTERFORM.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for registering"); 
  
  const REGURL = 'https://robert-note.herokuapp.com/api/v1/users/sign_up';
  let nameSent = document.getElementById('username');
  let passwordSent = document.getElementById('password');
  let password2Sent = document.getElementById('password2');

  let user = {
    name: nameSent.value,
    password: passwordSent.value,
    password_confirmation: password2Sent.value,
  };

  fetch(REGURL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log('Success:', JSON.stringify(data)))
  .then(json => localStorage.setItem("token", json.token))
  .catch(error => console.error('Error:', error));

});



  // .then(res => res.json())
  // .then(response => console.log('Success:', JSON.stringify(response)))
  // .then(json => localStorage.setItem("token", json.token))
  // .catch(error => console.error('Error:', error));






    