const hamburger = document.querySelector(".hamburger");
const navlinksList = document.querySelector(".navlinks-list");
const navlinks = document.querySelectorAll(".navlinks");

hamburger.addEventListener("click", () => {
    console.log("click");
    hamburger.classList.toggle("active");
    navlinksList.classList.toggle("active");

})


navlinks.forEach(n => n.addEventListener("click", closeMenu))

function closeMenu() {
    hamburger.classList.remove("active");
    navlinks.classList.remove("active");
}