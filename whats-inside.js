/*
    Task:
    За заданими двома масивами рядків a1 та a2 повернути
    відсортований масив r у лексикографічному порядку
    рядків a1, які є підрядками рядків a2

    Example 1:
      a1  = [ "arp", "live", "strong"]
      a2  = [ "lively", "alive", "harp", "sharp", "armstrong"]
      повертає ["arp", "live", "strong"]
    Example 2:
      a1  = ["tarp", "mice", "bull"]
      a2  = ["lively", "alive", "harp", "sharp", "armstrong"]
      повертає []
*/

const { test } = require("./tests");

/**
    Create new array of substrings
    @param Array[Array, Array]  Array of two arrays of strings
    @returns Array  New array of strings
*/
const createNewArray = (arrays) => {
  const r = [];

  // Find all substrings and push to array "r"
  arrays[0].forEach(
    (item1) =>
      arrays[1].some((item2) => item2.includes(item1)) && r.push(item1),
  );

  // alphabetic sort array and then return it
  return r.sort();
};

const testValues = [
  {
    testValue: [
      ["arp", "live", "strong"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ],
    assertValue: ["arp", "live", "strong"],
  },
  {
    testValue: [
      ["tarp", "mice", "bull"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ],
    assertValue: [],
  },
];
test(testValues, createNewArray, (x, y) => x.toString() == y.toString());
