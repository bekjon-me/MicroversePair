function hurdleRace(k, height) {
  let maxNum = 0;
  height.map((num) => {
    if (num > maxNum) maxNum = num;
  });

  if (maxNum - k > 0) return maxNum - k;

  return 0;
}
