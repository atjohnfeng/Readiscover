class Review < ApplicationRecord

    validates :user_id, :book_id, presence: true
    validates :rating, presence: true, unless: :body_present?
    validates :body, presence: true, unless: :rating_present?

    def body_present?
        validates :body, presence: true
    end

    def rating_present?
        validates :rating, presence: true
    end

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

end