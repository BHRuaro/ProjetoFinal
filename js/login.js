const conta = JSON.parse(localStorage.getItem('conta'));
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

function validaLogin() {
    if (email.value === conta.email && senha.value === conta.senha) {
        window.location.href = 'index.html';
    }
    else {
        alert('E-mail ou senha inválidos');
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    validaLogin();
});
