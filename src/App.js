import { Main } from "../src/components/Main.js";
import { Intro } from "./components/Intro.js"
import { About } from "./components/About.js";
import { Projects } from "./components/Projects.js";
import { Lazy } from "./helpers/lazy.js"
import { NavBar } from "./components/NavBar.js";
import { Tilt } from "./helpers/cool_tilt.js";
import { Contact } from "./components/Contact.js";

export function App() {
    const $root = document.getElementById("root");
    
    
    $root.appendChild(Main());
    $root.appendChild(NavBar());
    $root.appendChild(About());
    $root.appendChild(Projects());
    $root.appendChild(Contact());
    
    $root.appendChild(Intro());
    // Lazy(".about", "[data-about]");
    // Lazy(".projects", "[data-projects]");
    Lazy();
    Tilt();
}