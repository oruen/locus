Locus.set("TablesController", Ember.ArrayController.extend({
  init: function() {
    this.set('content', Locus.Table.find());
  }
}));

