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
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var password_confirmation = $("#password_confirmation").val();
      // debugger;
      var newUser = new app.UserSignup({'email': email, 'password': password, 'password_confirmation': password_confirmation});
      newUser.save();
      // $.ajax({
      //   type: 'POST',
      //   url: 'http://localhost:3000/users',
      //   data: {'email': email, 'password': password, 'password_confirmation': password_confirmation},
      //   dataType: 'json'
      // }).done(function(data) {
      //   console.log(data);
      // })

    })
  }
})