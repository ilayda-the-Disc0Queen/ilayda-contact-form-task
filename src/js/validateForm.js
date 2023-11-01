import { showMessage } from './showMessage.js';

export function validate() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Basic form validation: check for '@' in email field and non-blank message field
        if (email.includes('@') && message) {
            showMessage("success");
        } else {
            showMessage("error");
        }
    });
}
