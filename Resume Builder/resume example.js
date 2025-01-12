function showDetails(resumeType) {
    const detailsContent = document.getElementById('details-content');
    const resumeDetails = {
        resume1: "This is a sample Software Engineer resume. It includes skills like JavaScript, Python, and React.",
        resume2: "This is a sample Graphic Designer resume. It showcases skills in Adobe Photoshop, Illustrator, and UI/UX design.",
        resume3: "This is a sample Project Manager resume. It highlights experience in Agile methodologies, team leadership, and project planning."
    };

    detailsContent.innerHTML = resumeDetails[resumeType];
    document.getElementById('resume-details').classList.remove('hidden');
}

function hideDetails() {
    document.getElementById('resume-details').classList.add('hidden');
}