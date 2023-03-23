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

// navbar scroll
window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 20);
    
})





// cursor move on scroll
let featuredCursor = document.querySelector(".featured-cusor");
let editorialContainer = document.querySelector(".editorial-container");


editorialContainer.addEventListener("mousemove", (e) => {
    featuredCursor.style.top = e.pageY + "px";
    featuredCursor.style.left = e.pageX + "px";
});



// article click & drag slider
const slider = document.querySelector('.editorial-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});