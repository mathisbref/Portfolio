document.addEventListener("DOMContentLoaded", () => {
    const competences = document.querySelectorAll(".competence");
    const voirCompetencesButtons = document.querySelectorAll(".voir-competences");

    // ✅ Gestion du clic sur "Voir les compétences associées"
    voirCompetencesButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Supprimer l'ancienne surbrillance
            competences.forEach(comp => comp.classList.remove("highlight"));

            // Récupérer les compétences associées
            const competencesAssociees = btn.closest(".projet").getAttribute("data-competences").split(",");

            // Appliquer la surbrillance aux bonnes compétences
            competencesAssociees.forEach(i => {
                competences[parseInt(i)].classList.add("highlight");
            });
        });
    });
});
