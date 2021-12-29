import { contactFormSubmit } from "../helpers/contact_form_submit.js";

export function Contact() {
    const $contact = document.createElement("section");
    $contact.classList.add("contact-all");
    $contact.classList.add("fade");
    $contact.classList.add("from-left");

    // TODO: add a load svg when the email is sended

    $contact.innerHTML = `
        <div class="contact-media">
            <a class="no-hover" href="https://web.whatsapp.com/" target="_blank"><i class="uil uil-whatsapp"></i> 52(555)-542</a>
            <a href="https://mail.google.com/" target="_blank"><i class="uil uil-envelope"></i> kissubebe@gmail.com</a>
            <a href="https://www.facebook.com/" target="_blank"><i class="uil uil-facebook-f"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="uil uil-instagram"></i></a>
            <a href="https://www.linkedin.com/" target="_blank"><i class="uil uil-linkedin"></i></a>
        </div>
        <div class="contact">
            <form class="contact-form">
                <legend>Contácteme</legend>
                <input type="text" placeholder="Su nombre o Empresa" title="Solo se aceptan letras y espacios en blanco" required name="name" pattern="^[A-Za-z\s]+$">
                <input type="email" placeholder="Su email" required name="email" title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$">
                <textarea name="comment" cols="50" rows="5" placeholder="Escriba su mensaje" required data-pattern="^.{1,255}$" title="Tu comentario no debe exceder los 255 caracteres"></textarea>
                <div class="submit-container">
                    <input type="submit" value="Enviar">
                </div>
            
                <div class="contact-form-response none">
                    <p>Su mensaje ha sido enviado :)</p>
                </div>
            </form>
        </div>
    `

    contactFormSubmit();
    return $contact;
}