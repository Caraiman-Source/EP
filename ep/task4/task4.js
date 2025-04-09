
function nrDuble(arr, value) {
  return arr.filter(x => x === value).length;
}

console.log(nrDuble([1, 2, 2, 3, 2, 4], 2)); // 3
