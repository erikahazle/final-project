app.HomeView = Backbone.View.extend({
  el: ".content",
  initialize: function() {
    this.template = _.template($('#home-view').html());
  },
  render: function() {
    this.$el.html(this.template);
  }
})