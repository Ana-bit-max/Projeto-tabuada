// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplicador-form")
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator")
// Funções

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    console.log(multiplicationNumber, multiplicatorNumber);

    
});
    



