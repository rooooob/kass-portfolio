export function contactFormSubmit() {

    document.addEventListener("submit", e => {
        e.preventDefault();
    
        const $form = document.querySelector(".contact-form"),
            // $loader = document.querySelector(".contact-form-loader"),
            $response = document.querySelector(".contact-form-response");
    
            // $loader.classList.remove("none");
    
        fetch("https://formsubmit.co/ajax/tovelrob25@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json);
                // $loader.classList.add("none");
                $response.classList.remove("none");
                $form.reset();
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setTimeout(() => {
                    $response.classList.add("none");
                }, 2000)
            });
        
    });
    
}