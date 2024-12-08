
import { handleSubmit } from './js/formHandler.js';
import { checkForName } from './js/nameChecker.js';
import { initFormHandler } from './js/formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    initFormHandler();
});

const resultsElement = document.getElementById('results');
resultsElement.innerHTML = `
    <p><strong>Polarity:</strong> ${data.score_tag}</p>
    <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
    <p><strong>Text:</strong> ${formText}</p>
`;



export {
  handleSubmit,
  checkForName,
};

document.getElementById('urlForm').addEventListener('submit', handleSubmit);

// alert("I EXIST")
// console.log("CHANGE!!");

// sass files
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
