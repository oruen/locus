Locus.Router = Ember.Router.extend({
  location: 'hash',
  enableLogging: true,

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',

      // You'll likely want to connect a view here.
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('people');
      }

      // Layout your routes here...
    })
  })
});

