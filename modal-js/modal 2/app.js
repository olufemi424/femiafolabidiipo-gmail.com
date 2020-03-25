const modalTrigger = document.querySelector(".trigger");
const btnClose = document.querySelector(".close");
const modal = document.querySelector(".modal");

modalTrigger.addEventListener(
  "click",
  (trigger = () => {
    modal.style.display = "block";
  })
);

btnClose.addEventListener(
  "click",
  (trigger = () => {
    modal.style.display = "none";
  })
);

window.addEventListener(
  "click",
  (outsideClick = e => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  })
);
