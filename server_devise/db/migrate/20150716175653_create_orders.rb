class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.decimal :value
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
