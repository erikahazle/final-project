app.LayoutView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#layout-view').html());
  },
  render: function() {
    this.$el.html(this.template())
    return this;
  }
})