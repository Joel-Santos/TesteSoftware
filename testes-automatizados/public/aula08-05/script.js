
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let isValid = true;

    if (!username.value) {
        showErrorMessage(username.nextElementSibling, 'Nome de usuário é obrigatório');
        isValid = false;
    } else {
        clearErrorMessage(username.nextElementSibling);
    }

    if (!email.value) {
        showErrorMessage(email.nextElementSibling, 'Email é obrigatório');
        isValid = false;
    } else {
        clearErrorMessage(email.nextElementSibling);
    }

    if (!password.value) {
        showErrorMessage(password.nextElementSibling, 'Senha é obrigatória');
        isValid = false;
    } else {
        clearErrorMessage(password.nextElementSibling);
    }

    if (isValid) {
        this.submit(); // Submete o formulário se tudo estiver correto
        
    }
});

function showErrorMessage(element, message) {
    element.textContent = message;
}

function clearErrorMessage(element) {
    element.textContent = '';
}
