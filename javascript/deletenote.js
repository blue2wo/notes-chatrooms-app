
document.getElementById("allNotes").addEventListener("click", backToAllNotes);
document.getElementById("deleteNotes").addEventListener("click", deleteMode);

function deletethis(selectedNoteId) {
  // let DELETEURL = `https://robert-note.herokuapp.com/api/v1/notes/`;

  let param = ($(selectedNoteId).data('value'));
  var deleteButton = $(selectedNoteId);
  console.log(param);

  fetch(`https://robert-note.herokuapp.com/api/v1/notes/${param}`, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(response => response.json)
  .then((data) => {
    console.log('Success:', JSON.stringify(data));
    backToAllNotes();
    deleteButton.parent().remove();
    })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function deleteMode() {
  showHide(["#allNotes", ".delete"],[this, "#addNote", "#editNotes", ".edit"]);
};