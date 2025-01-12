function showDetails(templateType) {
    const detailsContent = document.getElementById('details-content');
    const templateDetails = {
        template1: "This is a Modern Resume Template. It features a clean layout with a focus on skills and experience.",
        template2: "This is a Creative Resume Template. It includes colorful sections and a unique design to stand out.",
        template3: "This is a Professional Resume Template. It emphasizes a traditional layout suitable for corporate jobs."
    };

    detailsContent.innerHTML = templateDetails[templateType];
    document.getElementById('template-details').classList.remove('hidden');
}

function hideDetails() {
    document.getElementById('template-details').classList.add('hidden');
}