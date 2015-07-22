var herbNumber = [];
var itemsToBuy = [];
var planterId = '';
var planter = '';
var capacity = 0;

function correctProductPositions() {
  if ($('#Planter-img').attr('visibility') === 'visible') {
    $('#Basil-img').attr({
      y: '145px',
      height: '280px',
      x: '185px',
    });

    $('#Thyme-img').attr({
      height: '550px',
      y: '-8px',
      x: '185px',
    });

    $('#Mint-img').attr({
      height: '500px',
      y: '10px',
      x: '220px'
    });

  } else if ($('#Planter_2-img').attr('visibility') === 'visible') {
    $('#Basil-img').attr({
      height: '320px',
      x: '185px',
      y: '56px'
    });
    $('#Thyme-img').attr({
      height: '550px',
      y: '-75px',
      x: '185px'
    });
    $('#Mint-img').attr({
      height: '600px',
      y: '-110px',
      x: '220px'
    });
  } else if ($('#Planter_3-img').attr('visibility') === 'visible') {
    // debugger;
    // checking the position of the herb
    if(capacity == 2) {
      if (herbNumber[0] == 'Thyme-img') {
        $('#Thyme-img').attr({
          height: '250px',
          y: '178px',
          x: '120px'
        });
      } else if (herbNumber[0] == 'Basil-img') {
        $('#Basil-img').attr({
          height: '150px',
          y: '228px',
          x: '115px'
        });
      } else if (herbNumber[0] == 'Mint-img') {
        $('#Mint-img').attr({
          height: '210px',
          y: '175px',
          x: '130px'
        });
      }

      if (herbNumber[1] == 'Thyme-img') {
        $('#Thyme-img').attr({
          height: '250px',
          y: '190px',
          x: '260px'
        });
      } else if (herbNumber[1] == 'Basil-img') {
        $('#Basil-img').attr({
          height: '150px',
          y: '237px',
          x: '246px'
        });
      } else if (herbNumber[1] == 'Mint-img') {
        $('#Mint-img').attr({
          height: '210px',
          y: '175px',
          x: '260px'
        });
      }
    }
  }
}

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
      planter = this.model.attributes.name;
      planterId = this.model.attributes.id
      herbNumber = [];
      itemsToBuy = [];
      capacity = this.model.attributes.capacity;
    } else {
      // Checking the capacity of the selected planter to see how many plants it can take
      if (herbNumber.length < capacity) {
        herbNumber.push(svgImage);
        itemsToBuy.push(this.model.attributes.id);
      } else {
        $('#' + herbNumber[0]).attr('visibility', 'hidden');
        herbNumber.shift();
        herbNumber.push(svgImage);
        itemsToBuy.push(this.model.attributes.id)
      }
      $('#' + svgImage).attr('visibility', 'visible');
      correctProductPositions();
    }
  }
})