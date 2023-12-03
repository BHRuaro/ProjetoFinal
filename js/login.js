const conta = JSON.parse(localStorage.getItem('conta'));
const form = document.querySelector('#form');
console.log(form);
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

function validaLogin() {
    if (email.value === conta.email && senha.value === conta.senha) {
        window.location.href = 'index.html';
    }
    else {
        alert('E-mail ou senha inválidos');
        // const spanError = document.querySelector('#spanError');
        // spanError.textContent = 'E-mail ou senha inválidos';
        // spanError.style.display = 'block';
        // spanError.classList.add('text-danger');
        // email.classList.add('erroinput');
        // senha.classList.add('erroinput');
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    validaLogin();
});
