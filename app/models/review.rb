class Review < ApplicationRecord

    validates :user_id, :book_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

end