const form = document.querySelector('#form');
const inputs = document.querySelectorAll('.required');
const spanErrors = document.querySelectorAll('.error-message');

const messages = {
    shortName: "O campo nome deve ter no mínimo 2 caracteres",
    emptyfield: "Preencha o campo {field}",
    invalidEmail: "Informe um endereço de email válido.",
    invalidPhone: "Informe um número de telefone válido.",
    invalidCPF: "Informe um número de CPF válido.",
    invalidSex: "Informe o Sexo.",
    invalidSenha: "A senha deve conter ao menos uma letra e um dígito e possuir no mínimo 8 caracteres.",
    invalidConfSenha: "As senhas não conferem."
}

function validateInput(input, spanError) {
    let error = false;
    let message;
    if (input.value.trim() === '') {
        error = true;
        message = messages.emptyfield.replace('{field}', input.name)
    } else if (input.name === 'Nome' && input.value.length < 2) {
        error = true;
        message = messages.shortName;
    } else if (input.name === 'Sobrenome' && input.value.length < 2) {
        error = true;
        message = messages.shortName;
    } else if (input.name === 'Email' && !/\S+@\S+\.\S+/.test(input.value)) {
        error = true;
        message = messages.invalidEmail;
    } else if (input.name === 'Telefone' && !/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(input.value)) {
        error = true;
        message = messages.invalidPhone;
    } else if (input.name === 'C.P.F.' && !/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(input.value)) {
        error = true;
        message = messages.invalidCPF;
    } else if (input.name === 'Sexo' && input.value === 'Selecione uma opção') {
        error = true;
        message = messages.invalidSex;
    } else if (input.name === 'Senha' && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.value)) {
        error = true;
        message = messages.invalidSenha;
    } else if (input.name === 'Confirmação de Senha' && input.value.trim() !== document.querySelector('#senha').value.trim()) {
        error = true;
        message = messages.invalidConfSenha;
    }

    if (error) {
        spanError.textContent = message;
        spanError.style.display = 'block';
        spanError.classList.add('text-danger');
        input.classList.add('erroinput');
    }
    else {
        spanError.textContent = '';
        spanError.style.display = 'none';
        input.classList.remove('erroinput');
    }

}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    inputs.forEach(function (input, index) {
        console.log(index);
        if (index < spanErrors.length) {
            validateInput(input, spanErrors[index])
        }
    });

    const errors = document.querySelectorAll('.text-danger:not([style*="display: none"])');
    console.log(errors);
    if (errors.length === 0) {
        const conta = criaConta();
        window.location.href = 'login.html';
    }
});

inputs.forEach((input) => {
    input.addEventListener('blur', function () {
        const errorMessage = input.nextElementSibling;
        validateInput(input, errorMessage);
    })
})

function criaConta() {
    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telefone').value;
    const cpf = document.querySelector('#cpf').value;
    const nascto = document.querySelector('#dataNasc').value;
    const sexo = document.querySelector('#sexo').value;
    const senha = document.querySelector('#senha').value;

    const conta = {
        nome,
        sobrenome,
        email,
        telefone,
        cpf,
        nascto,
        sexo,
        senha
    }

    try {
        localStorage.setItem('conta', JSON.stringify(conta));
    } catch (error) {
        console.log("Erro ao criar conta: ", error);
    }

    return conta;
}