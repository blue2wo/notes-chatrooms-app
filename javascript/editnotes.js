document.getElementById('submitEdit').addEventListener("click", editNote);


function editmode(selectedNoteId) {
  // show notepad, all notes, done
  showHide(["#notePad", "#allNotes", "#submitEdit"], [ "#notes", "#addNote", "#deleteNotes", "#done"]);

  // var test = document.querySelector($(selectedNoteId));

  // console.log (selectedNoteId.target.innerHTML);
  let params = ($(selectedNoteId).data('value'));
  console.log(params);

  let words = document.getElementById(`textno${params}`).innerHTML;
  console.log(words);
  
  // show text of selected note in opened notepad
  $("#notepadheader").val(params)
  $("textarea").val(words);

  var el = document.querySelector('#notepadheader');
  el.setAttribute('data-value', `${params}`);

  // click finish to send fetch put query with edite note
};


function editNote() {
  let noteData = document.getElementById('noteText');
  let textOfNote = {
    text: noteData.value,
  };
  
  let userToken = localStorage.getItem("token");

  let to = ($(notepadheader).data('value'));

  fetch(`https://robert-note.herokuapp.com/api/v1/notes/${to}`, {
    method: 'PUT',
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