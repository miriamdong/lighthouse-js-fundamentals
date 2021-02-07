function range( start, end, step ) {
  let arr = [];
  arr[ 0 ] = start;
  for ( let i = 0; i <= arr.length; i++ ) {
    if ( start > end || step <= 0 || start === undefined || end === undefined || step === undefined ) {
      arr.length = 0;
    } else {
      while ( ( arr[ i ] + step ) <= end ) {
        arr.push( arr[ i ] + step );
        i++;

      }
    }
  }
  return arr;
}


console.log( range( 0, 10, 2 ) );
console.log( range( 10, 30, 5 ) );
console.log( range( -5, 2, 3 ) );