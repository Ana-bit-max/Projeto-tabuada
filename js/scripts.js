// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Função para criar a tabuada
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; // Limpa a tabela antes de adicionar novos elementos

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        // Criando os elementos corretamente
        const row = document.createElement("div");
        row.classList.add("row");

        const operation = document.createElement("div");
        operation.classList.add("operation");
        operation.innerText = `${number} x ${i} =`;

        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.innerText = result;

        row.appendChild(operation);
        row.appendChild(resultDiv);

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
};

// Evento de envio do formulário
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});
