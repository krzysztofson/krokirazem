const navBtn = document.querySelector(".js-nav-btn");
const nav = document.querySelector(".js-nav");

function togglenav() {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
}

if (navBtn) {
  navBtn.addEventListener("click", togglenav);
}

window.addEventListener("load", () => {
  lightGallery(document.getElementById("lightgallery"), {
    getCaptionFromTitleOrAlt: true,
    thumbHeight: "60px",
  });
});

const contactBtns = document.querySelectorAll(".js-contact-btn");
const modal = document.querySelector(".js-modal");
const modalBg = document.querySelector(".js-modal-bg");
const modalClose = document.querySelector(".js-modal-close-btn");

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

const year = new Date().getFullYear();
document.querySelector("#year").textContent = year;
