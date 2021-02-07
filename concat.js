function concat( arr1, arr2 ) {
  let output = [];
  for ( let i = 0; i <= arr1.length; i++ ) {
    output = arr1;
  }
  for ( let j = 0; j < arr2.length; j++ ) {
    output.push( arr2[ j ] );
  }

  return output;
}

console.log( concat( [ 1, 2, 3 ], [ 4, 5, 6 ] ), "=?", [ 1, 2, 3, 4, 5, 6 ] );
console.log( concat( [ 0, 3, 1 ], [ 9, 7, 2 ] ), "=?", [ 0, 3, 1, 9, 7, 2 ] );
console.log( concat( [], [ 9, 7, 2 ] ), "=?", [ 9, 7, 2 ] );
console.log( concat( [ 5, 10 ], [] ), "=?", [ 5, 10 ] );