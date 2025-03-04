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
        });
    });
});