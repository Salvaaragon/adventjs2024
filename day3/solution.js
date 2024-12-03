const TEST_CASES = [
  {
    inventory: [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
    ],
    expectedResult: {
      toys: { doll: 5, car: 5 },
      sports: { ball: 2, racket: 4 },
    },
  },
  {
    inventory: [
      { name: "book", quantity: 10, category: "education" },
      { name: "book", quantity: 5, category: "education" },
      { name: "paint", quantity: 3, category: "art" },
    ],
    expectedResult: {
      education: { book: 15 },
      art: { paint: 3 },
    },
  },
];

function organizeInventory(inventory) {
  return inventory.reduce((result, { category, name, quantity }) => {
    result[category] ||= {};
    result[category][name] = result[category][name] ||= 0;
    result[category][name] += quantity;
    return result;
  }, {});
}

TEST_CASES.forEach((data) => {
  const { inventory, expectedResult } = data;
  const result = organizeInventory(inventory);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ inventory, result });
});
