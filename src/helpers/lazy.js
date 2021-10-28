export function Lazy() {
    const targets = document.querySelectorAll("[data-observer]");

    const cb = (entries) => {
        entries.forEach(entry => {
            const clss = entry.target.className;
            const el = document.querySelector(`.about`);

            if (entry.isIntersecting) {
                el.classList.remove("fade");
            } else {
                el.classList.add("fade");
            }
        });
    }

    const observer =  new IntersectionObserver(cb, {
        threshold: .5,
    });

    targets.forEach(el => {
        observer.observe(el);
    })
}

