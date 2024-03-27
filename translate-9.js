function translate() {
   // Select the title element by its class
    var titleElements = document.querySelectorAll('.save-for-later-page__title');

    // Change the text content of the title element
    titleElements.forEach(function(titleElement) {
        titleElement.innerText = 'הטופס נשמר בהצלחה !';
    });

    // Select the subtitle element by its class
    var subtitleElement = document.querySelector('.save-for-later-page__subtitle');
    // Change the text content of the subtitle element
    subtitleElement.innerText = 'יש למלא כתובת אימייל לרבלת קישור להמשך ושליחת הטופס';
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
