
export function Animations() {
    // gsap
    const tl = gsap.timeline({defaults: { ease: "power1.out" }});

    tl.to(".i-text", { y: "0%", duration: 1, stagger: .2 });
    tl.to(".slider", { y: "-100%", duration: .8, delay: .5 });
    tl.to(".intro", { y: "-100%", duration: 1}, "-=.95");

    // typed.js
    const typed = new Typed('.typed', {
        strings: [
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
            "Arquitecto", "Diseñadora", "Guapa",
        ],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 500,
        startDelay: 2000,
        showCursor: false,
        // loop: true,
      });
}   