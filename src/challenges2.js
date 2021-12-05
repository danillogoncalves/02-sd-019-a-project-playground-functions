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
  // No grupo de estudos do dia 04/12/2021, aprendi esse jeito de concatenar usando template strings.
  // Quem apresentou esse jeito foi o Raphael Martins - Turma 19 - Tribo A
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);
  let allMeanSmaller = false;
  let allBiggestAbsoluteDifference = false;
  if (a > b + c) {
    return false;
  } else if (b > a + c) {
    return false;
  } else if (c > a + b) {
    return false;
  } else {
    allMeanSmaller = true;
  }

  if (a < Math.abs(b - c)) {
    return false;
  } else if (b < Math.abs(a - c)) {
    return false;
  } else if (c < Math.abs(a - b)) {
    return false;
  } else {
    allBiggestAbsoluteDifference = true;
  }
  return allBiggestAbsoluteDifference === allMeanSmaller;
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
