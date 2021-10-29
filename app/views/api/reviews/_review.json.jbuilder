json.extract! review, :id, :user_id, :book_id, :body, :rating, :created_at, :updated_at
json.author review.reviewer.username