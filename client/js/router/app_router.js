app.AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "#create": "createHerbKit"
  },
  initialize: function() {
    app.layoutView = new app.LayoutView();
    // debugger;
    $('.page-wrapper').html(app.layoutView.render().el)
  }
})