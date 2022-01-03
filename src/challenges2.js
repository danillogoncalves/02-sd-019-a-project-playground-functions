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

function numberIsValid(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function numberRepeats3Times(array) {
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let s = 0; s < array.length; s += 1) {
      if (array[i] === array[s]) {
        count += 1;
      }
      if (count > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
}

function generatePhoneNumber(array) {
  // seu código aqui
  if (numberIsValid(array)) {
    return numberIsValid(array);
  }
  if (numberRepeats3Times(array)) {
    return numberRepeats3Times(array);
  }
  // No grupo de estudos do dia 04/12/2021, aprendi esse jeito de concatenar usando template strings.
  // Quem apresentou esse jeito foi o Raphael Martins - Turma 19 - Tribo A
  const prefix = `(${array[0]}${array[1]})`;
  const firstNumbers = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const lastNumbers = `${array[7]}${array[8]}${array[9]}${array[10]}`;

  return `${prefix} ${firstNumbers}-${lastNumbers}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
function hydrate(string) {
  // seu código aqui
  // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  // https://www.horadecodar.com.br/2021/01/21/como-converter-uma-string-para-int-em-javascript/
  let onlyNumber = string.match(/\d+/g);
  let multiply = 0;
  for (let i = 0; i < onlyNumber.length; i += 1) {
    multiply += parseInt(onlyNumber[i], 10);
  }
  if (multiply <= 0) {
    return 'Tu não bebeu ainda, vai beber leite bebê?';
  }
  if (multiply > 1) {
    return `${multiply} copos de água`;
  }
  return `${multiply} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
