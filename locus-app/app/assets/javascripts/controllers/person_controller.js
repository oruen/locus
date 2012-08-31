Locus.PersonController = Ember.ObjectController.extend({
  preventSave: function() {
    return !this.get('name') || (this.get('name').length == 0) ||
      !this.get('email') || (this.get('email').length == 0) ||
      !this.get('role') || (this.get('role').length == 0)
  }.property('name', 'email', 'role')
});
