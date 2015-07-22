function addtoCart() {
  var token = Cookies.get("authentication_token");
  if (token !== undefined) {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/users/" + token,  
      dataType: 'json'
    }).done(function(data) {
      for(i = 0; i < itemsToBuy.length; i++) {
        var cart = new app.Cart({product_id: itemsToBuy[i], user_id: data.current_user.id});
         if (cart.save()) {
          app.router.navigate('#shopping_cart');
          app.router.showCart();
         }
      }
    })
  } else {
    app.router.navigate('#login');
    app.router.loginForm();
  }
}                                                       

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
        $('#create-product-display').append('<svg><image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + product.attributes.image + '" x="185px" y="250px" height="350px" width="600px" visibility="hidden" id="' + product.attributes.name + '-img" class="svg-planter-products"></image></svg>')
      } else {
        $('#create-product-display').append('<svg><image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + product.attributes.image + '" x="185px" y="120px" height="280px" width="600px" visibility="hidden" id="' + product.attributes.name + '-img" class="svg-herb-products"></image></svg>')
      }
      var herbKitOptionsView = new app.HerbKitOptionsView({model: product});
      herbKitOptionsView.render();
    })
    return this
  },
  showOptions: function(e) {
    if (e.toElement.innerText === "Planters") {
      $('.planter-options').toggleClass('hide');
    } else if (e.toElement.innerText === "Herbs") {
      $('.herb-options').toggleClass('hide');
    } else {
      addtoCart();
    }
  }
});