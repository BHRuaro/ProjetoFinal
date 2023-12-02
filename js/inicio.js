import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { infoComponent } from "./components/info.js";

async function carregarProdutos() {
    try {
        const response = await fetch('../data/produtos.json');
        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.log("Erro ao carregar os produtos: ", error);
    }
}

window.onload = async () => {
    try {
        const produtos = await carregarProdutos();
        renderizarProdutos(produtos);

        const appHeader = document.getElementById('appHeader');
        appHeader.innerHTML = headerComponent;

        const appInfo = document.getElementById('appInfo');
        appInfo.innerHTML = infoComponent;

        const appFooter = document.getElementById('appFooter');
        appFooter.innerHTML = footerComponent;

    } catch (error) {
        console.log("Erro ao carregar produtos. ", error);
    }
}

async function renderizarProdutos() {
    const container = document.querySelector('.container');
    const produtos = await carregarProdutos();

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < 4; j++) {
            const col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);

            const card = criarCard(produtos[j + i * 4]);
            col.appendChild(card);
        }
    }
}

function criarCard(produto) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-5');
    card.innerHTML = `<a href="produto.html ">
    <img id="Imagem" src="${produto.imagem}" class="card-img-top" alt="...">
    <div class="card-body">
        <ul class="list-inline ms-0">
            <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
            <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
            <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
            <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
            <li class="list-inline-item"><i class="far fa-star text-warning"></i></li>
            <p>Reviews(4)</p>
        </ul>
        <h5 id="Nome" class="card-title">${produto.nome}</h5>
        <p class="card-text text-decoration-line-through">R$ ${produto.desc}</p>
        <div class="d-flex align-items-center justify-content-between">
            <p class="card-text text-primary fw-bold h4">R$ ${produto.preco}</p>
            <a><i class="far fa-heart ms-1 d-none d-sm-block"></i></a>
        </div>
        <div>
        </div>
        <div>
            <a href="produto.html" class="btn btn-compra text-center w-100 d-none d-sm-block">Comprar</a>
            <div class="d-flex align-items-center justify-content-between">
                <a><i class="far fa-heart ms-1 d-block d-sm-none"></i></a>
            </div>
        </div>
    </div>
</a>`;

    card.querySelector('.btn-compra').addEventListener('click', () => {
        adicionarAoCarrinho(produto);
    });

    return card;
}

