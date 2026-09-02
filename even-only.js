/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 *
 */

function evenNum(num1) {
  for (const element of num1) {
    let add = [];
    console.log(element);
    if (element % 2 === 0) {
      add = element.unshift();
    }
  }
}

const number = evenNum([12, 3, 44, 5, 64, 31, 42]);
