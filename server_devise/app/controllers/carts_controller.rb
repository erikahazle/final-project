class CartsController < ApplicationController
  def create
    # binding.pry
    cart = Cart.create(user_id: params[:user_id], product_id: params[:product_id])
    render json: cart
  end

  def show
    carts = Cart.where(user_id: params[:id])
    render json: carts
  end

  def destroy
    cart = Cart.where(product_id: params[:product_id], user_id: params[:user_id])[0]
    cart.destroy
    render json: cart
  end

end
