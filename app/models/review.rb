class Review < ApplicationRecord

    validates :user_id, :book_id, presence: true
    validates :rating, presence: true, unless: :body
    validates :body, presence: true, unless: :rating
    validates :user_id, uniqueness: { scope: :book_id }

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

end