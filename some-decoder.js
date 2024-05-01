/*
    Task:
    Мета цієї вправи полягає у перетворенні рядка у новий рядок,
    у якому кожен символ є "(", якщо він зустрічається у
    вихідному рядку лише один раз, або ")", якщо він зустрічається
    у вихідному рядку більше одного разу.Ігноруйте великі
    літери при визначенні того, чи є символ дублікатом.

    Examples:
    "din" ⇒ "((("
    "recede" ⇒ "()()()"
    "success" ⇒ ")())())"
    "(( @" ⇒ "))(("
*/

const { test } = require("./tests");

/**
 * Function to decode input string
 * @param value  Input string, example: JavaScript
 * @returns String  Decoded string
 */
const decode = (value) => {
  let decodedString = "";
  const charRepeatMap = new Map();
  const chars = [...value.toLowerCase()];

  chars.forEach((char) => {
    charRepeatMap.set(char, (charRepeatMap?.get(char) || 0) + 1);
  });
  chars.forEach((char) => {
    decodedString += charRepeatMap.get(char) > 1 ? ")" : "(";
  });

  return decodedString;
};

const testValues = [
  { testValue: "din", assertValue: "(((" },
  { testValue: "recede", assertValue: "()()()" },
  { testValue: "success", assertValue: ")())())" },
  { testValue: "(( @", assertValue: "))((" },
];
test(testValues, decode);
