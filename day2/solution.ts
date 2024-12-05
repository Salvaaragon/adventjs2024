function createFrame(names: string[]): string {
  const longestName = [...names].sort((a, b) => b.length - a.length)[0].length;
  const border = "*".repeat(longestName + 4);

  const getNameString = (name: string) =>
    `* ${name} ${" ".repeat(longestName - name.length)}*`;

  return [border, ...names.map(getNameString), border].join("\n");
}
