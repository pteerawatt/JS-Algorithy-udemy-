// solve fibonacci w/o dynamic programming
// find the nth number in the fibonacci sequence
// fib sequence: 1, 1, 2, 3, 5, 8, 13, ...

const fibSeq = (n) => {
  if (n < 2) return 1;
  return fibSeq(n - 2) + fibSeq(n - 1) 
}

// using dynamic programming we can store sub problems so we dont have to keep calculating the same f(n) over and over

const fibSeqDP = (n, sto = {}) => {
  if (n < 2) return 1;
  if (sto[n]) return sto[n];
  sto[n] = fib(n - 2, sto) + fib(n - 1, sto);
  return sto[n];
}

// next we use dynamic programming but we start from the button of the tree and work out way up.

const fibSeqDP_BU = (n) => {
  // start the sequence
  let sto = [1, 1];

  // loop till we get to the nth sequence and return the nth value
  for (let i = 2; i <= n; i++) {
    sto[i] = sto[i-1] + sto[i-2];
  }
  return sto[n];
}