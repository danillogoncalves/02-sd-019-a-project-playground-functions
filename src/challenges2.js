// Desafio 10
function techList(array, string) {
  // seu código aqui
  let arraySort = array.sort();
  let arrayPrint = [];
  let personalTech = {};

  for (let i = 0; i < arraySort.length; i += 1) {
    personalTech.tech = arraySort[i];
    personalTech.name = string;
    arrayPrint.push(personalTech);
    personalTech = {};
  }
  if (arrayPrint.length === 0) {
    return 'Vazio!';
  }
  return arrayPrint;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  //  let comparison =array[0]
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    let count = 0
    for (let s = 0; s < array.length; s += 1) {
      if (array[i] === array[s]) {
        count += 1;
      }
      if (count > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;;
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
