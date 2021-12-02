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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let mouseCat1 = mouse - cat1;
  let mouseCat2 = mouse - cat2;
  let resultOfTheHunt = '';
  if (mouseCat1 < 0) {
    mouseCat1 = mouseCat1 * -1;
  }
  if (mouseCat2 < 0) {
    mouseCat2 = mouseCat2 * -1;
  }
  if (mouseCat1 === mouseCat2) {
    resultOfTheHunt = "os gatos trombam e o rato foge";
  } else if (mouseCat1 < mouseCat2) {
    resultOfTheHunt = "cat1";
  } else {
    resultOfTheHunt = "cat2";
  }
  return resultOfTheHunt;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let phrase = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      phrase.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      phrase.push("fizz");
    } else if (array[i] % 5 === 0) {
      phrase.push("buzz");
    } else {
      phrase.push("bug!");
    }
  }
  return phrase;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let lowercaseString = string.split('');
  for (let i = 0; i < lowercaseString.length; i += 1) {
  switch (lowercaseString[i]) {
    case 'a':
      lowercaseString[i] = 1;
      break;
    case 'e':
      lowercaseString[i] = 2
      break;
    case 'i':
      lowercaseString[i] = 3;
      break;
    case 'o':
      lowercaseString[i] = 4;
      break;
    case 'u':
      lowercaseString[i] = 5;
      break;
  }
  }
  lowercaseString = lowercaseString.join('');
  return lowercaseString;
}
function decode(string) {
  // seu código aqui
  let lowercaseString = string.split('');
  for (let i = 0; i < lowercaseString.length; i += 1) {
    switch (lowercaseString[i]) {
      case '1':
        lowercaseString[i] = 'a';
        break;
      case '2':
        lowercaseString[i] = 'e'
        break;
      case '3':
        lowercaseString[i] = 'i';
        break;
      case '4':
        lowercaseString[i] = 'o';
        break;
      case '5':
        lowercaseString[i] = 'u';
        break;
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
