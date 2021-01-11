document.getElementById("allChatrooms").addEventListener("click", backToAllChatrooms);

function joinChatroom(selectedChatroomId) {
  showHide(["#allChatrooms", "#submitChatMessege", "#chatSending", "#chatroomNumberContainer", "#chat"], ["#createChatroom", "#chatrooms", "#submitChatroom", "#chatroomCreator"]);

  let roomNumber = document.getElementById("chatroomNumber").innerHTML;

  // Used to create HTML forEach fetched message from api
  function iterate(item) {
    document.getElementById("chat").innerHTML +=
    '<div class="message"><span id="messageUserId">' + item.user_id + '</span>: ' + item.text + '</div>';
  }
  
  fetch(`https://robert-note.herokuapp.com/api/v1/chatrooms/${roomNumber}/messages?page=1&limit=50`, {
  method: 'GET',
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${userToken}`
  }
  })
  .then(response => response.json())
  .then((html) => {
    chat.innerHTML = "";
    html.forEach(iterate);
    // element.scrollTop = element.scrollHeight; // sets scroll bottom (most recent) message
  })
  .catch(error => console.error('Error:', error));
};

// Used to refresh chat without reloading page by calling fetch GET function
// This solution is not good for user
// This is just temporary while I try to understand how to implement async await 

var refreshChatroomInterval = null;
function refreshChatroom(selectedChatroomId) {
  let roomNumber = ($(selectedChatroomId).data('value'));
  document.getElementById('chatroomNumberContainer').innerHTML += `Chatroom: <span id="chatroomNumber">` + roomNumber + '</span>';
  refreshChatroomInterval = setInterval("joinChatroom(this)", 1000);
}


function backToAllChatrooms() {
  clearInterval(refreshChatroomInterval);
  document.getElementById('chatroomNumberContainer').innerHTML = '';
  document.getElementById('otherUser').value = '';
  $("div.message").remove(); // Removes all messages from HTML
  showHide(["#chatrooms", "#createChatroom",], ["#allChatrooms", "#submitChatMessege", "#chatSending", "#chatroomNumberContainer", "#chat", "#submitChatroom", "#chatroomCreator"]);
};

// Used to scroll to bottom of div at interval t oshow new messages
let didScroll = false;
let element = document.getElementById("chat");
element.onscroll = () => didScroll = true;

setInterval(() => {
    if ( !didScroll ) {
        if( element.scrollTop != element.scrollHeight) {
        element.scrollTop = element.scrollHeight;
      }
    }
    didScroll = false;
}, 5000);




