app.ShoppingCartView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#shopping-cart').html());
  },
  render: function() {
    $('.content').html(this.template);
  }
})