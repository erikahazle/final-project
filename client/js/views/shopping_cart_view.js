app.ShoppingCartView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#shopping-cart').html());
  },
  render: function() {
    $('.content').html(this.template);
    var token = Cookies.get("authentication_token");
    if (token !== undefined) {
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/users/" + token,  
        dataType: 'json'
      }).done(function(data) {
        $('#shopping-cart-wrapper').empty();
        for(i = 0; i < data.cart.length; i++) {
          new app.ShoppingCartItemView({model: data.cart[i]}).render();
        }
      })
    }
  }
})