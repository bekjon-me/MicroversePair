function utopianTree(n) {
  let height = 1;
  let cycle = 1;
  for (let i = 0; i < n; i++) {
    if (cycle % 2 === 0) {
      height *= 2;
    } else {
      height++;
    }
  }
  return height;
}
