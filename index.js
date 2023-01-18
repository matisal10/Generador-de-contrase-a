
let passwordRange = document.getElementById('range')
let rango = 8

const range = (value) => {
    passwordRange.textContent = value
    rango = value
}

const generateP = (base, range) => {
    let password = ''

    for (let i = 0; i < range; i++) {
        let random = Math.floor(Math.random() * base.length)
        password += base.charAt(random)
    }
    return password
}

const generate = () => {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    const uperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = "0123456789";
    const symbols = "!#$%&/()=?¡¿";

    if (checkSymbol.checked) letters += symbols
    if (checkNumber.checked) letters += numbers
    if (checkUperCase.checked) letters += uperCase

    let range = parseInt(rango)

    password.innerText = generateP(letters, range)
}



window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener('click', () => {
        generate()
    })
})