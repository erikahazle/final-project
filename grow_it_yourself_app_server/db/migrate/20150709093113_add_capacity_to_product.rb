class AddCapacityToProduct < ActiveRecord::Migration
  def change
    add_column :products, :capacity, :integer
  end
end
