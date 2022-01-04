// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true) {
    return true;
  }
  return false;
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
  let lastFirth = `${lastName}, ${firthName}`;
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

function verifyBiggerNumber(array) {
  let biggerNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > biggerNumber) {
      biggerNumber = array[i];
    }
  }
  return biggerNumber;
}

function countBiggerNumber(number, array) {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === number) {
      count += 1;
    }
  }
  return count;
}

function highestCount(array) {
  // seu código aqui
  const realBiggerNumber = verifyBiggerNumber(array);
  return countBiggerNumber(realBiggerNumber, array);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let mouseCat1 = mouse - cat1;
  let mouseCat2 = mouse - cat2;
  let resultOfTheHunt = '';
  if (mouseCat1 < 0) {
    mouseCat1 *= -1;
  }
  if (mouseCat2 < 0) {
    mouseCat2 *= -1;
  }
  if (mouseCat1 === mouseCat2) {
    resultOfTheHunt = 'os gatos trombam e o rato foge';
  } else if (mouseCat1 < mouseCat2) {
    resultOfTheHunt = 'cat1';
  } else {
    resultOfTheHunt = 'cat2';
  }
  return resultOfTheHunt;
}

// Desafio 8
function buildTheSentence(array, i) {
  if (array[i] % 3 === 0 && array[i] % 5 === 0) {
    return 'fizzBuzz';
  }
  if (array[i] % 3 === 0) {
    return 'fizz';
  }
  if (array[i] % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  // seu código aqui
  let phrase = [];
  for (let i = 0; i < array.length; i += 1) {
    const index = i;
    const word = buildTheSentence(array, index);
    phrase.push(word);
  }
  return phrase;
}

// Desafio 9
//  Raphael Martins - Turma 19 - Tribo A me ajudou nesse código
function encode(string) {
  // seu código aqui
  let lowercaseString = string.split('');
  const caracter = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let i = 0; i < lowercaseString.length; i += 1) {
    if (caracter[lowercaseString[i]]) {
      lowercaseString[i] = caracter[lowercaseString[i]];
    }
  }
  lowercaseString = lowercaseString.join('');
  return lowercaseString;
}

function decode(string) {
  // seu código aqui
  let lowercaseString = string.split('');
  const caracter = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < lowercaseString.length; i += 1) {
    if (caracter[lowercaseString[i]]) {
      lowercaseString[i] = caracter[lowercaseString[i]];
    }
  }
  lowercaseString = lowercaseString.join('');
  return lowercaseString;
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
