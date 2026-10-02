function toggleMenu() {
    const nav = document.querySelector("nav");
    const btn = document.querySelector(".menu-btn");
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
}

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);