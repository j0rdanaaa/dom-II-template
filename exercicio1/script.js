// adionar elementos Item 0 e item 5
const lista = document.getElementById('lista')

// ITEM ZERO
const itemZero = document.createElement('li')

// colocando texto atravex do innerHTML
itemZero.innerHTML = 'Item 0'

//ITEM 5
const itemCinco = document.createElement('li')

// colocando texto através do createTextNode
const textoItemCinco = document.createTextNode('Item 5')

itemCinco.appendChild(textoItemCinco)

// ADICIONANDO OS NOVOS ITENS A LISTA

lista.insertAdjacentElement('afterbegin', itemZero)

lista.insertAdjacentElement('beforeend', itemCinco)
