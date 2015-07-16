app.Products = Backbone.Collection.extend({
  model: app.Product,
  url: "http://localhost:3000/products",
  parse: function(response) {
    return response;
  }
})