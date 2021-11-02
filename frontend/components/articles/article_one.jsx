import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class ArticleOne extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBooks();
    }

    redirect(bookId) {
        this.props.history.push(`/books/${bookId}`);
    }

    render() {
        if (Object.values(this.props.books).length < 1) {
            return null;
        }

        const books = Object.values(this.props.books);
        const lfe = books.filter(book => {
            return book.title === 'Little Fires Everywhere'
        })[0];
        const nm = books.filter(book => {
            return book.title === 'Norse Mythology'
        })[0];
        const mg = books.filter(book => {
            return book.title === 'Mexican Gothic'
        })[0];
        const kd = books.filter(book => {
            return book.title === 'Kindred'
        })[0];
        const ti = books.filter(book => {
            return book.title === 'The Institute'
        })[0];

        return (
            <div>
                <div className="header-div">
                    <NavbarContainer />
                </div>
                <div className="article-container">
                    <div className="article-one">
                        <h1>Five Books You Should Read Next</h1>
                        <h3>Posted by John Feng on November 1, 2021</h3>
                        {/* <img src="" alt="john-profile"/> */}
                        
                        <p className="body">
                            Below is a selection of five books that I think any reader should add to their tbr (to-be-read) shelf! 
                            Each book is accompanied with a short description written by yours truly. 
                            I hope you'll take a look.
                        </p>

                        <h2>{lfe.title} by {lfe.author}</h2>
                        <article onClick={() => this.redirect(lfe.id)}>
                            <div className="book-info">
                                <img src={`${lfe.cover_img_url}`} alt="lfe" />
                            </div>
                            <div className="book-review">

                            </div>
                        </article>
                            
                        <h2>{nm.title} by {nm.author}</h2>
                        <article className="even" onClick={() => this.redirect(nm.id)}>
                            <div className="book-review">

                            </div>
                            <div className="book-info">
                                <img src={`${nm.cover_img_url}`} alt="nm" />
                            </div>
                        </article>
                            
                        <h2>{mg.title} by {mg.author}</h2>
                        <article onClick={() => this.redirect(mg.id)}>
                            <div className="book-info">
                                <img src={`${mg.cover_img_url}`} alt="mg" />
                            </div>
                            <div className="book-review">
                                Enter Noemí.
                                <br /><br />
                                She's a socialite who aspires to study anthropology (automatic plus for Noemí as I also studied anthropology in undergrad!) and her father offers an opportunity to do just that at a prestigious university - an offer not to be taken lightly as a woman in 1950s Mexico. Her goal: to check up on her cousin Catalina after her father receives an ominous letter regarding Catalina's dire situation. Catalina had married a man named Virgil and moved into his family home called High Place, a house full of history. Noemí agrees to travel to High Place in order to checkup on Catalina, and she slowly unravels a haunting mystery filled with horror and unspeakable things.
                                <br /><br />
                                This book is a slow-burn so it might not be for everyone. A majority of the book is spent setting up the atmosphere of High Place and developing character relations. Moreno-Garcia sprinkles many hints here and there and sets everything up meticulously for the book's final act.
                                <br /><br />
                                Mexican Gothic is definitely a book to put on your reading list for fans of gothic horror, or anyone looking for an interesting read.
                            </div>
                        </article>

                        <h2>{kd.title} by {kd.author}</h2>
                        <article className="even" onClick={() => this.redirect(kd.id)}>
                            <div className="book-review">
                                At its core, <i>Kindred</i> is an examination on complacency and how easy it is to accept the status quo.
                                <br /><br />
                                Time-travel is used as a vehicle to examine the themes and ideas surrounding the novel's setting. This book isn’t so much science fiction as it is a blend of different genres. If you're expecting hard science-fiction, you won't find it here. What you will find instead is a gripping, immersive novel that will tug at the reader's emotions and challenge their preconceptions.
                                <br /><br />
                                Kindred is about Dana, a black woman living in 1970s California, who finds herself in a precarious situation when she is unwillingly portaled back to her past. Why is this happening to her? How is she linked to the past? 
                                <br /><br />
                                Butler's prose is straightforward and cuts to the point. Kindred is a very quick and easy read and recommended for fans of history with a touch of sci-fi.
                            </div>
                            <div className="book-info">
                                <img src={`${kd.cover_img_url}`} alt="kd" />
                            </div>
                        </article>

                        <h2>{ti.title} by {ti.author}</h2>
                        <article onClick={() => this.redirect(ti.id)}>
                            <div className="book-info">
                                <img src={`${ti.cover_img_url}`} alt="ti" />
                            </div>
                            <div className="book-review">
                                This is not a horror novel... at least not in a traditional sense; however, 
                                <i>The Institute</i> is about horrific things: kidnapped children, abused children, abusive adults, and murder. You won't find ghosts, killer clowns, or creepy cemeteries here. 
                                <br /><br />
                                King manages to weave varying viewpoints together to craft a satisfying tale. The story is told in a fairly linear fashion, but may jump around from one character to another. It is done well and contributes to the story, showcasing various events from different viewpoints without feeling overly padded. 
                                Much of the novel spends time with the main character Luke Ellis; however, <i>The Institute</i> begins with a man named Tim Jamieson, our kind-of-bland-somewhat-vanilla deuteragonist. 
                                You end up wondering how the two worlds eventually collide, but King manages to set-up the plot and carry it through convincingly.
                                <br /><br />
                                King manages to tell a story that will keep your attention, even during the acts that may falter, and wraps up the plot in a way that will leave you satisfied.
                            </div>
                        </article>
                    </div>
                </div>
                <div className="footer-div"></div>
            </div>
        )
    }
}

export default ArticleOne;
