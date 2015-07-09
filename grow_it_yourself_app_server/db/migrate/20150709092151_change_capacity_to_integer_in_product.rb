class ChangeCapacityToIntegerInProduct < ActiveRecord::Migration
  def change
    remove_column :products, :capacity
  end
end
