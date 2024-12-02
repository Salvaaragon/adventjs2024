const TEST_CASES = [
  {
    gifts: [3, 1, 2, 3, 4, 2, 5],
    expectedResult: [1, 2, 3, 4, 5],
  },
  {
    gifts: [6, 5, 5, 5, 5],
    expectedResult: [5, 6],
  },
  {
    gifts: [],
    expectedResult: [],
  },
];

function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b);
}

TEST_CASES.forEach((data) => {
  const { gifts, expectedResult } = data;
  const result = prepareGifts(gifts);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ gifts, result });
});
