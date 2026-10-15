const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.dropdown-toggle');

function setOpen(isOpen) {
    dropdown.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
}

toggle.addEventListener('click', () => {
    setOpen(!dropdown.classList.contains('open'));
});

// close when clicking elsewhere
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) setOpen(false);
});

// close with Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
});