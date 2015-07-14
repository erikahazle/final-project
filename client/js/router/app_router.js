
app.AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "create": "createHerbKit",
    "products": "showProducts",
    "signup": "signupForm",
    "login": "loginForm",
    "profile": "showUserProfile"
  },
  initialize: function() {
    app.layoutView = new app.LayoutView();
    $('.page-wrapper').html(app.layoutView.render().el);
  },
  showProducts: function() {
    console.log('showing products');
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
        console.log("Database is not connecting");
      }
    });
  },
  signupForm: function() {
    app.signupForm = new app.SignupView();
    app.signupForm.render();
  },
  loginForm: function() {
    var user = new app.UserSignup();
    app.loginForm = new app.LoginView();
    app.loginForm.render();
  },
  showUserProfile: function() {
    // console.log('showing user profile');
    app.profile = new app.UserProfileView();
    app.profile.render();
  }

  
})