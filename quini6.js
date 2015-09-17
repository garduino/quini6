if (Meteor.isClient) {

function calculateWinners() {

  var winners = [];
  // winners.length = 6;
  var counter;
  var founded;
  var i = 1;

  while (i < 7) {
    // Calculo random según http://www.w3schools.com/jsref/jsref_random.asp
    var number = Math.floor((Math.random() * 45) + 1);

    while (number in winners) {
      console.log(number, winners)
      var number = Math.floor((Math.random() * 45) + 1);
    }

    // http://chuwiki.chuidiang.org/index.php?title=Arrays_y_Objetos_en_JavaScript
    // founded = number in winners;
    // console.log(founded, i, number);

    winners.push(number);
    i++;
}

  this.sortedWinners = winners.sort(ascending);
  return sortedWinners;

  // Functions
  // Order a numeric array, taken from http://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=834:funciones-arrays-javascript-push-sort-ordenar-numeros-concat-join-pop-shift-slice-splice-etc-cu01153e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206
  function ascending (elem1, elem2) { return elem1 - elem2; }
}


Template.main.helpers({
    sortedWinners: function (event, template) {
      // Con el return siguiente se despliega en el texto del html.
      return calculateWinners();

      // Session.set('sortedWinners', calculateWinners());

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
      // Session.set('sortedWinners', x);

      Session.set('sortedWinners', calculateWinners());

      // return calculateWinners();

    }

  });


}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
