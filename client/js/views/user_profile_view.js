app.UserAccountView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#user-profile').html());
  },
  render: function() {
    app.layoutView = new app.LayoutView();
    $('.page-wrapper').html(app.layoutView.render().el);
    new app.LoggedInView().render();
    $('.content').html(this.template(this.model));
  }
})