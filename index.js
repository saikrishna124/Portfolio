const body = document.getElementById("body");
const menuDiv = document.getElementById('menu');
const drawerMenuIcon = document.getElementById('menu-drawer-icon');
const drawerSection = document.getElementById("side-menu");
const drawerMenu = document.getElementById("menu-drawer");
const emptyDrawerContainer = document.getElementById("empty-container");

function smoothScroll(event) {
    event.preventDefault();
    drawerSection.classList.toggle("active");
    emptyDrawerContainer.classList.toggle("active-color-change");
    body.classList.toggle("disable-scroll");
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
}

drawerMenuIcon.addEventListener('click', ()=>{
    drawerSection.classList.toggle("active");
    emptyDrawerContainer.classList.toggle("active-color-change");
    body.classList.toggle("disable-scroll");
});

drawerSection.addEventListener('click', ()=>{
    drawerSection.classList.remove("active");
    emptyDrawerContainer.classList.remove("active-color-change");
    body.classList.remove("disable-scroll");
});

drawerMenu.addEventListener('click', (event)=>{
    event.stopPropagation();
});

document.querySelectorAll('div > a[href^="#"]').forEach(item=>{
    item.addEventListener('click', smoothScroll);
});
