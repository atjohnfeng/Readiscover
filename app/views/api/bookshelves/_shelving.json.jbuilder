json.extract! shelving, :id, :user_id, :book_id, :shelf
json.book_title shelving.book.title
json.book_author shelving.book.author
json.book_cover shelving.book.cover