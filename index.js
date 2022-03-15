function countDown (n, arr =[]) {
  if (n<=0) {return arr;};
  arr.push(n)
  return countDown(n-1,arr);
}

console.log(countDown(35));

//////////////////////////////

function countdown(n) {
    if (n < 1) return [];
    return [n, ...countdown(n - 1)];
}

console.log(countdown(5));