const TEST_CASES = [
  {
    indices: [0, 5, -3],
    length: 10,
    expectedResult: "  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3",
  },
  {
    indices: [2, -1, 0, 5],
    length: 8,
    expectedResult: "   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4",
  },
  {
    indices: [3, 7, -2],
    length: 12,
    expectedResult: "  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3",
  },
];

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  const ROAD_CHAR = "~";
  const REINDEER_CHAR = "r";
  const SPACE_CHAR = " ";

  const road = ROAD_CHAR.repeat(length);
  const result = indices.map((indice, idx) => {
    const spaces = SPACE_CHAR.repeat(indices.length - 1 - idx);
    const roadWithReindeer = road.split("");
    if (indice) roadWithReindeer.splice(indice, 1, REINDEER_CHAR);
    return [spaces, roadWithReindeer.join(""), ` /${idx + 1}`].join("");
  });
  return result.join("\n");
}

TEST_CASES.forEach((data) => {
  const { indices, length, expectedResult } = data;
  const result = drawRace(indices, length);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ indices, length });
  console.log(result);
});
