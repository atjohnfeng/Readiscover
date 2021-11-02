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
                                This is a slow-burn so it won't be for everyone. A majority of the book is spent setting up the atmosphere of High Place and developing character relations. Moreno-Garcia sprinkles many hints here and there and sets everything up meticulously for the book's final act.
                                <br /><br />
                                Mexican Gothic is definitely a book to put on your reading list for fans of gothic horror, or anyone looking for an interesting read.
                            </div>
                        </article>

                        <h2>{kd.title} by {kd.author}</h2>
                        <article className="even" onClick={() => this.redirect(kd.id)}>
                            <div className="book-review">
                                Kindred is a landmark toted as the "first science fiction written by a black woman." At its core, Kindred is an examination on complacency and how easy it is to accept the status quo.
                                <br /><br />
                                Time-travel is used as a vehicle to examine the themes and ideas surrounding the novel's setting. This book isn’t so much science fiction as it is a blend of different genres. 
                                <br /><br />
                                There’s a lot of significance in the prologue of the novel when we link back to it during the ultimate conclusion of Dana’s journey. How does someone who has traveled back to antebellum South change after returning? After everything they experienced, could they ever be “whole” again? Butler draws many parallels between Kevin, Dana’s husband, and Rufus, Dana’s ancestor, in order to contrast Kevin’s journey with Dana’s. It really makes you examine each character and their role in society, both present and past.
                                <br /><br />
                                The prose is straightforward and cuts to the point. Kindred is a very quick and easy read and recommended for fans of history with a touch of sci-fi.
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
                                I went into <i>The Institute</i> expecting a horror book given that this was a King novel (and 2020 Goodreads users at the time of this review shelved this as horror - can't trust ya'll), but this is not a horror novel... at least not in a traditional sense. This is also the second King book I've read (the first being <i>Joyland</i> which I also expected to be a horror novel but ended up being a nice coming-of-age tale). I guess you can say that The Institute is about horrific things: kidnapped children, abused children, abusive adults, murder, etc. You won't find ghosts, killer clowns, or creepy cemeteries here. Instead, you'll be thrust into the real world (there are many, many references to the world we know), and meet many adults that you would never want to meet in the real world, and many more children than you could ever possibly want to meet in the real world.
                                <br /><br />
                                King manages to weave varying viewpoints together to craft a satisfying tale. The story is told in a fairly linear fashion, but you may jump around from one character to another. It's done well and contributes to the story, showcasing various events from different viewpoints without feeling overly padded. Much of the novel spends time with the main character Luke Ellis; however, <i>The Institute</i> begins with a man named Tim Jamieson, our kind-of-bland-somewhat-vanilla deuteragonist. You end up wondering how the two worlds eventually collide, but King manages to set-up the plot and carry it through convincingly.
                                <br /><br />
                                There's a bit of philosophical discussion throughout the book, but most of it is surface level and we don't ever really dive deep into the Institute and its history. The third act devolves into an okay action movie. And in the end, we receive an exposition dump that provides enough answers, but leaves you thinking. Still, King has managed to tell a story that kept my attention throughout and wrapped it up in a way that left me satisfied.
                                <br /><br />
                                If <i>Stranger Things</i> meets <i>The New Mutants</i> (or at least the trailer because the movie has been delayed to hell and back) interests you, then you will probably enjoy this book.
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
