app.LoginView = Backbone.View.extend({
  events: {
    "submit form#login": "loginUser"
  },
  initialize: function() {
    this.template = _.template($('#login-form').html());
  },
  render: function() {
    $('.content').html(this.template);

    $('#login').on('submit', function(e) {
      e.preventDefault();
      var email = $("#email").val();
      var password = $("#password").val();
      var user = new app.User({email: email, password: password});
      // user.fetch({
      //   reset: true,
      //   success: function() {
      //     console.log(user);
      //     debugger;
      //   },
      //   error: function() {
      //     console.log('error getting the user');
      //     debugger;
      //   }
      // })
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/users/sign_in',
        data: {email: email, password: password},
        dataType: 'json'
      }).done(function(data) {
        Cookies.set("authentication_token", data.authentication_token);
        app.router.navigate('#profile');
        app.router.showUserProfile();
      })
      
    })
  }
})