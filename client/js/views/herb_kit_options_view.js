app.HerbKitOptionsView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click .options-img': 'showProductInSVG'
  },
  initialize: function() {
    this.template = _.template($('#product-option-view').html())
  },
  render: function() {
    
    if (this.model.attributes.product_type === "planter") {
      this.$el.addClass('planter-option');
      var product = this.$el.html(this.template(this.model.toJSON()));
      $('.planter-options').append(product);
    } else {
      this.$el.addClass('herb-option');
      var product = this.$el.html(this.template(this.model.toJSON()));
      $('.herb-options').append(product);
    }
  },
  showProductInSVG: function(e) {
    var svgImage = this.model.attributes.name + "-img";
    if (this.model.attributes.product_type === 'planter') {
      $('.svg-planter-products').attr('visibility', 'hidden');
    } else {
      $('.svg-herb-products').attr('visibility', 'hidden');
    }
    $('#' + svgImage).attr('visibility', 'visible');
    
  }
  
})