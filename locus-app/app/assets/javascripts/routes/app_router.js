Locus.Router = Ember.Router.extend({
  location: 'hash',
  enableLogging: true,

  root: Ember.Route.extend({
    addPerson: Em.Route.transitionTo('newPerson'),
    peopleList: Em.Route.transitionTo('index'),
    index: Ember.Route.extend({
      route: '/',
      editPerson: Ember.Route.transitionTo('edit'),
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('people', Locus.Person.find());
      }

      // Layout your routes here...
    }),
    edit: Ember.Route.extend({
      route: '/people/:id',

      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('person', context);
      },
      deserialize: function(router, urlParams) {
        return router.get('peopleController.content').find(function(item) {
          return item.get('id') === parseInt(urlParams.id);
        });
      }
    }),
    newPerson: Ember.Route.extend({
      route: '/people/new',

      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('person', {});
      }
    })
  })
});

