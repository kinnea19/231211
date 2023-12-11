function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) return true;
  else return false;
}

console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))