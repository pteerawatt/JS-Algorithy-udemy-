// solve fibonacci w/o dynamic programming
// find the nth number in the fibonacci sequence
// fib sequence: 1, 1, 2, 3, 5, 8, 13, ...

const fibSeq = (n) => {
  if (n <= 2) return 1;
  return fibSeq(n - 2) + fibSeq(n - 1) 
}