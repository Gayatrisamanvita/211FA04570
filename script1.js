document.getElementById("generateButton").addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    document.getElementById("displayNumber").textContent = `The number is: ${randomNumber}`;
});
