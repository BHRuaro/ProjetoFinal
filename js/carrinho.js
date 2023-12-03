import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { infoComponent } from "./components/info.js";
import { headerLogin } from "./components/header.js";

function novoProdutoTr(produto) {
    const novaTr = document.createElement('tr');
    if (produto.nome.length > 10) {
        produto.nome = produto.nome.substring(0, 50) + "...";
    }

    const precoUnit = (produto.preco * produto.quant).toFixed(2);

    novaTr.innerHTML =
        `
        <td><img src="${produto.imagem}" class="product-img-carrinho"></td>
        <td>${produto.nome}</td>
        <td><input class="quantity" type="number" value="${produto.quant}"></td>
        <td>R$${precoUnit}</td>
        <td><button class="btn btn-danger btn-sm">Remover</button></td>
    `;

    return novaTr;
}

function addProduto(produto) {
    const tableBody = document.querySelector('#tbProducts tbody');
    const tr = novoProdutoTr(produto);
    tableBody.appendChild(tr);

}

function carregaProdutos() {
    const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
    arrayProdutos.forEach((prod) => addProduto(prod));
}

window.onload = function () {
    try {
        carregaProdutos();
    } catch (error) {
        console.log(error);
    }

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
}


document.querySelector('#tbProducts tbody').addEventListener('input', function (event) {
    const target = event.target;
    try {
        if (target.classList.contains('quantity')) {
            const row = target.closest('tr');
            const name = row.querySelector('td:nth-child(2)').textContent.trim();
            const novaQuantidade = parseInt(target.value, 10);
            atualizaStorage(name, novaQuantidade);
        }
    } catch (error) {
        console.log(error);
    }

});

function atualizaStorage(nome, novaQuantidade) {
    try {
        const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
        arrayProdutos.forEach((prod) => {
            if (prod.nome === nome) {
                prod.quant = novaQuantidade;
            }
        });
        localStorage.setItem('carrinho', JSON.stringify(arrayProdutos));
    } catch (error) {
        console.log(error);
    }

}


document.querySelector('#tbProducts tbody').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-danger')) {
        const row = event.target.closest('tr');
        const nome = row.querySelector('td:nth-child(2)').textContent.trim();

        removeProduto(row);
        removerProdutoStorage(nome);
    }
});

function removeProduto(row) {
    row.remove();
}

function removerProdutoStorage(nome) {
    const arrayProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoIndex = arrayProdutos.findIndex((prod) => prod.nome === nome);

    if (produtoIndex !== -1) {
        arrayProdutos.splice(produtoIndex, 1);
        localStorage.setItem('carrinho', JSON.stringify(arrayProdutos));
    }
}