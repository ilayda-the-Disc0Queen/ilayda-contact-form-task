export function validate() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // to stop the form from submitting

        let formIsValid = false;

        // const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Basic form validation: check for '@' in email field and non-black message field
        if (email.includes('@') && message) {
            formIsValid = true;
        }
        
        if (!formIsValid) {
            document.querySelector('.error-message').style.display = 'block';
        }
    });
}
