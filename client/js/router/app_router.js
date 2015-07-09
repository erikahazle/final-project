app.AppRouter = Backbone.Router.extend({
  routes: {
    "/create": "createHerbKit",
    "": "home"
  },
  initialize: function() {
    app.layoutView = new app.LayoutView();
    $('.page-wrapper').html(app.layoutView.render().el);
  },
  home: function() {

  },
  createHerbKit: function() {
    debugger;
    app.createHerbKitView = new app.CreateHerbKitView();
    $('.content').html(app.createHerbKitView.render().el);
  }
})