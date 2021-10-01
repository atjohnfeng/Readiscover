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

mexican_gothic = Book.create(title: 'Mexican Gothic', author: 'Silvia Moreno-Garcia', page_count: 301, published_date: 'June 30, 2020', description: 'After receiving a frantic letter from her newly-wed cousin begging for someone to save her from a mysterious doom, Noemí Taboada heads to High Place, a distant house in the Mexican countryside. She’s not sure what she will find—her cousin’s husband, a handsome Englishman, is a stranger, and Noemí knows little about the region. Noemí is also an unlikely rescuer: She’s a glamorous debutante, and her chic gowns and perfect red lipstick are more suited for cocktail parties than amateur sleuthing. But she’s also tough and smart, with an indomitable will, and she is not afraid: Not of her cousin’s new husband, who is both menacing and alluring; not of his father, the ancient patriarch who seems to be fascinated by Noemí; and not even of the house itself, which begins to invade Noemí’s dreams with visions of blood and doom. Her only ally in this inhospitable abode is the family’s youngest son. Shy and gentle, he seems to want to help Noemí, but might also be hiding dark knowledge of his family’s past. For there are many secrets behind the walls of High Place. The family’s once colossal wealth and faded mining empire kept them from prying eyes, but as Noemí digs deeper she unearths stories of violence and madness. And Noemí, mesmerized by the terrifying yet seductive world of High Place, may soon find it impossible to ever leave this enigmatic house behind.', cover_img_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1607462569l/53152636._SY475_.jpg')
ninteen_eighty_four = Book.create(title: '1984', author: 'George Orwell', page_count: 298, published_date: 'April 8, 1949', description: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmarish vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.', cover_img_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg')
six_of_crows = Book.create(title: 'Six of Crows', author: 'Leigh Bardugo', page_count: 465, published_date: 'September 29, 2015', description: 'Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. Kaz’s crew is the only thing that might stand between the world and destruction—if they don’t kill each other first.', cover_img_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628438817l/23437156._SX318_.jpg')
rise_of_kyoshi = Book.create(title: 'Rise of Kyoshi', author: 'F.C. Yee', page_count: 442, published_date: 'July 16, 2019', description: 'F. C. Yee’s The Rise of Kyoshi delves into the story of Kyoshi, the Earth Kingdom–born Avatar. The longest-living Avatar in this beloved world’s history, Kyoshi established the brave and respected Kyoshi Warriors, but also founded the secretive Dai Li, which led to the corruption, decline, and fall of her own nation. The first of two novels based on Kyoshi, The Rise of Kyoshi maps her journey from a girl of humble origins to the merciless pursuer of justice who is still feared and admired centuries after she became the Avatar.', cover_img_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535687326l/41104164.jpg')
attack_on_titan = Book.create(title: 'Attack on Titan Vol. 1', author: 'Hajime Isayama', page_count: 193, published_date: 'July 19, 2012', description: 'For the past century, what\'s left of mankind has hidden in a giant, three-walled city, trapped in fear of the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming humankind, but the sudden appearance of an enormous Titan is about to change everything...', cover_img_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432712438l/13154150._SX318_.jpg')

# Bookshelf Seeds

# Review Seeds

# Comment Seeds