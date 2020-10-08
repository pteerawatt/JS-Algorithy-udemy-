// write a recursive function that returns the sum of even numbers in all posible nested objects

function nestedEvenSum (obj, total = 0) {
  // iterate over the property
  for (let key in obj) {
      // if even, add to total
      if (obj[key] % 2 === 0) total += obj[key];
      // if obj, total += recuse total
      if (typeof obj[key] === "object") total += nestedEvenSum(obj[key]);
  }
  return total
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10