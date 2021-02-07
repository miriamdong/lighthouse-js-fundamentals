function loopyLighthouse( range, multiples, words ) {
  let x = range[ 0 ];
  let y = range[ 1 ];
  for ( x; x <= y; x++ ) {
    if ( x % multiples[ 1 ] === 0 && x % multiples[ 0 ] === 0 ) {
      console.log( words[ 0 ] + words[ 1 ] );
    } else if ( x % multiples[ 0 ] === 0 ) {
      console.log( words[ 0 ] );
    } else if ( x % multiples[ 1 ] === 0 ) {
      console.log( words[ 1 ] );
    } else {
      console.log( x );
    }
  }
}

loopyLighthouse( [ 15, 90 ], [ 2, 5 ], [ "Batty", "Beacon" ] );