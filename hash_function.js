const hash = (key, arrayLen) => {
  let total = 0;
  let primeNum = 31;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * primeNum + value) % arrayLen;
  }
  return total;
}