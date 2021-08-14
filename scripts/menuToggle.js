function menuToggle() {
    document.getElementById("primary-nav").classList.toggle("open");
}

let toggle = document.getElementById("hamburgerBtn");

toggle.onclick = menuToggle;
