class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.text :description
      t.string :product_type
      t.string :capacity

      t.timestamps null: false
    end
  end
end
