app.CreateHerbKitView = Backbone.View.extend({
  events: {
    'click .create-product-options h3': 'showOptions'
  },
  initialize: function() {
    this.template = _.template($('#create-herb-kit-view').html());
  },
  render: function() {
    $('.content').html(this.$el.html(this.template));
    this.collection.each(function(product) {
      if (product.attributes.product_type === 'planter') {
        $('#create-product-display').append('<svg><image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + product.attributes.image + '" x="185px" y="220px" height="400px" width="600px" visibility="hidden" id="' + product.attributes.name + '-img" class="svg-planter-products"></image></svg>')
      } else {
        $('#create-product-display').append('<svg><image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + product.attributes.image + '" x="185px" y="120px" height="300px" width="600px" visibility="hidden" id="' + product.attributes.name + '-img" class="svg-herb-products"></image></svg>')
      }
      var herbKitOptionsView = new app.HerbKitOptionsView({model: product});
      herbKitOptionsView.render();
    })
    return this
  },
  showOptions: function(e) {
    if (e.toElement.innerText === "Planters") {
      $('.planter-options').toggleClass('hide');
    } else {
      console.log('herbs');
      $('.herb-options').toggleClass('hide');
    }
  }
});