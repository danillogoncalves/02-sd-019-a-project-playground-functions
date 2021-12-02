// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let part = string.split(' ');
  return part;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firthName = array[0];
  let lastName = array[array.length - 1];
  let lastFirth = lastName + ', ' + firthName;
  return lastFirth;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointForVictory = wins * 3;
  let pointForTies = ties * 1;
  let totalOfPoints = pointForVictory + pointForTies;
  return totalOfPoints;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let biggerNumber = array[0];
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > biggerNumber) {
      biggerNumber = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === biggerNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
