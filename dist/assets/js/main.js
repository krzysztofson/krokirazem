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
      togglenav();
    });
  });
}

// const year = new Date().getFullYear();
// document.querySelector("#year").textContent = year;

// const navOffer = document.querySelector("#js-offer");
// if (navOffer) {
//   navOffer.addEventListener("mouseover", () => {
//     if (window.innerWidth > 1023) {
//       document.querySelector(".js-nav-list").classList.toggle("hidden");
//     }
//   });
//   navOffer.addEventListener("click", (e) => {
//     if (window.innerWidth <= 1023) {
//       e.preventDefault();
//       document.querySelector("#js-offer-mobile").classList.toggle("hidden");
//       togglenav();
//     }
//   });
// }
// const closeOffer = document.querySelector(".js-nav-list-close");
// closeOffer.addEventListener("click", () => {
//   document.querySelector(".js-nav-list").classList.toggle("hidden");
// });

// Czytaj więcej (sekcja "Dowiedz się więcej")
(function () {
  const btn = document.getElementById("readmore-btn");
  const box = document.getElementById("readmore-content");
  if (!btn || !box) return;

  // Ustaw początkową wysokość
  box.style.maxHeight = "0px";

  const open = () => {
    box.classList.add("is-open");
    box.style.maxHeight = box.scrollHeight + "px";
    btn.setAttribute("aria-expanded", "true");
    btn.textContent = "Zwiń";
  };

  const close = () => {
    box.style.maxHeight = box.scrollHeight + "px"; // przygotowanie do animacji
    requestAnimationFrame(() => {
      box.classList.remove("is-open");
      box.style.maxHeight = "0px";
    });
    btn.setAttribute("aria-expanded", "false");
    btn.textContent = "Czytaj więcej";
  };

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    expanded ? close() : open();
  });

  // Po zakończeniu animacji usuń inline maxHeight gdy otwarte (lepsza responsywność)
  box.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "max-height") return;
    if (btn.getAttribute("aria-expanded") === "true") {
      box.style.maxHeight = "none";
    }
  });
})();
