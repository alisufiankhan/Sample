const body = document.body;

const hamMenu = document.querySelector(".ham-menu");
const navbar = document.querySelector("nav");
const links = document.querySelectorAll(".link");

hamMenu.addEventListener("click", (e) => {
    const navbarAttribute = navbar.getAttribute("data-open");

    if (navbarAttribute == "false") {
        navbar.classList.add("active");
        navbar.setAttribute("data-open", "true");
        body.style.overflow = "hidden";
    } else if (navbarAttribute == "true") {
        navbar.classList.remove("active");
        navbar.setAttribute("data-open", "false");
        body.style.overflow = "auto";
    }
});

window.addEventListener("scroll", (e) => {
    const y = window.scrollY;

    y > 100 ?
        navbar.classList.add("scrolled") :
        navbar.classList.remove("scrolled");
});

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        navbar.classList.remove("active");
        navbar.setAttribute("data-open", "false");
        body.style.overflow = "auto";
    });
});