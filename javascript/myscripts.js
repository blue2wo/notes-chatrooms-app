// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the Hamburger icon
function navToggleLeft() {
  var x = document.getElementById("navbar-list-left");
  if (x.className === "navbar-list to-right") {
    x.className += " responsive";
  } else {
    x.className = "navbar-list to-right";
  }
}

function navToggleRight() {
  var x = document.getElementById("navbar-list-right");
  if (x.className === "navbar-list to-left") {
    x.className += " responsive";
  } else {
    x.className = "navbar-list to-left";
  }
}

function navToggleIcon(x) {
  x.classList.toggle("nav-toggle-icon-open");
} 

// used to show and hide HTML elements
function showHide(array1, array2) {
  for(i=0; i<array1.length; i++){
      $(array1[i]).show();   
  }
  for(i=0; i<array2.length; i++){
      $(array2[i]).hide();   
  }
};

// Used to show USERNAME and ID in NAV
let usernameStorage = localStorage.getItem("user_name");
let userIdStorage = localStorage.getItem("user_id");
let usernameString = document.getElementById('usernameString');
let userIdNumber = document.getElementById('userIdNumber');

usernameString.innerHTML += usernameStorage;
userIdNumber.innerHTML += userIdStorage;



