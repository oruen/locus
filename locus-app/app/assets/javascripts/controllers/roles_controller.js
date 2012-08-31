Locus.set("RolesController", Ember.ArrayController.extend({
  content: [
    Em.Object.create({id: "developer", name: "Разработчик"}),
    Em.Object.create({id: "manager", name: "Менеджер"}),
    Em.Object.create({id: "admin", name: "Администратор"}),
  ]
}));
