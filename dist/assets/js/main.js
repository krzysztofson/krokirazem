const navBtn = document.querySelector('.js-nav-btn');
const nav = document.querySelector('.js-nav');

function togglenav() {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
}

navBtn.addEventListener('click', togglenav);

window.addEventListener('load', () => {
    lightGallery(document.getElementById('lightgallery'), {
        getCaptionFromTitleOrAlt: true,
        thumbHeight: "60px",
    });
});
