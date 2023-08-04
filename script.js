let listaDeFrutas = ["Morango", "Goiaba", "Pêssego"]
const listagemPrincipal = document.querySelector('ul');

function incluindoFrutasNaListagem(lista) {
    for (i = 0; i < lista.length; i++) {
        let frutaAtual = lista[i];

        const novaFruta = document.createElement('li')
        novaFruta.innerText = frutaAtual
        listagemPrincipal.appendChild(novaFruta)
        novaFruta.classList.add("frutas");
    }
}

incluindoFrutasNaListagem(listaDeFrutas);