app.CreateHerbKitView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#create-herb-kit-view').html());
  },
  render: function() {
    this.$el.html(this.template)
    return this
  }
})