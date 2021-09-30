# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Book.delete_all

# User Seeds
demo_user = User.create(username: 'demo', email: 'demo@demo.com', password: 'demolicious')

# Book Seeds

mexican_gothic = Book.create(title: 'Mexican Gothic', author: 'Silvia Moreno-Garcia', page_count: 301, published_date: 'June 30, 2020', description: 'After receiving a frantic letter from her newly-wed cousin begging for someone to save her from a mysterious doom, Noemí Taboada heads to High Place, a distant house in the Mexican countryside. She’s not sure what she will find—her cousin’s husband, a handsome Englishman, is a stranger, and Noemí knows little about the region. Noemí is also an unlikely rescuer: She’s a glamorous debutante, and her chic gowns and perfect red lipstick are more suited for cocktail parties than amateur sleuthing. But she’s also tough and smart, with an indomitable will, and she is not afraid: Not of her cousin’s new husband, who is both menacing and alluring; not of his father, the ancient patriarch who seems to be fascinated by Noemí; and not even of the house itself, which begins to invade Noemí’s dreams with visions of blood and doom. Her only ally in this inhospitable abode is the family’s youngest son. Shy and gentle, he seems to want to help Noemí, but might also be hiding dark knowledge of his family’s past. For there are many secrets behind the walls of High Place. The family’s once colossal wealth and faded mining empire kept them from prying eyes, but as Noemí digs deeper she unearths stories of violence and madness. And Noemí, mesmerized by the terrifying yet seductive world of High Place, may soon find it impossible to ever leave this enigmatic house behind.', cover_img_url: 'mexican-gothic-cover.jpg')
ninteen_eighty_four = Book.create(title: '1984', author: 'George Orwell', page_count: 298, published_date: 'April 8, 1949', description: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmarish vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.', cover_img_url: '1984-cover.jpg')
six_of_crows = Book.create(title: 'Six of Crows', author: 'Leigh Bardugo', page_count: 465, published_date: 'September 29, 2015', description: 'Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. Kaz’s crew is the only thing that might stand between the world and destruction—if they don’t kill each other first.', cover_img_url: 'six-of-crows-cover.jpg')

# Bookshelf Seeds

# Review Seeds

# Comment Seeds