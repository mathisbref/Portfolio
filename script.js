document.addEventListener("DOMContentLoaded", () => {
    const competences = document.querySelectorAll(".competence");
    const descriptionBox = document.getElementById("description-box");
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
            // Supprimer l'ancienne surbrillance
            competences.forEach(comp => comp.classList.remove("highlight"));

            // Récupérer les compétences associées
            const competencesAssociees = btn.parentElement.getAttribute("data-competences").split(",");

            // Appliquer la surbrillance aux bonnes compétences
            competencesAssociees.forEach(i => {
                competences[parseInt(i)].classList.add("highlight");
            });
        });
    });
});
