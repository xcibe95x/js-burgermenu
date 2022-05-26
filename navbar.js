function toggleMenu() {
    let dom = document.getElementById('jnav');
    if (dom.style.display === "block") {
        dom.style.display = "none"
        document.getElementById('closeMenu').classList.toggle('nav-hide');
        document.getElementById('openMenu').classList.toggle('nav-hide');
    } else {
        dom.style.display = "block"
        document.getElementById('openMenu').classList.toggle('nav-hide');
        document.getElementById('closeMenu').classList.toggle('nav-hide');
    } 
}