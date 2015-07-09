app.Products = Backbone.Collection.extend({
  url: 'http:localhost:3000/products',
  model: app.Product
})