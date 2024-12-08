const TEST_CASES = [
  {
    packages: "a(cb)de",
    expectedResult: "abcde",
  },
  {
    packages: "a(bc(def)g)h",
    expectedResult: "agdefcbh",
  },
  {
    packages: "abc(def(gh)i)jk",
    expectedResult: "abcighfedjk",
  },
  {
    packages: "a(b(c))e",
    expectedResult: "acbe",
  },
];

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const regex = /(?<=\()[^()]+(?=\))/;

  while (regex.test(packages)) {
    const match = packages.match(regex)[0];
    const rev = match.split("").reverse();
    packages = packages.replace(`(${match})`, rev.join(""));
  }

  return packages;
}

TEST_CASES.forEach((data) => {
  const { packages, expectedResult } = data;
  const result = fixPackages(packages);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ packages, result });
});
