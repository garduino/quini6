if (Meteor.isClient) {
// var winners = [0, 0, 0, 0, 0, 0];

function calculateWinners() {

  var winners = [0, 0, 0, 0, 0, 0];

  Session.set(winners);

  for (step = 0; step < 6; step++) {
    // Calculo random según http://www.w3schools.com/jsref/jsref_random.asp
    var number = Math.floor((Math.random() * 45) + 1);
    winners[step] = number;
  }

  // var sortedWinners = winners.sort(ascending);
  //console.log(sortedWinners);
  // return sortedWinners;
  this.sortedWinners = winners.sort(ascending);
  return sortedWinners;

  // Functions

  // Order a numeric array, taken from http://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=834:funciones-arrays-javascript-push-sort-ordenar-numeros-concat-join-pop-shift-slice-splice-etc-cu01153e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206

  function ascending (elem1, elem2) { return elem1 - elem2; }

 }


Template.main.helpers({
    sortedWinners: function (event, template) {
      // Con el return siguiente se despliega en el texto del html.
      //return calculateWinners();

      Session.set(calculateWinners());

      //var x = calculateWinners();
      //alert("Es probable que salgan estos números: " + x);

    }
  });

  Template.main.events({
    'click button': function (event, template) {
      // var x = calculateWinners();
      //alert("Es probable que salgan estos números: " + x);
      //
      // No logro aún encontrar una forma de actualizar el template, por eso
      // estoy usando el alert
      // event.target.show.Template.try();
      // return helperFunctions();
      // return Template.instance().sortedWinners = calculateWinners();
      // return Template.instance().sortedWinners.set();
      // Template.try.instance().sortedWinners.set(x);

      // var x = calculateWinners();
      // Session.set('Template.main', calculateWinners());

      Session.set('calculateWinners');

      // return calculateWinners();

    }

  });


}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
