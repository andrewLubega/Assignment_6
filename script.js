document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const inputText = document.getElementById('inputText');
    const resultBody = document.getElementById('resultBody');

    submitButton.addEventListener('click', function() {
        const text = inputText.value.trim();
        if (text !== '') {
            const words = text.split(/\s+/); // Split text by whitespace
            const frequencyTable = {};

            // Count frequencies of words
            words.forEach(word => {
                frequencyTable[word] = (frequencyTable[word] || 0) + 1;
            });

            // Log the frequency object to the console
            console.log('Frequency Object:', frequencyTable);

            // Sort the frequency table by frequency in descending order
            const sortedWords = Object.keys(frequencyTable).sort((a, b) => frequencyTable[b] - frequencyTable[a]);

            // Display top 5 most frequent words in the UI
            resultBody.innerHTML = ''; // Clear previous results
            for (let i = 0; i < Math.min(5, sortedWords.length); i++) {
                const word = sortedWords[i];
                const frequency = frequencyTable[word];
                const row = `<tr><td>${word}</td><td>${frequency}</td></tr>`;
                resultBody.insertAdjacentHTML('beforeend', row);
            }
        } else {
            alert('Please enter some text before submitting.');
        }
    });

    // Initially populate the result table with example data
    submitButton.click();
});
