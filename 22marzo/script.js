function calculator() {
    const firstNumber = parseInt(prompt("Inserisci il primo numero"));
    const operation = (prompt("Inserisci l'operazione"));
    const secondNumber = parseInt(prompt("Inserisci il secondo numero"));
    let result;

    if (operation === '+') {
                    result = firstNumber + secondNumber;
                    }
    else return "Operazione non valida";

    return result;
                }

let result = calculator();
// alert(result);


setTimeout(() => console.log("Il risultato è:", result), 10000);

const q = (selector) => document.querySelector(selector);

const resultBtn = q("#resultBtn");

// Tramite il comando clearTimeout non riesco ad annullare il comando
// manca l'id

resultBtn.addEventListener("click", () => 
// clearTimeout(result));
setTimeout(() => console.log("Il risultato è:", result), 0));

