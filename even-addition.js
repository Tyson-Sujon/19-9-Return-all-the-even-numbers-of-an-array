/**return the sum of even numbers */
function addEven(num1) {
  let sum = 0;
  for (const first of num1) {
    if (first % 2 === 0) {
      sum = sum + first;
    }
  }
  return sum;
}

const result = addEven([2, 4, 3, 6, 8, 9, 7, 5, 0]);

console.log(result);
