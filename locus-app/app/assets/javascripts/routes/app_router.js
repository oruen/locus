Locus.Router = Ember.Router.extend({
  location: 'hash',
  enableLogging: true,

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      editPerson: Ember.Route.transitionTo('edit'),
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('people');
      }

      // Layout your routes here...
    }),
    edit: Ember.Route.extend({
      route: '/people/:id',

      peopleList: Em.Route.transitionTo('index'),
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('person', context);
      },
      deserialize: function(router, urlParams) {
        return router.get('peopleController.content').find(function(item) {
          return item.get('id') === parseInt(urlParams.id);
        });
      }
    })
  })
});

