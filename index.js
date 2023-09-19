// Množstevní slevy
// Napište program, který spočítá cenu objednávky triček s potiskem.
// Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů.
// Při objednávce pod 50 kusů stojí jedno tričko 300 Kč.
// Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus.
// Při objednávce nad 200 kusů je cena 200 Kč za tričko.
// Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.
// Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky.
const tShirt = Number(prompt('Zadejte počet triček, kterých chcete objednat.'));
let price = '';
//když začnu od nejnižší hodnoty musím vymezit přesně hranice
// if (tShirt < 50) {
//   price = tShirt * 300;
// } else if (tShirt >= 50 && tShirt <= 200) {
//   price = tShirt * 250;
// } else if (tShirt > 200 && tShirt <= 500) {
//   price = tShirt * 200;
// } else if (tShirt > 500 && tShirt <= 1000) {
//   price = tShirt * 150;
// } else if (tShirt > 1000) {
//   price = tShirt * 120;
// }

//začnu od největší hodnoty. Kdybych začala u nejnižší zasekne se to hned u ní
if (tShirt > 1000) {
  price = tShirt * 120;
} else if (tShirt > 500) {
  price = tShirt * 150;
} else if (tShirt > 200) {
  price = tShirt * 200;
} else if (tShirt >= 50) {
  price = tShirt * 250;
} else if (tShirt < 50) {
  price = tShirt * 300;
}
document.body.innerHTML += `
<h2>Počet objednaných kusů: ${tShirt}.</h2>
<h1>Celková cena Vaší objednávky je ${price}CZK</h1>
`;
