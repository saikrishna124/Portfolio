const menuDiv = document.getElementById('menu');
const drawerMenuIcon = document.getElementById('menu-drawer-icon');
const drawerSection = document.getElementById("side-menu");

function smoothScroll(event) {
    event.preventDefault();
    drawerSection.classList.toggle("active");
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
}

// const menuButtonList = document.querySelectorAll('div > a[href^="#"]').forEach(item=>{
//     item.addEventListener('click', smoothScroll);
// });

drawerMenuIcon.addEventListener('click', ()=>{
    drawerSection.classList.toggle("active");
})

document.querySelectorAll('div > a[href^="#"]').forEach(item=>{
    item.addEventListener('click', smoothScroll);
});


