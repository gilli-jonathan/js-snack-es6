/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bici_da_corsa = [
  { nome: "Bici veloce", peso: 1800 },
  { nome: "Bici arruginita", peso: 5 },
  { nome: "Bici rubata", peso: 13 },
  { nome: "Bici molto vecchia", peso: 59 },
  { nome: "Bici semplice", peso: 18 },
];

Math.min(bici_da_corsa["peso"]);
console.log(bici_da_corsa);
