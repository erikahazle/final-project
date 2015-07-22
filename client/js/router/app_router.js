
app.AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "create": "createHerbKit",
    "products": "showProducts",
    "signup": "signupForm",
    "login": "loginForm",
    "account": "showUserAccount",
    "logout": "logOut",
    "shopping_cart": "showCart"
  },
  initialize: function() {
    app.layoutView = new app.LayoutView();
    $('.page-wrapper').html(app.layoutView.render().el);
    var token = Cookies.get("authentication_token");

    if(token === undefined) {
      console.log('not logged in')
      new app.LoggedOutView().render();
    } else {
      console.log('logged in');
      new app.LoggedInView().render();
    }
  },
  showProducts: function() {
    console.log('showing products');
  },
  home: function() {
    $('.content').empty();
    app.homeView = new app.HomeView();
    app.homeView.render();
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
    new app.SignupView().render();
  },
  loginForm: function() {
    new app.LoginView().render();
  },
  showUserAccount: function() {
    var token = Cookies.get("authentication_token");
    if (token !== undefined) {
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/users/" + token,  
        dataType: 'json'
      }).done(function(data) {
        app.profile = new app.UserAccountView({model: data});
        app.profile.render();
      })
    } else {
      app.router.navigate('#login');
      app.router.loginForm();
    }
  },
  logOut: function() {
    var token = Cookies.get("authentication_token");
    $.ajax({
      type: "DELETE",
      url: "http://localhost:3000/users/" + token,
      dataType: "json"
    }).done(function(data) {
      Cookies.remove("authentication_token");
      app.router.navigate("");
      app.layoutView = new app.LayoutView();
      $('.page-wrapper').html(app.layoutView.render().el);
      new app.LoggedOutView().render();
      app.router.home();
    })
  },
  showCart: function() {
    new app.ShoppingCartView().render();
  }

})