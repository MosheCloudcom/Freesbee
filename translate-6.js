function translate() {
// Select the element by its class
var elements = document.querySelectorAll('.save-for-later-page__title');

// Loop through all elements with the class and change their text content
elements.forEach(function(element) {
    element.innerText = 'הטופס נשמר בהצלחה.';
});

};

// Define a global variable to store the button element reference
var saveForLaterButton;

// Function to initialize the button reference
function initializeButton() {
    saveForLaterButton = document.querySelector('.actionBarBtn--saveForLater');

    // Check if the button is found
    if (saveForLaterButton) {
        // Attach a click event listener to the button
        saveForLaterButton.addEventListener('click', function() {
            // Call the translate function when the button is clicked
            translate();
        });
    } else {
        console.error('Button not found');
    }
}

// Call the function to initialize the button reference
initializeButton();
