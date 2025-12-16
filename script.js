// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const defaultImageFallback = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%23f5f5f5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23667eea" font-size="28" font-family="Arial, sans-serif">Image%20indisponible</text></svg>';

    function addImageFallbacks() {
        document.querySelectorAll('img').forEach((img) => {
            const fallback = img.dataset.fallback || defaultImageFallback;
            img.addEventListener('error', () => {
                if (img.dataset.fallbackApplied === 'true') return;
                img.dataset.fallbackApplied = 'true';
                img.src = fallback;
            });
        });
    }
    addImageFallbacks();

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

    // JS INUTILE - Calculs lourds multiples au chargement (affecte INP)
    function heavyCalculation1() {
        const arr = [];
        for (let i = 0; i < 50000; i++) {
            arr.push(Math.sin(i) * Math.cos(i) * Math.tan(i));
        }
        return arr.reduce((a, b) => a + b, 0);
    }
    heavyCalculation1();

    function heavyCalculation2() {
        const matrix = [];
        for (let i = 0; i < 1000; i++) {
            matrix[i] = [];
            for (let j = 0; j < 1000; j++) {
                matrix[i][j] = Math.sqrt(i * j) * Math.random();
            }
        }
        return matrix;
    }
    heavyCalculation2();

    function heavyCalculation3() {
        let result = 0;
        for (let i = 0; i < 100000; i++) {
            result += Math.pow(i, 2) / Math.sqrt(i + 1);
        }
        return result;
    }
    heavyCalculation3();

    // Événements multiples inutiles (affecte INP)
    window.addEventListener('mousemove', function() {
        let sum = 0;
        for (let i = 0; i < 500; i++) {
            sum += Math.random();
        }
    });
    


    window.addEventListener("load", () => {
        setTimeout(() => {
          const banner = document.createElement("div");
          banner.textContent = "Nouveau contenu chargé après le rendu";
          
          banner.style.height = "140px";
          banner.style.backgroundColor = "#f0f0f0";
          banner.style.display = "flex";
          banner.style.alignItems = "center";
          banner.style.justifyContent = "center";
          banner.style.fontSize = "18px";
          banner.style.fontWeight = "bold";
      
          document.body.prepend(banner);
        }, 1500);
      });
      


    window.addEventListener('resize', function() {
        let sum = 0;
        for (let i = 0; i < 2000; i++) {
            sum += Math.random();
        }
    });

    window.addEventListener('click', function() {
        let sum = 0;
        for (let i = 0; i < 3000; i++) {
            sum += Math.random();
        }
    });

    window.addEventListener('keydown', function() {
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
            sum += Math.random();
        }
    });

    // Manipulation DOM inutile (affecte INP)
    setInterval(function() {
        const elements = document.querySelectorAll('*');
        elements.forEach(function(el) {
            el.style.transform = 'translateX(0px)';
        });
    }, 100);

    // Requêtes inutiles
    function fetchUnusedData() {
        for (let i = 0; i < 10; i++) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + i)
                .then(response => response.json())
                .then(data => {
                    // Ne fait rien avec les données
                });
        }
    }
    fetchUnusedData();

    // Fonctions récursives inutiles
    function recursiveFunction(depth) {
        if (depth > 0) {
            let sum = 0;
            for (let i = 0; i < 100; i++) {
                sum += Math.random();
            }
            return recursiveFunction(depth - 1) + sum;
        }
        return 0;
    }
    recursiveFunction(100);

    // Manipulation de tableaux inutile
    const largeArray = new Array(100000).fill(0).map((_, i) => i);
    largeArray.sort();
    largeArray.reverse();
    largeArray.filter(x => x > 50000);
    largeArray.map(x => x * 2);
    largeArray.reduce((a, b) => a + b, 0);

    // Manipulation d'objets inutile
    const largeObject = {};
    for (let i = 0; i < 10000; i++) {
        largeObject['key' + i] = {
            value: Math.random(),
            nested: {
                data: Math.random() * 100,
                more: {
                    deep: Math.random() * 1000
                }
            }
        };
    }
    JSON.stringify(largeObject);
    JSON.parse(JSON.stringify(largeObject));

});

