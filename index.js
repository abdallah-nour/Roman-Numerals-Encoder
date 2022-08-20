/**
 * 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
 * 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
 * NOTICE:
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 */

const romanToIntMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string}
 * @return {number}
 */
function romanToInt(roman = '') {
  return roman.split('').reduce((acc, curr, index) => {
    const currentInt = romanToIntMap[curr];
    const nextInt = romanToIntMap[roman[index + 1]];
    if (currentInt < nextInt) return acc - currentInt;
    return acc + currentInt;
  }, 0);
}

function romanToInt2(roman = '') {
  return roman
    .split('')
    .reduce(
      (acc, curr, index) =>
        romanToIntMap[curr] < romanToIntMap[roman[index + 1]]
          ? acc - romanToIntMap[curr]
          : acc + romanToIntMap[curr],
      0
    );
}

module.exports = romanToInt;
