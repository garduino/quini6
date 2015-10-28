if (Meteor.isClient) {

function calculateWinners() {

  var winners = [];
  // winners.length = 6;
  var counter;
  var founded;
  var i = 1;

  // Store the first number of the array
  // Random calculation as in http://www.w3schools.com/jsref/jsref_random.asp
  var number = Math.floor((Math.random() * 45) + 1);
  winners.push(number);
  // winners[1] = number;
  // Debugging Info
  // console.log('Primer número', number, winners);

  while (i < 6) {

    number = Math.floor((Math.random() * 45) + 1);
    // Debugging Info
    // console.log('Elemento número', i+1,'del array', number, winners);

    while (contains(winners, number)) {
      // Debugging Info
      // console.log('Numero existente!', number, winners);
      number = Math.floor((Math.random() * 45) + 1);
    }

    // Debugging Info
    // console.log('Numero correcto!', number, winners);
    winners.push(number);
    // Debugging Info
    // console.log('Ahora winners es: ', winners);
    i++;
}

  this.sortedWinners = winners.sort(ascending);
  // return sortedWinners;
  Session.set('currentWinners', sortedWinners);


  // Functions
  // Order a numeric array, taken from http://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=834:funciones-arrays-javascript-push-sort-ordenar-numeros-concat-join-pop-shift-slice-splice-etc-cu01153e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206
  function ascending (elem1, elem2) { return elem1 - elem2; }

  // Function for detecting duplicates because (number in winners) don not works always.
  // Several times fails in detect a duplicate.
  // The next function was taken from http://stackoverflow.com/questions/237104/array-containsobj-in-javascript
  function contains(winners, number) {
    for (var ix = 0; ix < winners.length; ix++) {
        if (winners[ix] === number) {
            return true;
        }
    }
    return false;
}

}

Template.main.helpers({
    sortedWinners: function (event, template) {

      calculateWinners();

      return Session.get('currentWinners');

    }
  });


  Template.main.events({
    'click button': function (event, template) {

      calculateWinners();

    }

  });


}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });  
}
