// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Récupération des valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validation simple
        if (!name || !email || !message) {
            showMessage('Veuillez remplir tous les champs.', 'error');
            return;
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Veuillez entrer une adresse email valide.', 'error');
            return;
        }

        // Simulation d'envoi (dans un vrai projet, vous feriez une requête AJAX ici)
        setTimeout(function() {
            // Réinitialisation du formulaire
            contactForm.reset();
            
            // Affichage du message de succès
            showMessage('Merci ! Votre message a été envoyé avec succès.', 'success');
        }, 500);
    });

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        
        // Masquer le message après 5 secondes
        setTimeout(function() {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // Traitement des données au chargement (affecte INP)
    function processData() {
        const data = [];
        for (let i = 0; i < 10000; i++) {
            data.push(Math.sqrt(i * Math.random()));
        }
        return data;
    }
    processData();

    // Calculs supplémentaires au scroll (affecte INP)
    window.addEventListener('scroll', function() {
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
            sum += Math.random();
        }
    });

});
