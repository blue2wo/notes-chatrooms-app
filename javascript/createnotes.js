document.getElementById("addNote").addEventListener("click", createNote);
document.getElementById("allNotes").addEventListener("click", backToAllNotes);
document.getElementById("done").addEventListener("click", submitNote);
// document.getElementById("deleteNotes").addEventListener("click", deleteMode);

const SUBMITNOTEURL = 'https://robert-note.herokuapp.com/api/v1/notes';

function createAndSend() {
  submitNote();
  reloadNotes();
};

function submitNote() {
  let noteData = document.getElementById('noteText');
  let textOfNote = {
    text: noteData.value,
  };
  
  let userToken = localStorage.getItem("token");

  fetch(SUBMITNOTEURL, {
    method: 'POST',
    body: JSON.stringify(textOfNote),
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(response => response.json)
  .then((data) => {
    console.log('Success:', JSON.stringify(data));
    backToAllNotes();
    })
  .catch((error) => {
    console.error('Error:', error);
  });
};

function createNote() {
  // alert("YOU CLICKED ME!");
  showHide(["#notePad", "#allNotes", "#done"], ["#notes", "#addNote", "#deleteNotes", "#editNotes", "#submitEdit"]);
};

function backToAllNotes() {
  // alert("YOU CLICKED ME!");
  showHide(["#addNote", "#deleteNotes", "#notes", "#editNotes"], ["#allNotes", "#notePad", "#done", ".delete", "#submitEdit"]);
  $("textarea").val("");
  notes.innerHTML = '';
  reloadNotes();
  // reloadNotes needs to be in this function and not in createAndSend so the DELETE fetch has access to it
};

function openNotePad() {
  // alert("YOU CLICKED ME!");
  showHide(["#notePad", "#allNotes", "#done"], ["#notes", "#addNote", "#deleteNotes", "#editNotes", "#submitEdit" ]);
};

// function deleteMode() {
//   showHide(["#allNotes", ".delete"],[this]);
// };

function showHide(array1, array2) {
  for(i=0; i<array1.length; i++){
      $(array1[i]).show();   
  }
  for(i=0; i<array2.length; i++){
      $(array2[i]).hide();   
  }
};

function reloadNotes() {
  const GETNOTES = 'https://robert-note.herokuapp.com/api/v1/notes/mine?page=1&limit=30';

  fetch(GETNOTES, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(response => response.json())
  .then((html) => {
    html.forEach(iterate);
  })
  .catch(error => console.error('Error:', error));
};








