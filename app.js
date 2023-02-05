const button = document.querySelector(".burger");
const navlinks = document.querySelector('.navlinks');
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');


button.addEventListener("click", () => {
    button.classList.toggle("active");
    navlinks.classList.toggle("open")
    logo.classList.toggle("active")
    nav.classList.toggle("active")


});

// exhibition slider
