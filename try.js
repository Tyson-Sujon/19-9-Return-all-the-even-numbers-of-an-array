function addArray(sum) {
  let add = [];
  for (const element of sum) {
    add = element.unshift(add);
  }
  return add;
}
const addition = addArray([1, 2, 3, 4]);

console.log("sum of Array", addition);

// let num=[1,2];
// let num2 =
