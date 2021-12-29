export function NavBar() {
    const $nav = document.createElement("nav");
    $nav.classList.add("nav-bar");

    $nav.innerHTML = `
        <div class="hidden-links">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">Acerca de Mi</a>
            <a href="#projects" class="nav-link">Proyectos</a>
            <a href="#contact" class="nav-link">Contacto</a>
        </div>
    `

    return $nav;
}