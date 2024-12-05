type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const counter: { I: number; r: number } | {} = {};
  const result: number[] = [];

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
