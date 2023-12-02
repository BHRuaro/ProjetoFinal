const form = document.querySelector('#form');
console.log(form);
const inputs = document.querySelectorAll('.required');
const spanErrors = document.querySelectorAll('.error-message');

const messages = {
    shortName: "O campo nome deve ter no mínimo 2 caracteres",
    emptyfield: "Preencha o campo {field}",
    invalidEmail: "Informe um endereço de email válido."
}

function validateInput(input, spanError) {
    let error = false;
    let message;
    if (input.value.trim() === '') {
        error = true;
        message = messages.emptyfield.replace('{field}', input.name)
    } else if (input.name === 'nome' && input.value.length < 2) {
        error = true;
        message = messages.shortName;
    } else if (input.name === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
        error = true;
        message = messages.invalidEmail;
    }

    if (error) {
        spanError.textContent = message;
        spanError.style.display = 'block';
        spanError.classList.add('errofont');
        input.classList.add('erroinput');
    }
    else {
        spanError.textContent = '';
        spanError.style.display = 'none';
        input.classList.remove('erroinput');
    }

}

form.addEventListener('submit', function (event) {
    e.preventDefault();
    inputs.forEach(function (input, index) {
        console.log(index);
        if (index < spanErrors.length) {
            validateInput(input, spanErrors[index])
        }

    })
});

inputs.forEach((input) => {
    input.addEventListener('blur', function () {
        const errorMessage = input.nextElementSibling;
        validateInput(input, errorMessage);
    })
})