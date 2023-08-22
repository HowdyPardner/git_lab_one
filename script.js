// target the paragraph text
let paragraphText = document.getElementById("paragraphText");

// target the change text button
let changeTextButton = document.getElementById("changeTextButton");

// target the text input
let textInput = document.getElementById("textInput");


// add event listener to the change text button
changeTextButton.addEventListener("click", () => {
    paragraphText.textContent = "Otters can be companions on your journey in Final Fantasy :)";
});

// updates the paragraph text as the user types
textInput.addEventListener("input", () => {
    paragraphText.textContent = textInput.value;
});
