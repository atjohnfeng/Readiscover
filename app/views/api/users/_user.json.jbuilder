json.extract! user, :id, :username, :email, :profile_img_url
json.review_count user.reviews.length