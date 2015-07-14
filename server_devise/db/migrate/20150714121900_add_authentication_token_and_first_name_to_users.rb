class AddAuthenticationTokenAndFirstNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :authentication_token, :string
    add_column :users, :first_name, :string
  end
end
