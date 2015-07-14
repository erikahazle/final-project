app.AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "create": "createHerbKit",
    "products": "showProducts",
    "signup": "signupForm"
  },
  initialize: function() {
    app.layoutView = new app.LayoutView();
    $('.page-wrapper').html(app.layoutView.render().el);
  },
  showProducts: function() {

  },
  home: function() {

    $('.content').empty();
  },
  createHerbKit: function() {

    app.products = new app.Products([]);
    app.products.fetch({
      success: function(data){
        app.createHerbKitView = new app.CreateHerbKitView({collection: app.products});
        app.createHerbKitView.render();
      },
      error: function(){
        console.log("Database is not connecting")
      }
    });
  },
  signupForm: function() {
    app.user = new app.UserSignup();
    app.signupForm = new app.SignupView({model: app.user});
    app.signupForm.render();
  }
  
})