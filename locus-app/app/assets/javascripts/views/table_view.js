//= require jq-animate
Locus.TableView = Ember.View.extend(JQ.Animate, {
  classNames: ['desk'],
  bgWidth: 1600,
  bgHeight: 1203,
  templateName: 'table',
  table: null,
  left: function(key, value) {
    if (arguments.length === 1) {
      return (this.get('table.x') * this.get('bgWidth')) + 'px';
    } else {
      this.get('table').set('x', parseInt(value, 10) / this.get('bgWidth'));
      return value;
    }
  }.property('table.x'),
  top: function(key, value) {
    if (arguments.length === 1) {
      return (this.get('table.y') * this.get('bgHeight')) + 'px';
    } else {
      this.get('table').set('y', parseInt(value, 10) / this.get('bgHeight'));
      return value;
    }
  }.property('table.y'),
  didInsertElement: function() {
    this._super();
    console.log(this.get('top'), this.get('left'));
    this.set('top', this.get('top'));
  }
});
