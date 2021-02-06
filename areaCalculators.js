let calculateRectangleArea = function ( length, width ) {
  if ( length >= 0 && width >= 0 ) {
    return length * width;
  } else {
    return undefined;
  }
};

let calculateTriangleArea = function ( base, height ) {
  if ( base >= 0 && height >= 0 ) {
    return base * height / 2;
  } else {
    return undefined;
  }
};

const calculateCircleArea = function ( radius ) {
  if ( radius >= 0 ) {
    return Math.PI * Math.pow( radius, 2 );
  } else {
    undefined;
  }
}

console.log( calculateRectangleArea( 10, 5 ) ); // should print 50
console.log( calculateRectangleArea( 1.5, 2.5 ) ); // should print 3.75
console.log( calculateRectangleArea( 10, -5 ) ); // should print undefined

console.log( calculateTriangleArea( 10, 5 ) ); // should print 25
console.log( calculateTriangleArea( 3, 2.5 ) ); // should print 3.75
console.log( calculateTriangleArea( 10, -5 ) ); // should print undefined

console.log( calculateCircleArea( 10 ) ); // should print 314.159...
console.log( calculateCircleArea( 3.5 ) ); // should print 38.484...
console.log( calculateCircleArea( -1 ) ); // should print undefined


let hasEnoughPlayers = function ( team ) {
  if ( team.length >= 7 ) {
    return true;
  } else {
    return false;
  }
};

var team = [ "Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter" ];
console.log( hasEnoughPlayers( team ) );