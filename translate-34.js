// Function to translate text
function translate() {
    // Select the title elements by their class
    var titleElements = document.querySelectorAll('.save-for-later-page__title');

    // Loop through all title elements and change their text content
    titleElements.forEach(function(titleElement) {
        // Change the text content of each title element
        titleElement.innerText = 'הטופס נשמר בהצלחה!';
    });

    // Select the subtitle element by its class
    var subtitleElement = document.querySelector('.save-for-later-page__subtitle');

    // Check if the subtitle element exists
    if (subtitleElement) {
        // Change the text content of the subtitle element
        subtitleElement.innerText = 'יש למלא כתובת אימייל לקבלת קישור להמשך ושליחת הטופס';
    } else {
        console.error('Subtitle element not found');
    }

    // Select the email input element by its class
    var emailInputElement = document.querySelector('.save-for-later-page__input');

    // Check if the email input element exists
    if (emailInputElement) {
        // Change the placeholder text of the email input element
        emailInputElement.placeholder = 'הכנס בתובת אימייל';
    } else {
        console.error('Email input element not found');
    }

    // Select the copy link title span element by its class
    var copyLinkTitleElement = document.querySelector('.save-for-later-page__copy-link-title');

    // Check if the copy link title span element exists
    if (copyLinkTitleElement) {
        // Change the text content of the copy link title span element
        copyLinkTitleElement.innerText = 'העתק קישור להמשך מילוי ושליחת הטופס';
    } else {
        console.error('Copy link title element not found');
    }

    // Select the button element by its class
    var buttonElement = document.querySelector('.save-for-later-page__btn');

    // Check if the button element exists
    if (buttonElement) {
        // Change the text content of the button element
        buttonElement.innerText = 'לחץ לקבלת קישור באימייל';
    } else {
        console.error('Button element not found');
    }

// Select the span element within the button
 // Select the button element by its class
        var buttonElement = document.querySelector('.save-for-later-page__btn');
        buttonElement.textContent == 'העתק קישור';

}

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
