// let userToken = localStorage.getItem("token");

function getChatRooms() {
  fetch(`https://robert-note.herokuapp.com/api/v1/chatrooms?page=1&limit=50`, {
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
    console.log(html);
  })
  .catch(error => console.error('Error:', error));

  function iterate(item) {
    document.getElementById("chatrooms").innerHTML +=
    '<div class="chatroom"><div class="chatroomDetails"><div class="chatroomId">Chatroom ' + item.id + '</div></div><div class="chatroomDetails"><button class="joinChatroom" type="button" id="" onclick="refreshChatroom(this)" data-value="' + item.id + '">Join</button><span class="createdAt">Created: ' + item.created_at + '</span><div class="betweenUsers">Between users: ' + item.user_id + ' and ' + item.with_user_id + '</div></div></div>';
  }
}

getChatRooms();



       