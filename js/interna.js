import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { infoComponent } from "./components/info.js";
import { headerLogin } from "./components/header.js";

window.onload = async () => {
    try {
        carregaProduto();

        const conta = JSON.parse(localStorage.getItem('conta'));
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

    } catch (error) {
        console.log("Erro ao carregar produtos. ", error);
    }
}

function carregaProduto() {
    const produto = JSON.parse(localStorage.getItem('produto'));
    const container = document.querySelector('.container-fluid');
    const row = document.createElement('div');
    row.classList.add('row', 'product-img');

    const precoParcela = produto.preco / 12;

    row.innerHTML = `<div class="col-lg-6 text-center">
    <img src="${produto.imagem}" alt="img01" id="img01">
</div>
<div class="col-lg-6">
    <h2>${produto.nome}</h2>
    <ul class="list-inline ms-0">
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
        <li class="list-inline-item"><i class="far fa-star text-warning"></i></li>
        <p>Reviews(4)</p>
    </ul>
    <p class="text-decoration-line-through">R$ ${produto.desc}</p>
    <h3 class="fw-bolder fs-1 text-primary pt-2">R$ ${produto.preco}</h3>
    <p>Em até 12x de R$ ${precoParcela.toFixed(2)} no cartão</p>

    <div class="col-12 col-md-6">
        <a href="" class="mt-4 btn btn-lg btn-primary w-100 btn-compra">COMPRAR AGORA</a>
    </div>

    <div class="input-group mt-3 mb-3 col-6">
        <div class="d-flex">
            <input type="text" class="form-control" placeholder="CEP: 00000-000" aria-label="CEP"
                aria-describedby="button-cep">
            <button class="btn btn-outline-primary" type="button" id="button-cep">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </div>
</div>`;

    row.querySelector('.btn-compra').addEventListener('click', (event) => {
        event.preventDefault();
        adicionarAoCarrinho(produto);
    });

    container.appendChild(row);
}

function adicionarAoCarrinho(produto) {
    const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoJaExiste = arrayProdutos.find(prod => prod.id === produto.id);
    if (produtoJaExiste) {
        alert("Produto já está no carrinho!")
    } else {
        const produtoCarrinho = {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            desc: produto.desc
        };

        arrayProdutos.push(produtoCarrinho);
        localStorage.setItem('carrinho', JSON.stringify(arrayProdutos));
        alert("Produto adicionado ao carrinho!")
    }
}