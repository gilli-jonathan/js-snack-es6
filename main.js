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
  }
}
console.log(bici_leggera);
