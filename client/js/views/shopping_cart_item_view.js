app.ShoppingCartItemView = Backbone.View.extend({
  el: '#shopping-cart-wrapper',
  events: {
    "click .remove-cart-item": "removeItem"
  },
  initialize: function() {
    this.template = _.template($('#shopping-cart-item').html())
  }, 
  render: function() {
    $('#no-cart-items').remove();
    this.$el.append(this.template(this.model));
  },
  removeItem: function() {
    var token = Cookies.get("authentication_token");
    if (token !== undefined) {
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/users/" + token,  
        dataType: 'json'
      }).done(function(data) {
        $.ajax({
          type: "DELETE",
          url: "http://localhost:3000/carts/delete",
          data: {product_id: this.model.id, user_id: data.current_user.id}
        }).done(function(data) {
          console.log(data);
        })

      })
    }
  }
})