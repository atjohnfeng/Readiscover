class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :profile_img_url
    add_column :users, :profile_img_url, :string
  end
end
