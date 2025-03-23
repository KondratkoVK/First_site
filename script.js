document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollBy({
        top: 1000, // Сдвиг на 500 пикселей вниз
        behavior: 'smooth' // Плавный скроллинг
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-board");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const fileInput = document.getElementById("file-upload");
    const consentCheckbox = document.getElementById("checkbox_personal_date");
    const submitButton = document.getElementById("button_send");

    function validateForm(event) {
        let isValid = true;

        document.querySelectorAll(".error-message").forEach(el => el.remove());

        function showError(input, message) {
            const error = document.createElement("span");
            error.classList.add("error-message");
            error.style.color = "red";
            error.textContent = message;
            input.insertAdjacentElement("afterend", error);
        }

        if (!nameInput.value.trim()) {
            showError(nameInput, "Введите имя");
            isValid = false;
        }
        if (!emailInput.value.trim() || !emailInput.checkValidity()) {
            showError(emailInput, "Введите корректный email");
            isValid = false;
        }
        if (!fileInput.files.length) {
            showError(fileInput, "Прикрепите файл");
            isValid = false;
        }
        if (!consentCheckbox.checked) {
            showError(consentCheckbox, "Подтвердите согласие");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            alert("Форма успешно отправлена!");
            form.reset();
        }
    }

    form.addEventListener("submit", validateForm);
});