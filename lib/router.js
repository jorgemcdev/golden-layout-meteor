Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
    Meteor.subscribe('animals');
  }
});

Router.route('/',{
  name: 'animals'
});

Router.route('/golden',{
  name: 'golden'
});

Router.route('/golden-list',{
  name: 'goldenList'
});
