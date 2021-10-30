class AddSpoilerFlagtoReview < ActiveRecord::Migration[5.2]
  def change
        add_column :reviews, :spoiler_flag, :boolean, :default => false
  end
end
