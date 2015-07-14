app.UserProfileView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#user-profile').html());
  },
  render: function() {
    // debugger;
    $('.content').html(this.template);
  }
})