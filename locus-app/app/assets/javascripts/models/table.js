Locus.Table = DS.Model.extend({
  x: DS.attr('number'),
  y: DS.attr('number'),
  angle: DS.attr('number'),
  person: DS.belongsTo('Locus.Person')
});
