import { showSuccessMessage, setHasSubmitted } from './showMessage.js';

export function validate() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Basic form validation: check for '@' in email field and non-blank message field
        // TODO: This validation could probably be improved!
        if (email.includes('@') && message) {
            showSuccessMessage(true);
        } else {
            showSuccessMessage(false);
        }
    });
}
