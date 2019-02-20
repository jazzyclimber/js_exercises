const sumAll = function(low, high) {
  if (low < 0 || high < 0) return 'ERROR';
  if (typeof low !== "number" || typeof high !== "number") return "ERROR";
  if (low > high) {
    const temp = low;
    low = high;
    high = temp;
  }

  //set variable for summation
  let total = 0;

  //Iterate through numbers array and add to total
  for (let count = low; count <= high; count++) {
    total += count;
  }
  return total
}
module.exports = sumAll
