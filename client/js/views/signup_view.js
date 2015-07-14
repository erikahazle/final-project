app.SignupView = Backbone.View.extend({
  events: {
    "submit form#signup": "addUser"
  },
  initialize: function() {
    this.template = _.template($('#signup-form').html());
  },
  render: function() {
    $('.content').html(this.template);

    $('#signup').on('submit', function(e) {
      e.preventDefault();
      var email = $("#email").val();
      var password = $("#password").val();
      var password_confirmation = $("#password_confirmation").val();

      var newUser = new app.UserSignup({'email': email, 'password': password, 'password_confirmation': password_confirmation});
      if (newUser.save()){
        console.log(newUser);
        // window.location.hash = 'user/' + new;
      }

    })
  }
})