const test = (testValues, cb, comparator = null) => {
  testValues.forEach((value, index) => {
    const result = cb(value.testValue);
    const condition = comparator
      ? comparator(result, value.assertValue)
      : result === value.assertValue;

    console.log(
      `Test #${index + 1} ${condition ? "passed" : "failed"}, assert value: "${value.assertValue}", actual: "${result}"`,
    );
    value.success = condition;
  });
  console.log(
    `Passed ${testValues.reduce((acc, curr) => acc + +curr.success, 0)} of ${testValues.length} tests`,
  );
};

module.exports = { test };
