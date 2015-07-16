app.LoggedInView = Backbone.View.extend({
  el: '#nav',
  initialize: function() {
    this.template = _.template($('#logged-in-view').html())
  },
  render: function() {
    this.$el.append(this.template);
  }
})