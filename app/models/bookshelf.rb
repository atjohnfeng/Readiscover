class Bookshelf < ApplicationRecord

    validates :user_id, :book_id, :shelf, presence: true
    validates :shelf, inclusion: { in: ["Currently Reading", "Read", "Want to Read"] }
    validates :book_id, uniqueness: { scope: :user_id }

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

end