let carrinho = [];
let total = 0;

function addCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("listaCarrinho");
    const totalHTML = document.getElementById("total");

    lista.innerHTML = "";

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco}`;
        lista.appendChild(li);
    });

    totalHTML.textContent = `Total: R$ ${total.toFixed(2)}`;
}