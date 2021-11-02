class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|

      t.timestamps
    end
  end
end
