/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const biciclette = [
  { nome: "Bici veloce", peso: 100 },
  { nome: "Bici arruginita", peso: 30 },
  { nome: "Bici rubata", peso: 13 },
  { nome: "Bici molto vecchia", peso: 59 },
  { nome: "Bici semplice", peso: 18 },
];

let bici_leggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
  const bici = biciclette[i];

  if (bici.peso < bici_leggera.peso) {
    bici_leggera = bici;
    //const biciEl = document.getElementById("bicileggera");
    //biciEl.innerText = `${bici_leggera}`;
  }
}
console.log(bici_leggera);

/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
  { nome: "vincitori f.c.", punti: 0, falli_subiti: 0 },
  { nome: "perdenti f.c.", punti: 0, falli_subiti: 0 },
  { nome: "inazuma eleven", punti: 0, falli_subiti: 0 },
  { nome: "ultima del campionato f.c.", punti: 0, falli_subiti: 0 },
  { nome: "blue lock f.c.", punti: 0, falli_subiti: 0 },
];

//importo in pagina la function presa da w3shool
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < squadre.length; i++) {
  const squadra_singola = squadre[i];
  squadra_singola.punti = getRandomNumber(0, 10);
  squadra_singola.falli_subiti = getRandomNumber(0, 10);
}

console.log(squadre);
