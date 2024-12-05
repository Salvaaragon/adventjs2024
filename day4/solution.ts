function createXmasTree(height: number, ornament: string): string {
  const SPACE_CHAR: string = "_";
  const TRUNK_CHAR: string = "#";
  const baseSpaces: string = SPACE_CHAR.repeat(height - 1);
  const base: string = [baseSpaces, TRUNK_CHAR, baseSpaces].join("");
  const tree: string[] = [];

  for (let idx = height - 1; idx >= 0; idx--) {
    const sheets: string = ornament.repeat(idx);
    const spaces: string = SPACE_CHAR.repeat(height - 1 - idx);
    const branch: string = [spaces, sheets, ornament, sheets, spaces].join("");
    tree.unshift(branch);
  }

  return [...tree, base, base].join("\n");
}
