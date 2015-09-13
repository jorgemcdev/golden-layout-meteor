Template.golden.onRendered(function () {

  var config = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'testComponent',
            componentState: { id: 'id_1', label: 'a' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testComponent',
                componentState: { id: 'id_2', label: 'b' }
            },{
                type: 'component',
                componentName: 'testComponent',
                componentState: { id: 'id_3', label: 'c' }
            }]
        }]
    }]
  };

  this.myLayout = new GoldenLayout( config );

  this.myLayout.registerComponent( 'testComponent', function( container, componentState ){
    container.getElement().html( '<div class="'+ componentState.id +'">' + componentState.label + '</div>' );
  });

  this.myLayout.init();

  var data = Animals.find({},{ sort: {rank: 1}});
  var templateHTML = Blaze.renderWithData(Template.goldenList,data,$('.id_1')[0]);

});


Template.golden.onDestroyed(function () {

     this.myLayout.destroy();

});
