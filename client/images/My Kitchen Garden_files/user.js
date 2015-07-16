app.User = Backbone.Model.extend({
  urlRoot: "http://localhost:3000/users",
  defaults: {
    id: null,
    email: '',
    password: '',
    password_confirmation: '',
    firstname: '',
    lastname: ''
  }
})