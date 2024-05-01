const test = (testValues, cb, comparator = null) => {
  let passedTestsCounter = 0;
  testValues.forEach((value, index) => {
    const result = cb(value.testValue);
    const condition = comparator
      ? comparator(result, value.assertValue)
      : result === value.assertValue;

    console.log(
      `Test #${index + 1} ${condition ? "passed" : "failed"}, assert value: "${value.assertValue}", actual: "${result}"`,
    );
    passedTestsCounter += +condition;
  });
  console.log(`Passed ${passedTestsCounter} of ${testValues.length} tests`);
};

module.exports = { test };
