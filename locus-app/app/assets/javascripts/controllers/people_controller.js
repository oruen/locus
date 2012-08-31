Locus.set("PeopleController", Ember.ArrayController.extend({
  content: [
    Em.Object.create({id: 1, name: "Nick Recobra", role: "developer"}),
    Em.Object.create({id: 2, name: "Stepashka", role: "manager"}),
    Em.Object.create({id: 3, name: "Сергей Париев", role: "admin"}),
    Em.Object.create({id: 4, name: "Тимур Амиров", role: "developer"})
  ]
}));

