export function About() {
    const $about = document.createElement("section");
    $about.classList.add("about");
    $about.id = "about";
    $about.classList.add("fade");
    $about.classList.add("from-left");

    $about.innerHTML = `

        <h3 class="about-header">Un poco acerca de mi:</h3>
        <div class="about-desc">
            <img src="/src/assets/images/quiet_house.svg" alt="artchitect">
            <div class="about-p">
                <p>Lorem ipsum dolor sit amet consectetur,</p>
                <p>adipisicing elit. Libero excepturi eligendi reprehenderit itaque</p>
                <p>ipsa expedita amet nesciunt culpa ad dicta, voluptates iusto facere</p>
                <p>sed tempore corrupti, asperiores a quis totam!</p>
            </div>
        </div>
    `

    return $about;
}
