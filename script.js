document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            showMessage('Veuillez remplir tous les champs.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Veuillez entrer une adresse email valide.', 'error');
            return;
        }

        setTimeout(() => {
            contactForm.reset();
            showMessage('Merci ! Votre message a été envoyé avec succès.', 'success');
        }, 500);
    });

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }

    // Banner CLS-safe
    window.addEventListener("load", () => {
      setTimeout(() => {
        const banner = document.createElement("div");
        banner.textContent = "Nouveau contenu chargé après le rendu";
        banner.style.backgroundColor = "#f0f0f0";
        banner.style.display = "flex";
        banner.style.alignItems = "center";
        banner.style.justifyContent = "center";
        banner.style.fontSize = "18px";
        banner.style.fontWeight = "bold";
        document.getElementById("banner-placeholder").appendChild(banner);
      }, 1500);
    });
});
