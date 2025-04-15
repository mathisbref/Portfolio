document.addEventListener("DOMContentLoaded", () => {
    const competences = document.querySelectorAll(".competence");
    const voirCompetencesButtons = document.querySelectorAll(".voir-competences");

    // Tableau de couleurs pour les contours
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5"];

    // ✅ Gestion du clic sur "Voir les compétences associées"
    voirCompetencesButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Supprimer l'ancienne surbrillance
            competences.forEach(comp => {
                comp.classList.remove("highlight");
                comp.style.borderColor = ""; // Réinitialiser la couleur du contour
            });

            // Récupérer les compétences associées
            const competencesAssociees = btn.closest(".projet").getAttribute("data-competences").split(",");

            // Appliquer la surbrillance et les couleurs de contour aux bonnes compétences
            competencesAssociees.forEach((i, index) => {
                const competence = competences[parseInt(i)];
                competence.classList.add("highlight");
                competence.style.borderColor = colors[index % colors.length]; // Appliquer une couleur de contour
            });

            // Défilement vers la section compétences
            document.getElementById("competences").scrollIntoView({ behavior: "smooth" });
        });
    });

    // Gestion du menu mobile
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const clone = link.cloneNode(true);
        mobileMenu.appendChild(clone);
    });
    
    document.body.appendChild(mobileMenu);
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Animation des sections au scroll
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            const response = await fetch('https://formspree.io/f/meoeywbv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert('Message envoyé avec succès !');
                contactForm.reset();
            } else {
                throw new Error('Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            console.error(error);
        }
    });
    
    // Animation du scroll fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fermer le menu mobile si ouvert
                if (mobileMenu.classList.contains('active')) {
                    menuBtn.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Animation des cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
    
    // Animation du titre principal
    const mainTitle = document.querySelector('#accueil h1');
    mainTitle.classList.add('animate-float');
});