// let userToken = localStorage.getItem("token");

// can do function to calculate total notes and then total pgse needed and input into url below
// using these `` and variable naames using ${pageNumber}/ ${limit}
const GETNOTES = 'https://robert-note.herokuapp.com/api/v1/notes/mine?page=1&limit=30';
  
function iterate(item) {
  // console.log(item);
  document.getElementById("notes").innerHTML += 
  '<div class="note"><div class="text" id="textno' + item.id + '">' + item.text + '</div><div><button class="edit nocolor" type="button" id="editno' + item.id + '" onclick="editmode(this)" data-value="' + item.id + '"> Edit ' + item.id + '</button><button class="delete" type="button" id="delno' + item.id + '" onclick="deletethis(this);" data-value="' + item.id + '"> DELETE ' + item.id + '</button><span class="createdAt">' + item.created_at + '</span></div></div>';
}

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
