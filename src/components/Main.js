export function Main() {
    const $header = document.createElement("header");
    $header.classList.add("header");

    $header.innerHTML = `

        <div clas="header-info">
            <h1 class="title">Kassandra Romanillo</h1>
            <h3 class="h-desc">Mas de dos años de experiencia</h3>
            <h3 class="h-desc">‎ ‎<span class="typed"></span></h3>
        </div>
        <img class="architect-img" src="/src/assets/images/architect2.svg" alt="architect">
            
    `

    return $header;
}