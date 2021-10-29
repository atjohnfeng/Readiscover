class ChangeReview < ActiveRecord::Migration[5.2]
  def change
      remove_column :reviews, :spoiler_flag
  end
end
