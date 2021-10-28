class Book < ApplicationRecord

    validates :title, :author, presence: true

    has_many :reviews,
    foreign_key: :book_id,
    class_name: :Review

    has_many :reviewers,
    through: :reviews,
    source: :reviewer

end