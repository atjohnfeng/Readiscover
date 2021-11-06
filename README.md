# Readiscover Readme

You can find Readiscover live [here](https://readiscover.herokuapp.com/)!

## Background

Rediscover the joy of reading. `Readiscover` is a Goodreads clone, a social media platform where users can log books they have read or want to read. Users can also review books, and find information on books they are interested in. Users may add books to their bookshelves by tagging the as 'read', 'currently reading' and 'want to read'.

## Technologies

* Ruby on Rails
* React/Redux
* PostgreSQL
* JavaScript
* AJAX / JBuilder
* HTML5 / SCSS

## Features

* ### User auth 
    * Users may register an account and login.  
    ![Sign Up](app/assets/images/signup-gif.gif)  
    * Users may also login using a demo user account.  
    ![Demo User](app/assets/images/demouser-gif.gif)  

* ### Books
    * Users may browse a selection of books and see their information.  
    ![Browse Books](app/assets/images/browse-gif.gif)  

* ### Reviews
    * Users may view reviews left on books by other users, or rate and leave a review of their own.  
    ![Add Review](app/assets/images/review-gif.gif)  
    ```renderStar(value) {
        if (value <= this.state.rating && this.state.rating !== '') {
            return (
                "fa fa-star checked"
            )
        } else {
            return (
                "fa fa-star"
            )
        }
    }```  
    By utilizing a renderStar function, stars will show up as orange based on the user's rating, and checking each star for its value. Stars are also positioned via flex-reverse to highlight stars upon hovering as CSS only allows you to choose child elements, but not parent elements.  
    * Users may also update or delete their ratings and reviews.  
    ![Delete Review](app/assets/images/delete-review-gif.gif)  

* ### Bookshelves
    * Users may add to their bookshelves by marking them as 'Read', 'Want to Read', or 'Currently Reading'.  
    ![Add Shelving](app/assets/images/addshelving.gif)  
    * Users may also remove a book from their shelves.  
    ![Remove Shelving](app/assets/images/removeshelving.gif)  

* ### Search
    * Users may search for a book by title or author name.  
    ![Search](app/assets/images/search-gif.gif)  
    ```const searchString = this.state.searchString;
        if (searchString.length >= 1) {
            filteredBooks = this.props.books.filter(book => {
                return book.title.toLowerCase().includes(searchString.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchString.toLowerCase());})
                }
    ```  
    The user's input will update the state of the navbar component, and the searchString in the state allows the user to filter books by book title or author name, utilizing toLowerCase() to avoid case-sensitivity.  

* ### Mobile and Tablet Friendly
    * Readiscover is dynamically-scaling and built for devices of all sizes.  
    ![Dynamic Scaling](app/assets/images/dynamic_gif.gif)  

## Upcoming Features

* Review Statistics
* Review Comments
* Review Likes
* Splash Page