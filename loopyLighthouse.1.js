function loopyLighthouse( range, multiples, words ) {
  let result = [];
  result[ 0 ] = range[ 0 ];
  for ( let i = 0; i < result.length; i++ ) {
    while ( result[ i ] < range[ 1 ] ) {
      result.push( result[ i ] + 1 );
      i++;
    }

    for ( i = 0; i < result.length; i++ ) {
      if ( result[ i ] % multiples[ 0 ] === 0 && result[ i ] % multiples[ 1 ] === 0 ) {
        result[ i ] = words[ 0 ] + words[ 1 ];
      } else if ( result[ i ] % multiples[ 0 ] === 0 ) {
        result[ i ] = words[ 0 ];
      } else if ( result[ i ] % multiples[ 1 ] === 0 ) {
        result[ i ] = words[ 1 ];
      }
    }
    console.log( result );
  }
}

loopyLighthouse( [ 15, 90 ], [ 2, 5 ], [ "Batty", "Beacon" ] );