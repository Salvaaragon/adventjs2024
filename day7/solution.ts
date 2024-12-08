function fixPackages(packages: string): string {
  const regex: RegExp = /(?<=\()[^()]+(?=\))/;

  while (regex.test(packages)) {
    const match = packages.match(regex)?.[0];
    if (match) {
      const rev = match.split("").reverse();
      packages = packages.replace(`(${match})`, rev.join(""));
    }
  }

  return packages;
}
