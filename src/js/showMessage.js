let messageContent = {
	"success": "Your form has been successfully submitted!",
	"error": "There was a validation error. Please check your input!",
};

export function showMessage(msg_type) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-btn');

    if (msg_type == "error") {
        modalMessage.textContent = messageContent.error;
    } else if (msg_type == "success") {
        modalMessage.textContent = messageContent.success;
    }

    modal.style.display = "block";

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}