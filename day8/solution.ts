function drawRace(indices: number[], length: number): string {
  const ROAD_CHAR: string = "~";
  const REINDEER_CHAR: string = "r";
  const SPACE_CHAR: string = " ";

  const road: string = ROAD_CHAR.repeat(length);
  const result: string[] = indices.map((indice, idx) => {
    const spaces = SPACE_CHAR.repeat(indices.length - 1 - idx);
    const roadWithReindeer: string[] = road.split("");
    if (indice) roadWithReindeer.splice(indice, 1, REINDEER_CHAR);
    return [spaces, roadWithReindeer.join(""), ` /${idx + 1}`].join("");
  });
  return result.join("\n");
}
