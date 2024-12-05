const TEST_CASES = [
  {
    shoes: [
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 42 },
    ],
    expectedResult: [38, 42],
  },
  {
    shoes: [
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "I", size: 38 },
      { type: "I", size: 38 },
      { type: "R", size: 38 },
    ],
    expectedResult: [38, 38],
  },
  {
    shoes: [
      { type: "I", size: 38 },
      { type: "R", size: 36 },
      { type: "I", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 42 },
    ],
    expectedResult: [],
  },
  {
    shoes: [
      { type: "I", size: 35 },
      { type: "R", size: 35 },
      { type: "I", size: 35 },
      { type: "R", size: 35 },
      { type: "I", size: 35 },
      { type: "R", size: 35 },
    ],
    expectedResult: [35, 35, 35],
  },
];

function organizeShoes(shoes) {
  const counter = {};
  const result = [];

  for (const { size, type } of shoes) {
    counter[size] ??= { I: 0, R: 0 };
    counter[size][type]++;

    if (counter[size].I && counter[size].R) {
      result.push(size);
      counter[size].I--;
      counter[size].R--;
    }
  }

  return result;
}

TEST_CASES.forEach((data) => {
  const { shoes, expectedResult } = data;
  const result = organizeShoes(shoes);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ shoes, result });
});
