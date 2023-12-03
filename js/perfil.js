import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { infoComponent } from "./components/info.js";
import { headerLogin } from "./components/header.js";

const conta = JSON.parse(localStorage.getItem('conta'));
const perfil = document.getElementById('userProfile');

window.onload = () => {
    try {
        if (conta) {
            const appHeader = document.getElementById('appHeader');
            appHeader.innerHTML = headerLogin;
        } else {
            const appHeader = document.getElementById('appHeader');
            appHeader.innerHTML = headerComponent;
        }

        const appInfo = document.getElementById('appInfo');
        appInfo.innerHTML = infoComponent;

        const appFooter = document.getElementById('appFooter');
        appFooter.innerHTML = footerComponent;

        renderizarPerfil();
    } catch (error) {
        console.log("Erro ao carregar dados: ", error);
    }
};

function renderizarPerfil() {

    try {
        perfil.innerHTML = `
        <div>
            <h2 class="pb-3">Meu perfil</h2>
            <a href="#"><i class="far fa-circle-user fa-5x text-black mt-2"></i></a>
        </div>
        <div>
            <h4 class="mt-5">${conta.nome.toLowerCase() + '-' + conta.sobrenome.toLowerCase()}</h4>
            <hr class="w-25 mx-auto" />
            <p>Apelido</p>
        </div>
        <div>
            <h4 class="mt-5">${conta.nome + ' ' + conta.sobrenome}</h4>
            <hr class="w-25 mx-auto" />
            <p>Nome completo</p>
        </div>
        <div>
            <h4 class="mt-5">${conta.cpf}</h4>
            <hr class="w-25 mx-auto" />
            <p>C.P.F.</p>
        </div>
        <div>
            <h4 class="mt-5">${conta.nascto}</h4>
            <hr class="w-25 mx-auto" />
            <p>Data de nascimento</p>
        </div>
        <div>
            <h4 class="mt-5">${conta.sexo}</h4>
            <hr class="w-25 mx-auto" />
            <p>Gênero</p>
        </div>
        <div>
            <h4 class="mt-5">${conta.telefone}</h4>
            <hr class="w-25 mx-auto" />
            <p>Telefone</p>
        </div>
        <div>
            <h4 class="mt-5">${conta.email}</h4>
            <hr class="w-25 mx-auto" />
            <p>Email</p>
        </div>
        <div>
            <h4 class="mt-5">${conta.endereco}</h4>
            <hr class="w-25 mx-auto" />
            <p>Endereço</p>
        </div>
        <div>
            <h4 class="mt-5">${conta.cep}</h4>
            <hr class="w-25 mx-auto" />
            <p>CEP</p>
        </div>
        
        <button type="button" class="btn btn-danger" id="logoff">Sair da conta</button>`;
    } catch (error) {
        console.log("Erro ao carregar dados: ", error);
    }

    const sair = document.querySelector('#logoff');

    sair.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('conta');
        window.location.href = 'index.html';

    });
}

