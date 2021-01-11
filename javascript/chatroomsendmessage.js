document.getElementById("submitChatMessege").addEventListener("click", sendMessage);

function sendMessage() {
  let chatId = document.getElementById('chatroomNumber').innerText;
  console.log(chatId);

  let messageData = document.getElementById('chatroomText');
  let textOfMessage = {
    text: messageData.value,
  };


  fetch(`https://robert-note.herokuapp.com/api/v1/chatrooms/${chatId}/messages`, {
    method: 'POST',
    body: JSON.stringify(textOfMessage),
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(response => response.json)
  .then((data) => {
    $("textarea").val("");
    console.log('Success:', JSON.stringify(data));
    })
  .catch((error) => {
    console.error('Error:', error);
  });
}


