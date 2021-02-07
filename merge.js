function merge( arr1, arr2 ) {
  let output = [];
  for ( let i = 0; i <= arr1.length; i++ ) {
    output = arr1;
  }
  for ( let j = 0; j < arr2.length; j++ ) {
    output.push( arr2[ j ] );
  }
  output.sort( function ( a, b ) {
    return a - b;
  } );
  return output;

}
console.log( merge( [ 4, 5, 6 ], [ 1, 2, 3, 4 ] ), "=?", [ 1, 2, 3, 4, 4, 5, 6 ] );
console.log( merge( [ 4 ], [ 2, 5, 8 ] ), "=?", [ 2, 4, 5, 8 ] );
console.log( merge( [ 1, 2, 6 ], [] ), "=?", [ 1, 2, 6 ] );