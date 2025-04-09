
function mbj(obj1, obj2) {
  return { ...obj1, ...obj2 };
}


console.log(mbj({ a: 1 }, { b: 3, c: 4 }));
