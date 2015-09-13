Template.animals.helpers({
  animals: function() {
    return Animals.find({},{ sort: {rank: 1}});
  }
});


Template.animals.events({
  'click #add': function(e) {
    e.preventDefault();
     ModalHelper.openModalFor(null);
//    Modal.show('animalsModal');
  }
});
