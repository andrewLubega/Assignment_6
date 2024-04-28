document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const inputText = document.getElementById('inputText');

    submitButton.addEventListener('click', function() {
        const text = inputText.value.trim();
        if (text !== '') {
            // Do something with the submitted text
            console.log('Submitted text:', text);
            alert('Submitted text:\n\n' + text);
            // You can replace the console.log and alert with your desired functionality
        } else {
            alert('Please enter some text before submitting.');
        }
    });
});