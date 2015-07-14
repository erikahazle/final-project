class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :capacity
      t.decimal :price
      t.text :description
      t.text :image
      t.string :product_type

      t.timestamps null: false
    end
  end
end
