function judgeVegetable( vegetables, metric ) {
  let winner = 0;
  let name = '';
  vegetables.forEach( vegetable => {
    if ( vegetable[ metric ] > winner ) {
      name = vegetable.submitter;
      winner = vegetable[ metric ];
      console.log( name );
    }
  } );
}