//= require jq-animate
Locus.TableView = Ember.View.extend(JQ.Animate, {
  classNames: ['desk'],
  attributeBindings: ['draggable'],
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
    this.set('top', this.get('top'));
  },
  draggable: 'true',
  dragStart: function(event) {
    var dataTransfer = event.originalEvent.dataTransfer;
    dataTransfer.setData('Text', this.get('elementId'));
    dataTransfer.setDragImage(this.get('dragIconElement'), 24, 24);
  },
  dragEnd: function(event) {
    this.set('left', event.originalEvent.pageX + 'px');
    this.set('top', (event.originalEvent.pageY - 111) + 'px');
    Locus.get('router').send('deskMoved');
  },
});
