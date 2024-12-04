const TEST_CASES = [
  {
    height: 5,
    ornament: "*",
    expectedResult:
      "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____",
  },
  {
    height: 3,
    ornament: "+",
    expectedResult: "__+__\n_+++_\n+++++\n__#__\n__#__",
  },
  {
    height: 6,
    ornament: "@",
    expectedResult:
      "_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____",
  },
];

function createXmasTree(height, ornament) {
  const SPACE_CHAR = "_";
  const TRUNK_CHAR = "#";
  const baseSpaces = SPACE_CHAR.repeat(height - 1);
  const base = [baseSpaces, TRUNK_CHAR, baseSpaces].join("");
  const tree = [];

  for (let idx = height - 1; idx >= 0; idx--) {
    const sheets = ornament.repeat(idx);
    const spaces = SPACE_CHAR.repeat(height - 1 - idx);
    const branch = [spaces, sheets, ornament, sheets, spaces].join("");
    tree.unshift(branch);
  }

  return [...tree, base, base].join("\n");
}

TEST_CASES.forEach((data) => {
  const { height, ornament, expectedResult } = data;
  const result = createXmasTree(height, ornament);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ height, ornament });
  console.log(result);
});
