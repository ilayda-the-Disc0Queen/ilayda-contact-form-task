import { showSuccessMessage } from "./showMessage.js";

const messagesBySender = {};

export function validate() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function addMessage(senderEmail, message) {
      if (senderEmail in messagesBySender) {
        // before adding new message, check it doesn't already exist from this user
        // - we don't want duplicates!
        if (!messagesBySender[senderEmail].includes(message)) {
          messagesBySender[senderEmail].push(message);
          // given more time I'd like to display a different message to the user than alreadySubmitted
        }
      } else {
        messagesBySender[senderEmail] = [message];
      }
    }

    // TODO: This validation could probably be improved!
    if (emailRegex.test(email) && message) {
      addMessage(email, message.trim());
      showSuccessMessage(true);
    } else {
      showSuccessMessage(false);
    }
  });
}
