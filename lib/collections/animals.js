Animals = new Mongo.Collection('animals');

Meteor.methods({

  addAnimal: function(animal) {
      check(animal.name, String);

      _.extend(animal, {"rank": 0});
      Animals.insert(animal);
  },

  updateAnimalRank: function(id, rank) {
    Animals.update(id, {$set: {rank: rank}});
  },
  
  editAnimal: function(animal){
    Animals.update(animal.id, {$set: {
        name: animal.name
    }});
  },

  deleteAnimal: function(animal) {
    Animals.remove(animal);
  }

});
