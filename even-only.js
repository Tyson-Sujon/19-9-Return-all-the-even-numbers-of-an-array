/**
 * create function that will return only the even numbers
 *
 */

function evenNum(num1) {
  let add = [];
  for (const element of num1) {
    if (element % 2 === 0) {
      //   let x = add.push();
      add.push(element);
    }
  }
  return add;
}

const number = evenNum([12, 3, 44, 5, 64, 31, 42]);

console.log(number);
