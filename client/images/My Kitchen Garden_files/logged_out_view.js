app.LoggedOutView = Backbone.View.extend({
  el: '#nav',
  initialize: function() {
    this.template = _.template($('#logged-out-view').html())
  },
  render: function() {
    this.$el.append(this.template);
  }
})