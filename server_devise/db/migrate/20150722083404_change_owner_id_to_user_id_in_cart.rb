class ChangeOwnerIdToUserIdInCart < ActiveRecord::Migration
  def change
    rename_column :carts, :owner_id, :user_id
  end
end
