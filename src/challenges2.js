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
//  Raphael Martins - Turma 19 - Tribo A me ajudou nesse código
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
    const currentNumber = array[i];
    const doesItRepeat = (x) => x === currentNumber;
    const arrayRepeat = array.filter(doesItRepeat);
    if (arrayRepeat.length > 2) {
      return true;
    }
  }
}

function generatePhoneNumber(array) {
  // seu código aqui
  if (numberIsValid(array)) {
    return numberIsValid(array);
  }
  if (numberRepeats3Times(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  // No grupo de estudos do dia 04/12/2021, aprendi esse jeito de concatenar usando template strings.
  // Quem apresentou esse jeito foi o Raphael Martins - Turma 19 - Tribo A
  const prefix = `(${array[0]}${array[1]})`;
  const firstNumbers = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const lastNumbers = `${array[7]}${array[8]}${array[9]}${array[10]}`;

  return `${prefix} ${firstNumbers}-${lastNumbers}`;
}

// Desafio 12
//  Raphael Martins - Turma 19 - Tribo A me ajudou nesse código
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);
  if (a > b + c || b > a + c || c > a + b) {
    return false;
  }
  // if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)) {
  //   return false;
  // }
  return true;
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
