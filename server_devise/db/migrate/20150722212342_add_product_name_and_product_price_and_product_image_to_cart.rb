class AddProductNameAndProductPriceAndProductImageToCart < ActiveRecord::Migration
  def change
    add_column :carts, :product_name, :string
    add_column :carts, :product_price, :decimal
    add_column :carts, :product_image, :text
  end
end
