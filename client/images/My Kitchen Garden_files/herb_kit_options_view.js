var herbNumber = [];
var capacity = 0;

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
      $('.svg-herb-products').attr('visibility', 'hidden');
      $('.svg-planter-products').attr('visibility', 'hidden');
      $('#' + svgImage).attr('visibility', 'visible');
      capacity = this.model.attributes.capacity;
    } else {
      // Checking the capacity of the selected planter to see how many plants it can take
      if (herbNumber.length < capacity) {
        herbNumber.push(svgImage);
      } else {
        $('#' + herbNumber[0]).attr('visibility', 'hidden');
        herbNumber.shift();
        herbNumber.push(svgImage);
      }
      $('#' + svgImage).attr('visibility', 'visible');
    }

    // Changing SVG image position depending on which planter has been selected
    if ($('#Planter-img').attr('visibility') === 'visible') {
      $('#Basil-img').attr({
        y: '145px'
      });
      $('#Thyme-img').attr({
        height: '500px',
        y: '28px'
      });

      $('#Mint-img').attr({
        height: '500px',
        y: '10px',
        x: '220px'
      });

    } else if ($('#Planter_2-img').attr('visibility') === 'visible') {
      $('#Basil-img').attr({
        height: '320px',
        y: '56px'
      });
      $('#Thyme-img').attr({
        height: '550px',
        y: '-75px'
      });
      $('#Mint-img').attr({
        height: '600px',
        y: '-110px',
        x: '220px'
      });
    } else if ($('#Planter_3-img').attr('visibility') === 'visible') {
      // debugger;
      if (herbNumber[0] == 'Thyme-img') {
        $('#Thyme-img').attr({
          height: '200px',
          y: '200px'
        });
      }

    }
  
    
  }
  
})