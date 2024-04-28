document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const inputText = document.getElementById('inputText');

    submitButton.addEventListener('click', function() {
        const text = inputText.value.trim();
        if (text !== '') {
            console.log('Submitted text:', text);
            alert('Submitted text:\n\n' + text);
        } else {
            alert('Please enter some text before submitting.');
        }
    });
});