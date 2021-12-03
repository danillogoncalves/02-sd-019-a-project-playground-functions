// Desafio 10
function techList(array, string) {
  // seu código aqui
  let arraySort = array.sort();
  let arrayPrint = [];
  let personalTech = {};

  for (let i = 0; i < arraySort.length; i += 1) {
    let personalTech = {};
    personalTech.tech = arraySort[i];
    personalTech.name = string;
    arrayPrint.push(personalTech);
  }
  if (arrayPrint.length === 0) {
    return "Vazio!";
  }
  return arrayPrint;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
