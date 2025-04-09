function rArray(arr) {

  let reversiv = [];
 for (let i = arr.length - 1; i >= 0; i--) {
     reversiv.push(arr[i]);
     }
 return reversiv;

}
console.log(rArray([1,2,3,4,5,6,7]))