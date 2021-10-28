import { Main } from "../src/components/Main.js";
import { Intro } from "./components/Intro.js"
import { About } from "./components/About.js";
import { Projects } from "./components/Projects.js";
import { Lazy } from "./helpers/lazy.js"

export function App() {
    const $root = document.getElementById("root");
    
    
    $root.appendChild(Main());
    $root.appendChild(Intro());
    $root.appendChild(About());
    $root.appendChild(Projects());

    Lazy();
}