class EditReview < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :title
    add_column :reviews, :spoiler_flag, :boolean, default: false
  end
end
