function translate() {
// Select the element by its class
var elements = document.querySelectorAll('.save-for-later-page__title');

// Loop through all elements with the class and change their text content
elements.forEach(function(element) {
    element.innerText = 'הטופס נשמר בהצלחה.';
});

};

// Run the translate function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    translate();
});