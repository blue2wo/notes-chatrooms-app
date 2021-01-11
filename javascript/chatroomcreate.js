document.getElementById("createChatroom").addEventListener("click", openChatroomCreator);
document.getElementById("submitChatroom").addEventListener("click", createChatroom);

function openChatroomCreator() {
  showHide(["#allChatrooms", "#submitChatroom", "#chatroomCreator"], ["#submitChatMessege", "#chatroomNumberContainer", "#chatSending", "#chatrooms", "#chat"]);
}

function createChatroom() {
  let userToken = localStorage.getItem("token");
  let userToChatWith = document.getElementById('otherUser').value;
  let userToChatWithData = {
    with_user_id: userToChatWith,
  }

  fetch(`https://robert-note.herokuapp.com/api/v1/chatrooms`, {
    method: 'POST',
    body: JSON.stringify(userToChatWithData),
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(response => response.json)
  .then((data) => {
    $("textarea").val("");
    backToAllChatrooms();
    getChatRooms();
    console.log('Success:', JSON.stringify(data));
    })
  .catch((error) => {
    console.error('Error:', error);
  });
}