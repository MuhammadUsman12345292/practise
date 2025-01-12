document.addEventListener('DOMContentLoaded', () => 
    {
    const templates = 
    [
        { id: 'template1', content: '<h1>[NAME]</h1><p>[TITLE]</p>' },
        { id: 'template2', content: '<h1 style="color: blue;">[NAME]</h1><p>[TITLE]</p>' }
    ];

    const templatePreview = document.getElementById('template-preview');
    const form = document.getElementById('resume-form');
    let selectedTemplate = null;

    // Render templates
    templates.forEach(template => {
        const div = document.createElement('div');
        div.className = 'template';
        div.dataset.id = template.id;
        div.innerHTML = template.content.replace('[NAME]', 'Your Name').replace('[TITLE]', 'Your Title');
        templatePreview.appendChild(div);

        div.addEventListener('click', () => {
            document.querySelectorAll('.template').forEach(t => t.classList.remove('selected'));
            div.classList.add('selected');
            selectedTemplate = template;
        });
    });

    // Preview button
    document.getElementById('preview-btn').addEventListener('click', () => {
        if (!selectedTemplate) {
            alert('Please select a template.');
            return;
        }

        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const email = document.getElementById('email').value;

        const previewContent = selectedTemplate.content
            .replace('[NAME]', name)
            .replace('[TITLE]', title)
            + `<p>${email}</p>`;
        const previewWindow = window.open('', '_blank');
        previewWindow.document.write(previewContent);
    });

    // Download PDF
    document.getElementById('download-pdf').addEventListener('click', async () => {
        if (!selectedTemplate) {
            alert('Please select a template.');
            return;
        }

        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;

        const content = selectedTemplate.content
            .replace('[NAME]', name)
            .replace('[TITLE]', title);

        const pdf = await import('jspdf');
        const doc = new pdf.jsPDF();
        doc.html(content, {
            callback: function (doc) {
                doc.save('resume.pdf');
            }
        });
    });
});
