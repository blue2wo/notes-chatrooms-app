// var conn = new WebSocket("wss://@robert-note.herokuapp.com/cable?id=3", ["access_token", "bQoFar6eEmnWYwgHDltHWAtt"]);
var conn = new WebSocket("wss://@robert-note.herokuapp.com/cable?id=3");
conn.onopen = function (event) {
  let getToken = {
    "access_token": "bQoFar6eEmnWYwgHDltHWAtt",
  }
  conn.send("hello");
  console.log('connected');
  conn.send(getToken);
};

conn.onclose = () => {
  console.error('disconnected');
};

conn.onerror = (error) => {
  console.error('failed to connect', error);
};

conn.onmessage = (event) => {
  console.log('received', event.data);
  let li = document.createElement('div');
  li.innerText = event.data;
  document.querySelector('#chat').append(li);
};

