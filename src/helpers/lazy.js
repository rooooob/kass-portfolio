export function Lazy() {
    
    const targets = document.querySelectorAll(".fade");

    const cb = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // entry.target.classList.remove("fade-in");
                // entry.target.classList.add("appear");
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            } else {
                // entry.target.classList.remove("appear");
                // entry.target.classList.add("fade-in");
                entry.target.classList.remove("appear");
            }
        });
    }

    const observer =  new IntersectionObserver(cb, {
        threshold: .1,
        // rootMargin: "0px 0px -100px 0px"
    });

    targets.forEach(el => {
        observer.observe(el, observer);
    })
}
