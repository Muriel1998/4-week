// creare una rubrica completa! Che:

// mostri la lista dei contatti presenti (createne pure una a scelta di almeno 5 individui)
// permette l'aggiunta di nomi alla lista dei contatti
// permetta la rimozione di un determinato contatto (scegliete l'approccio che preferite)
// che conservi e peschi la lista dei contatti servendoci del LocalStorage
// Il tutto dovrà essere completo di html/css, di fatto dobbiamo creare una rubrica utilizzabile dagli ipotetici utenti.

// Avanzato:

const q = (selector) => document.querySelector(selector);

const ul = q("#listacontatti");
const contatti = q(".contatti");
const filtro = q("#search");
const inputName = q("#name");
const inputSurname = q("#surname");
const inputNumber = q("#number");

const people = [];

const aggiungiContatto = (nome, cognome, telefono) => {
  people.push(
    {
        nome: nome,
        cognome: cognome,
        telefono: telefono,
    }
  )
}

aggiungiContatto('Muriel','Ingrassia','3915894567');
aggiungiContatto('Fede','Rossi','3274895478');
aggiungiContatto('Andrea','Bianchi','3914579517');
aggiungiContatto('Mario','Neri','3912315589');
aggiungiContatto('Paola','Koala','3955147859');

console.log(people);

const generaListaContatti = () => {
  ul.innerHTML = ''
  people.forEach((contatto) => {
    console.log(contatto)
    let liContatto = document.createElement('li')
    liContatto.innerHTML = `<h2>${contatto.nome} ${contatto.cognome}</h2> <h3> ${contatto.telefono} </h3>`
    ul.appendChild(liContatto)
  })
}

q("#add").addEventListener("click", () => {
    aggiungiContatto(inputName.value, inputSurname.value, inputNumber.value);
    generaListaContatti();
    inputName.value = "";
    inputSurname.value = "";
    inputNumber.value = "";
});

generaListaContatti();

filter.addEventListener("keyup", () => {
  let val = q("#search").value;
  console.log(val);
  generaListaContatti(val);
});

// function generaListaContatti(val = "") {
//   let finalArray = [];
//   const filteredCards = people.filter((element) =>
//     people.toLowerCase().includes(val.toLowerCase())
//   );


//   console.log(finalArray);

//   filteredCards.forEach((elem) => {
//     console.log(elem)
//     let elemArray = elem.split(" - ");
//     console.log(elemArray)
//     finalArray.push(elemArray);
//     console.log(finalArray)
//   });}

//   console.log(finalArray);

// localStorage.setItem(JSON.stringify('people'));



  /* filter.addEventListener("keyup", () => {
    let val = q("#search").value;
    console.log(val);
    cardsGenerator(val);
  });

  function cardsGenerator(val = "") {
    let finalArray = [];
    const filteredCards = people.filter((card) =>
      card.toLowerCase().includes(val.toLowerCase())
    );

    filteredCards.forEach((elem) => {
        let elemArray = elem.split(" - ");
        finalArray.push(elemArray);
      });
    

      console.log(finalArray);

      cards.innerHTML = finalArray
      .map((card) => `<div><h3>${card[0]}</h3><p>${card[1]}</p></div>`)
      .join("");
  
    if (finalArray.length === 0) {
      cards.innerHTML = "Nessun risultato trovato";
    }
  }
  cardsGenerator();
  */