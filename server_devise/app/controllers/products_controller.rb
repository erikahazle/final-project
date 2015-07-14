class ProductsController < ApplicationController
  def index
    products = Product.all
    render json: products
  end

  def edit
  end

  def new
  end

  def create
  end

  def destroy
  end
end
