// ----- Hamburger menu (merge with your existing code if you have it) -----
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.classList.toggle('active', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
});

// ----- Image modal -----
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.modal-close');

function openModal(img) {
    modalImg.src = img.dataset.full || img.src;
    modalImg.alt = img.alt;
    modal.classList.add('open');
    closeBtn.focus();
}

function closeModal() {
    modal.classList.remove('open');
    modalImg.src = '';
}

// Open when a gallery image is clicked
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => openModal(img));
});

// Close with the X button
closeBtn.addEventListener('click', closeModal);

// Close by clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) closeModal();
});

// Close with the Esc key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});