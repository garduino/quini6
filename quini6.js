if (Meteor.isClient) {
  // counter starts at 0
  //Session.setDefault('winners', 0);

  Template.try.helpers({
    sortedWinners: function () {

      var winners = [0, 0, 0, 0, 0, 0];

      for (step = 0; step < 6; step++) {
        // Calculo random según http://www.w3schools.com/jsref/jsref_random.asp
        var number = Math.floor((Math.random() * 45) + 1);
        winners[step] = number;
      }

      var sortedWinners = winners.sort(ascending);
      //console.log(sortedWinners);
      return sortedWinners;

      // Functions

      // Order a numeric array, taken from http://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=834:funciones-arrays-javascript-push-sort-ordenar-numeros-concat-join-pop-shift-slice-splice-etc-cu01153e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206

      function ascending (elem1, elem2) { return elem1 - elem2; }

      // return Session.get('sortedWinners');
    }
  });

  Template.try.events({
    'click button': function () {
      // increment the counter when button is clicked
      //Session.set('sortedWinners', Session.get('sortedWinners'));
      sortedWinners;





    }
  });








}





if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
