export function Intro() {
    const $intro = document.createElement("div");
    $intro.classList.add("intro");

    $intro.innerHTML = `

        <div class="intro-text">
            <h2 class="hide"><span class="i-text">Te ayudamos</span></h2>
            <h2 class="hide"><span class="i-text">a crear</span></h2>
            <h2 class="hide"><span class="i-text">tu casa</span></h2>
        </div>

        <div class="slider"></div>
    `
    return $intro;
}