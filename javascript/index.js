// Hamburger toggle
// function navToggleIcon(x) {
//   x.classList.toggle("nav-toggle-icon-open");
// }

// Get the modal
var registerModal = document.getElementById('registerModal');
var loginModal = document.getElementById('loginModal');
var registerModalButton = document.getElementById('registerModalButton')
var loginModalButton = document.getElementById('loginModalButton')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == this.registerModal) {
  registerModal.style.display = "none";
}
if (event.target == this.loginModal) {
  this.loginModal.style.display = "none";
}
}

// Display register modal
registerModalButton.onclick = function() {
registerModal.style.display = "block";
}

// Display login modal
loginModalButton.onclick = function() {
loginModal.style.display = "block";
}

// x to close modal
function closeModal(x) {
x.style.display = 'none';
}

// Register cancel button to close modal
registerFormCancel.onclick = function() {
registerModal.style.display = "none";
}

// Pressing ESC key closes modal
window.addEventListener('keydown', function (event) {
if (event.key === 'Escape') {
  loginModal.style.display = 'none';
  registerModal.style.display = 'none';
}
});