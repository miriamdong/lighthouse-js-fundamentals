const whichSchool = function ( age ) {
  if ( age < 13 ) {
    return "Elementary School";
  } else if ( age <= 18 && age >= 13 ) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}