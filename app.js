// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



//   --media--     //


function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }



  // ---------Watchlist----------- //
  function toggleMenu() {
    var menu = document.getElementById("myMenu");
    if (menu.style.display === "none") {
      menu.style.display = "block"; 
    } else {
      menu.style.display = "none"; 
    }
  }