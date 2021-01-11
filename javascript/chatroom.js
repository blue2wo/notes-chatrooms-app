// // Used to scroll to bottom of div at interval t oshow new messages
// let didScroll = false;
// let element = document.getElementById("chat");
// element.onscroll = () => didScroll = true;

// setInterval(() => {
//     if ( !didScroll ) {
//         if( element.scrollTop != element.scrollHeight) {
//         element.scrollTop = element.scrollHeight;
//       }
//     }
//     didScroll = false;
// }, 3000);