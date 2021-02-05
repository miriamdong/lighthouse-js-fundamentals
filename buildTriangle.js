function makeLine( length ) {
  var line = "";
  for ( var j = 1; j <= length; j++ ) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle( length ) {
  let triangle = "";
  for ( let height = 1; height <= length; height++ ) {
    triangle = triangle + makeLine( height );
  }
  return triangle;
}
console.log( buildTriangle( 10 ) );