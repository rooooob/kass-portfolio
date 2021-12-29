export function Projects() {
    const $projects = document.createElement("section");
    $projects.classList.add("projects");
    $projects.classList.add("fade");
    $projects.classList.add("from-right");

    $projects.innerHTML = `
        <h2>Mis pryectos</h2>
        <div class="projects-div">
            <div class="project-card">
                <img class="project-img" src="src/assets/images/projects/joel-filipe-RFDP7_80v5A-unsplash.jpg">
                <div class="project-description">
                    <p class="project-title">Casa moderna</p>
                    <button class="pr-button">Ver más</button>
                </div>
            </div>
            <div class="project-card">
                <img class="project-img" src="src/assets/images/projects/joel-filipe-RFDP7_80v5A-unsplash.jpg">
                <div class="project-description">
                    <p class="project-title">Casa moderna</p>
                    <button class="pr-button">Ver más</button>
                </div>
            </div>
            <div class="project-card">
                <img class="project-img" src="src/assets/images/projects/joel-filipe-RFDP7_80v5A-unsplash.jpg">
                <div class="project-description">
                    <p class="project-title">Casa moderna</p>
                    <button class="pr-button">Ver más</button>
                </div>
            </div>
        </div>
    `

    return $projects;
}