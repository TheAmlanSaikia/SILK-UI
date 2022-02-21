const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarItems = document.querySelectorAll(".sidebar-items")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
})


sidebarItems.forEach(n => n.addEventListener("click", closeMenu))

function closeMenu(){
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
}