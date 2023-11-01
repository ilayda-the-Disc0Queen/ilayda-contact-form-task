let messageContent = {
	"success": "Your form has been successfully submitted!",
	"error": "There was a validation error. Please check your input!",
	"alreadySubmitted": "You have already submitted this form!",
};

export let successState = false;

export function showSuccessMessage(didSucceed) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-btn');

	if (successState) {
		modalMessage.textContent = messageContent.alreadySubmitted;
		successState = true;
	} else if (didSucceed && !successState) {
        modalMessage.textContent = messageContent.success;
		successState = true;
    } else {
        modalMessage.textContent = messageContent.error;
		successState = false;
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