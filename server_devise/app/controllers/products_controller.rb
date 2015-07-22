class ProductsController < ApplicationController
  def index
    products = Product.all
    render json: products
  end

  def show
    product = Product.where(id: params[:id])
    render json: product
  end

end
