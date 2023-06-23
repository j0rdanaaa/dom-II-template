const lista = document.getElementById('lista')
const input = document.getElementById ('meu-input')

const insereItem = (event) => {
    const frutaNova = document.createElement('li')

    frutaNova.innerHTML = input.value

    lista.appendChild(frutaNova)
    
    input.value = ''


}