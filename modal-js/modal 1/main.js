//Get the modal elements

var modal = document.querySelector(".modal");
var modalBtn = document.querySelector("#modalbtn");
var closeBtn = document.querySelector(".closeBtn");

//listen for a click
modalBtn.addEventListener("click", openModal);

// listen for close click
closeBtn.addEventListener("click", closeModal);

///listen for outside click on window
window.addEventListener("click", outsideClick);

//function open modal
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
