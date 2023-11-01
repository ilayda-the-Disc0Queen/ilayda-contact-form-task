let messageContent = {
	"success": "Your form has been successfully submitted!",
	"error": "There was a validation error. Please check your input!",
	"alreadySubmitted": "You have already submitted this form!",
};

let successState = false;

export function getSuccessState() {
    return successState;
}

export function setSuccessState(value) {
    successState = value;
}

export function showSuccessMessage(didSucceed) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-btn');

	if (successState) {
		modalMessage.textContent = messageContent.alreadySubmitted;
	} else if (didSucceed && !successState) {
        modalMessage.textContent = messageContent.success;
    } else {
        modalMessage.textContent = messageContent.error;
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