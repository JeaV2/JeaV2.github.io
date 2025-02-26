const buttonContainer = document.getElementById('buttonContainer');
if (buttonContainer) {
    buttonContainer.innerHTML = `
        <a href="../" class="button">Home</a>
        <a href="../profiel/" class="button">Over mij</a>
        <a href="../techniek/" class="button">Technieken</a>
        <a href="../verbetering/" class="button">verbeter punten</a>
        <a href="../interesse/" class="button">Interesse</a>
        <a href="../reflectiefeedbackleerdoelen/" class="button">Reflectie, feedback en leerdoelen</a>
    `;
}