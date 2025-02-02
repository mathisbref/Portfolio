document.addEventListener("DOMContentLoaded", () => {
    const competences = document.querySelectorAll(".competence");
    const descriptionBox = document.getElementById("description-box");
    const projets = document.querySelectorAll(".projet");
    const voirCompetencesButtons = document.querySelectorAll(".voir-competences");

    // ✅ Gestion de l'affichage de la description au survol
    competences.forEach((comp) => {
        comp.addEventListener("mouseenter", () => {
            descriptionBox.textContent = comp.getAttribute("data-description");
            descriptionBox.classList.remove("d-none");
        });
        comp.addEventListener("mouseleave", () => {
            descriptionBox.classList.add("d-none");
        });
    });

    // ✅ Gestion du clic sur "Voir les compétences associées"
    voirCompetencesButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            // Réinitialiser les compétences (remettre le fond à sa couleur d'origine)
            competences.forEach(comp => comp.classList.remove("highlight"));

            // Récupérer les indices des compétences associées
            const competencesAssociees = projets[index].getAttribute("data-competences").split(",");

            // Appliquer la surbrillance
            competencesAssociees.forEach(i => {
                competences[i].classList.add("highlight");
            });
        });
    });
});
