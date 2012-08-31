Locus.Person = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  role: DS.attr('string'),
  collectionUrl: '/people/%@'
});

