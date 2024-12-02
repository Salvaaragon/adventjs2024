const TEST_CASES = [
  {
    names: ["midu", "madeval", "educalvolpz"],
    expectedResult:
      "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************",
  },
  {
    names: ["midu"],
    expectedResult: "********\n* midu *\n********",
  },
  {
    names: ["a", "bb", "ccc"],
    expectedResult: "*******\n* a   *\n* bb  *\n* ccc *\n*******",
  },
  {
    names: ["a", "bb", "ccc", "dddd"],
    expectedResult:
      "********\n* a    *\n* bb   *\n* ccc  *\n* dddd *\n********",
  },
];

function createFrame(names) {
  const longestName = [...names].sort((a, b) => b.length - a.length)[0].length;
  const border = "*".repeat(longestName + 4);

  const getNameString = (name) =>
    `* ${name} ${" ".repeat(longestName - name.length)}*`;

  return [border, ...names.map(getNameString), border].join("\n");
}

TEST_CASES.forEach((data) => {
  const { names, expectedResult } = data;
  const result = createFrame(names);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ names });
  console.log(result);
});
