function translate() {
// Select the element by its class
var elements = document.querySelectorAll('.save-for-later-page__title');

// Loop through all elements with the class and change their text content
elements.forEach(function(element) {
    element.innerText = 'הטופס נשמר בהצלחה.';
});

};

// Function to check if the target element exists
function checkElement() {
    var elements = document.querySelectorAll('.save-for-later-page__title');
    if (elements.length > 0) {
        // If the element exists, stop the interval and run the translation function
        clearInterval(checkInterval);
        translate();
    }
}

// Check for the existence of the target element every 100 milliseconds
var checkInterval = setInterval(checkElement, 100);
