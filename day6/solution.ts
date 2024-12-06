function inBox(box: string[]): boolean {
  let giftInsideBox: boolean = true;
  let boxIncludesGift: boolean = false;

  for (const [idx, row] of box.entries()) {
    let giftIdx: number = row.indexOf("*");
    if (giftIdx !== -1) {
      boxIncludesGift = true;
      let isFirstOrLastChar: boolean = [0, row.length - 1].includes(giftIdx);
      let isFirstOrLastRow: boolean = [0, box.length - 1].includes(idx);
      giftInsideBox = !(isFirstOrLastChar || isFirstOrLastRow);
    }
  }

  return giftInsideBox && boxIncludesGift;
}
