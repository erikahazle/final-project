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
    debugger;
    
  }
})