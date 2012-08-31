Locus.Router = Ember.Router.extend({
  location: 'hash',
  enableLogging: true,

  root: Ember.Route.extend({
    addPerson: Em.Route.transitionTo('newPerson'),
    peopleList: function(router) {
      router.get('store.defaultTransaction').rollback();
      Em.Route.transitionTo('index')(router);
    },
    index: Ember.Route.extend({
      route: '/',
      editPerson: Ember.Route.transitionTo('edit'),
      deletePerson: function(person, event) {
        event.context.deleteRecord();
        Locus.get('router.store').commit();
      },
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('people', Locus.Person.find());
      }
    }),
    edit: Ember.Route.extend({
      route: '/people/:id',

      updatePerson: function(router, event) {
        router.get('store').commit();
        Ember.Route.transitionTo('index')(router);
      },
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('person', context);
      },
      deserialize: function(router, urlParams) {
        return Locus.Person.find(parseInt(urlParams.id, 10));
      },
      serialize: function(router, context){
        return {
          id: context.get('id')
        }
      }
    }),
    newPerson: Ember.Route.extend({
      route: '/people/new',
      updatePerson: function(router, event) {
        router.get('store').commit();
        Ember.Route.transitionTo('index')(router);
      },
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('person', Locus.Person.createRecord());
      }
    })
  })
});

