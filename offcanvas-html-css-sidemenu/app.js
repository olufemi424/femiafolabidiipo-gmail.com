const navTrigger = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");
const contentEl = document.querySelector(".content");
const hamburgerBarEl = document.getElementsByTagName("span");

toggleNav = () => {
  navTrigger.addEventListener("click", () => {
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    animateHamburgers();
  });
};

animateHamburgers = () => {
  for (let item of hamburgerBarEl) {
    item.classList.toggle("change");
  }
};
toggleNav();
