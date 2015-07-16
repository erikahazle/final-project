app.SignupView = Backbone.View.extend({
  el: '.content',
  events: {
    "submit form#signup": "addUser"
  },
  initialize: function() {
    this.template = _.template($('#signup-form').html());
  },
  render: function() {
    this.$el.html(this.template);
  },
  addUser: function(e) {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    var password_confirmation = $("#password_confirmation").val();
    var newUser = new app.UserSignup({'email': email, 'password': password, 'password_confirmation': password_confirmation});
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/users',
      data: {email: newUser.attributes.email, password: newUser.attributes.password},
      dataType: 'json'
    }).done(function(data) {
      Cookies.set("authentication_token", data.authentication_token);
      app.router.navigate('#account');
      app.router.showUserAccount(data);
      app.layoutView = new app.LayoutView();
      $('.page-wrapper').html(app.layoutView.render().el);
      new app.LoginView().render();
    })
  }
})