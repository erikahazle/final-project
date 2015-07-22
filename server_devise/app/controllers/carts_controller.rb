class CartsController < ApplicationController
  def create
    cart = Cart.create(user_id: params[:user_id], product_id: params[:product_id])
    render json: cart
  end

  def show
    carts = Cart.where(user_id: params[:id])
    render json: carts
  end

end
