document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Display the resume preview
    const resumePreview = document.getElementById('resume-preview');
    resumePreview.innerHTML = `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Professional Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
    `;

    function applyTemplate(templateId) {
        const resumeSection = document.querySelector('.your-resume'); // Target the resume output section
        let templateHTML = '';
    
        switch (templateId) {
            case 1: // Classic Template
                templateHTML = `
                    <h1>John Doe</h1>
                    <p>Email: john@example.com | Phone: 123-456-7890</p>
                    <h2>Professional Experience</h2>
                    <p>Experience details go here...</p>
                    <h2>Education</h2>
                    <p>Education details go here...</p>
                `;
                break;
    
            case 2: // Modern Template
                templateHTML = `
                    <div style="border-left: 4px solid #0073e6; padding-left: 1em;">
                        <h1 style="color: #0073e6;">John Doe</h1>
                        <p><strong>Email:</strong> john@example.com</p>
                        <p><strong>Phone:</strong> 123-456-7890</p>
                    </div>
                    <h2>Work Experience</h2>
                    <p>Experience goes here...</p>
                `;
                break;
    
            case 3: // Creative Template
                templateHTML = `
                    <div style="text-align: center; background: #f4f4f4; padding: 1em;">
                        <h1 style="color: #FF6F61;">John Doe</h1>
                        <p>Email: john@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <h2>Skills</h2>
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                    </ul>
                `;
                break;
        }
    
        // Replace the content in "Your Resume" section
        resumeSection.innerHTML = templateHTML;
    }
    
});
