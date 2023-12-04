function capturarDados(botao) {
    var roteiroViagem = botao.parentElement;
    var destino = roteiroViagem.querySelector(".roteiro-destino").textContent;
    var info1 = roteiroViagem.querySelector(".info1").textContent;
    var info2 = roteiroViagem.querySelector(".info2").textContent;
    var info3 = roteiroViagem.querySelector(".info3").textContent;
    var valor = roteiroViagem.querySelector(".roteiro-preco").textContent;
    var taxas = roteiroViagem.querySelector(".roteiro-obs").textContent;
    var parcelamento = roteiroViagem.querySelector(".roteiro-parcelamento").textContent;

    var dadosPacote = {
        "destino": destino,
        "info1": info1,
        "info2": info2,
        "info3": info3,
        "valor": valor,
        "taxas": taxas,
        "parcelamento": parcelamento,
    };

    console.log(dadosPacote);
}

function criarElemento(destino, info1, info2, info3, valor, taxas, parcelamento, imagem) {
    var novoRoteiro = document.createElement('div');
    novoRoteiro.classList.add('roteiros-viagens');

    novoRoteiro.innerHTML = `
        <img src="${imagem}" class="postal">
        <div class="roteiro-destino">${destino}</div>
        <ul class="roteiro-incluso">
            <li class="info1">${info1}</li>
            <li class="info2">${info2}</li>
            <li class="info3">${info3}</li>
        </ul>
        <div class="roteiro-preco">${valor}</div>
        <div class="roteiro-obs">${taxas}</div>
        <div class="roteiro-parcelamento">${parcelamento}</div>
        <button class="roteiro-comprar" onclick="capturarDados(this)">Comprar</button>
    `;

    return novoRoteiro;
}

function inserirPacote() {
    var destino = document.getElementById('inputDestino').value;
    var info1 = document.getElementById('inputInfo1').value;
    var info2 = document.getElementById('inputInfo2').value;
    var info3 = document.getElementById('inputInfo3').value;
    var valor = document.getElementById('inputValor').value;
    var taxas = document.getElementById('inputTaxas').value;
    var parcelamento = document.getElementById('inputParcelamento').value;
    var imagem = document.getElementById('inputImagem').value;

    var novoElemento = criarElemento(destino, info1, info2, info3, valor, taxas, parcelamento, imagem);

    var containerDestinos = document.querySelector('.container-destinos');
    containerDestinos.appendChild(novoElemento);

    limparCampos();
}

function limparCampos() {
    document.getElementById('inputDestino').value = '';
    document.getElementById('inputInfo1').value = '';
    document.getElementById('inputInfo2').value = '';
    document.getElementById('inputInfo3').value = '';
    document.getElementById('inputValor').value = '';
    document.getElementById('inputTaxas').value = '';
    document.getElementById('inputParcelamento').value = '';
    document.getElementById('inputImagem').value = '';
}