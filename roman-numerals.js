/*
    Task:
    Створіть функцію, яка отримує римське число як аргумент і повертає
    його значення у вигляді цілого числа з десятковою комою.
    Вам не потрібно перевіряти правильність форми римських чисел.
    Сучасні римські цифри записуються шляхом вираження кожної
    десяткової цифри числа, що кодується, окремо, починаючи з
    крайньої лівої цифри і пропускаючи всі 0. Таким чином, 1990 рік
    записується як "MCMXC"  1000   M, 900   CM, 90   XC , а 2008 рік - як
    "MMVIII"  2000   MM, 8   VIII . У римській цифрі 1666, "MDCLXVI",
    використовуються всі літери в порядку спадання.

    Notes:
    1 -	I
    5	- V
    10 - X
    50 - L
    100 - C
    500 - D
    1,000 - M
*/

const { test } = require("./tests");

const romanToArabianMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

/**
 * Performs the convert action for each element of letters array.
 * @param romanNumeral  Roman Numberal String. Examples: MCMXC, MDCLXVI
 * @returns Number  Converted arabian number
 */
const convertRomanToArabianNumber = (romanNumeral) => {
  let finalNumber = 0;
  const letters = [...romanNumeral];

  for (let i = 0; i < letters.length; i++) {
    const currentValue = romanToArabianMap.get(letters[i]);
    // Need check on letters combinations such as IV, IX, XL, CM and etc.
    const nextValue = romanToArabianMap.get(letters[i + 1]);

    // If nextValue is not undefined and currentValues less than nextValue then
    // we need subtract this two values before add it to finalNumber
    if (nextValue && currentValue < nextValue) {
      finalNumber += nextValue - currentValue;
      i++;
      continue;
    }

    finalNumber += currentValue;
  }
  return finalNumber;
};

// Test function
const testValues = [
  { testValue: "MCMXC", assertValue: 1990 },
  { testValue: "MMVIII", assertValue: 2008 },
  { testValue: "MDCLXVI", assertValue: 1666 },
];
test(testValues, convertRomanToArabianNumber);
