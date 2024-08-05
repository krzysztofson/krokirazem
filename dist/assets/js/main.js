const navBtn = document.querySelector(".js-nav-btn");
const nav = document.querySelector(".js-nav");

function togglenav() {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
}

if (navBtn) {
  navBtn.addEventListener("click", togglenav);
}

const contactBtns = document.querySelectorAll(".js-contact-btn");
const modal = document.querySelector(".js-modal");
const modalBg = document.querySelector(".js-modal-bg");
const modalClose = document.querySelector(".js-modal-close-btn");
const mobileNavBtns = document.querySelectorAll(".js-nav a");

function toggleModal() {
  modal.classList.toggle("flex");
  modal.classList.toggle("hidden");
}

if (contactBtns) {
  contactBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });
}

if (modalBg && modalClose) {
  modalBg.addEventListener("click", toggleModal);
  modalClose.addEventListener("click", toggleModal);
}

if (mobileNavBtns) {
  mobileNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      nav.classList.add("hidden");
    });
  });
}

const year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-X21JSWX0D1");
