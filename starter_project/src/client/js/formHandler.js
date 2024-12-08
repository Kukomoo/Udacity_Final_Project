import { checkForName } from './nameChecker.js';

function initFormHandler() {
    const form = document.getElementById('urlForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
}


function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;


    if (!formText) {
        alert("Please enter text or a URL!");
        return;
    }


    if (!isValidURL(formText)) {
        alert("Please enter a valid URL!");
        return;
    }


    fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: formText }),
    })
        .then((response) => response.json())
        .then((data) => {

            const resultsElement = document.getElementById('results');
            resultsElement.innerHTML = `
                <p><strong>Polarity:</strong> ${data.score_tag}</p>
                <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
                <p><strong>Text:</strong> ${formText}</p>
            `;
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred.');
        });
}

function isValidURL(inputText) {
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/[\w-./?%&=]*)?$/i;
    return urlRegex.test(inputText);
}

export { handleSubmit, isValidURL, initFormHandler };
