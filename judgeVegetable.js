const judgeVegetable = ( vegetables, metric ) => {
  let winner = 0;
  let name;
  vegetables.forEach( ( vegetable ) => {
    if ( vegetable[ metric ] > winner ) {
      name = vegetable.submitter;
      winner = vegetable[ metric ];
    }
  } );
  console.log( name );
};

const vegetables = [ {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

let metric = 'redness';

judgeVegetable( vegetables, metric );