const TEST_CASES = [
  {
    box: ["###", "#*#", "###"],
    expectedResult: true,
  },
  {
    box: ["####", "#* #", "#  #", "####"],
    expectedResult: true,
  },
  {
    box: ["#####", "#   #", "#  #*", "#####"],
    expectedResult: false,
  },
  {
    box: ["#####", "#   #", "#   #", "#   #", "#####"],
    expectedResult: false,
  },
  {
    box: ["#####", "#   #", "##*#"],
    expectedResult: false,
  },
];

/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  let giftInsideBox = true;
  let boxIncludesGift = false;

  for (const [idx, row] of box.entries()) {
    let giftIdx = row.indexOf("*");
    if (giftIdx !== -1) {
      boxIncludesGift = true;
      let isFirstOrLastChar = [0, row.length - 1].includes(giftIdx);
      let isFirstOrLastRow = [0, box.length - 1].includes(idx);
      giftInsideBox = !(isFirstOrLastChar || isFirstOrLastRow);
    }
  }

  return giftInsideBox && boxIncludesGift;
}

TEST_CASES.forEach((data) => {
  const { box, expectedResult } = data;
  const result = inBox(box);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ box, result });
});
