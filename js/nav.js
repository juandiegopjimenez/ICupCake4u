function cambiarClase() {
  let nav = document.getElementById("nav");
  nav.classList.toggle("nav-open");

  let menuOpen = document.getElementById("icons__bars");
  menuOpen.classList.toggle("fa-times");

  let fondoActive = document.getElementById("fondo");
  fondoActive.classList.toggle("fondo-active");

  menuOpen.style.color = "#ff6698";
}
