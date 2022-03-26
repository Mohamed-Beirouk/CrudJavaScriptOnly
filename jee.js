var x = [2, 5, 6, 9 ]; 
call_me(x);

function call_me(array1) {

  const map1 = array1.map(x => x + (x-1));
  console.log(map1);
  
}


// TP JS: table : last name first name gender date of birth actions.
// actions(update (nouveau form),delete(demande de confirmation !!!)).
// trier par tout.