const moves = [ 'north', 'north', 'west', 'west', 'north', 'east', 'north' ];
let position = [ 0, 0 ];
const finalPosition = function ( moves ) {

  for ( let move of moves ) {
    let x = position[ 0 ];
    let y = position[ 1 ];
    if ( move === "north" ) {
      position = [ x, y + 1 ];
    } else if ( move === "south" ) {
      position = [ x, y - 1 ];
    } else if ( move === "west" ) {
      position = [ x - 1, y ];
    } else if ( move === "east" ) {
      position = [ x + 1, y ];
    }
  }
  return position;
};

console.log( finalPosition( moves ) );