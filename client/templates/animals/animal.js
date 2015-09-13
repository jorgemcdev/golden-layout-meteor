Template.animals.rendered = function() {
  this.$('#animals').sortable({
    stop: function(e, ui) {
      // get the dragged html element and the one before
      //   and after it
      el = ui.item.get(0)
      before = ui.item.prev().get(0)
      after = ui.item.next().get(0)

      // Here is the part that blew my mind!
      //  Blaze.getData takes as a parameter an html element
      //    and will return the data context that was bound when
      //    that html element was rendered!
      if(!before) {
        //if it was dragged into the first position grab the
        // next element's data context and subtract one from the rank
        newRank = Blaze.getData(after).rank - 1
      } else if(!after) {
        //if it was dragged into the last position grab the
        //  previous element's data context and add one to the rank
        newRank = Blaze.getData(before).rank + 1
      }
      else
        //else take the average of the two ranks of the previous
        // and next elements
        newRank = (Blaze.getData(after).rank +
                   Blaze.getData(before).rank)/2

      //update the dragged Item's rank
      Meteor.call('updateAnimalRank', Blaze.getData(el)._id, newRank, function(error, result) {
        if (error) {
          alert(error);
        }
      });
    }
  })
};

Template.animal.events({

  'click #delete': function(e){
    e.preventDefault();

    Meteor.call('deleteAnimal', this, function(error, result){
      if(error){
          alert('Error deleting!')
      }
    });
  },

  'click #edit': function(e){
    e.preventDefault();

    animal = $(e.target).closest('.animal')
    animalId = animal.attr('data-id')
    ModalHelper.openModalFor(animalId);

  }

});
