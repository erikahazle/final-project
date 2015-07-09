class ProductsController < ApplicationController
  
  def index
    products = Product.all
    render json: products
  end

  def show
  end

  def edit
  end

  def destroy
  end
end
