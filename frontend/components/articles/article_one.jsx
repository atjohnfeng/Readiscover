import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class ArticleOne extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
                        <div className="article-header">
                            <div>
                                <h1>Five Books You Should Read Next</h1>
                                <h3>Posted by John Feng</h3>
                                <h3>November 1, 2021</h3>
                            </div>
                            <img src={window.authorPic} alt="john-profile"
                                className="author-pic"/>
                        </div>
                        <p className="body">
                            Reading was a fundamental part of my childhood. Many of my afternoons growing up after-school were spent in the library consuming every <i>Goosebumps</i> or <i>Magic Tree House</i> book I could get my hands on.
                             I grew up on stories, and I believe reading can be truly transformative. Below is a selection of books from different genres I think any reader should consider adding to their tbr (to-be-read) shelf. 
                            Each book is accompanied with a short description written by yours truly. 
                            I hope this list will inspire you to readiscover (-wink-) the joy of reading.
                        </p>

                        <h2>{lfe.title} by {lfe.author}</h2>
                        <article onClick={() => this.redirect(lfe.id)}>
                            <div className="book-info">
                                <img src={`${lfe.cover_img_url}`} alt="lfe" />
                            </div>
                            <div className="book-review">
                                Shaker Heights is a seemingly idyllic suburb. Wealthy and prominent, Elena Richardson only wants to do good and give back to those in need.
                                But what happens when Mia Warren and her daughter move to Shaker Heights and Elena offers them a place to stay?
                                <br /><br />
                                <i>Little Fires Everywhere</i> examines the obstacles surrounding class, race, relationships, and motherhood. Ng manages to craft a drama that unfolds meticulously as any small spark can start a fire.
                                Drama unfolds when a close friend of Elena Richardson goes through the trials of adopting a Chinese baby abandoned at the fire station. When the birth mother shows up, a legal fight ensues. Who has the rights to the baby?
                                <br /><br />
                                Elena and Mia find themselves on opposing sides of the argument, while they both juggle with their own attempts at motherhood, learning more about themselves and their children in the process.
                                <br /><br />
                                <i>Little Fires Everywhere</i> is a read that manages to entwine a multitude of themes together effortlessly.
                             </div>
                        </article>
                            
                        <h2>{nm.title} by {nm.author}</h2>
                        <article className="even" onClick={() => this.redirect(nm.id)}>
                            <div className="book-review">
                                Norse myths have been at the forefront of pop-culture for some time now, but many of the stories have been lost to time. A lot of what we know today was recorded as cryptic poetry known as the <i>Poetic Edda</i> and the <i>Prose Edda.</i>
                                <br /><br />
                                Gaiman manages to weave these myths into a compelling collection of retellings. While <i>Norse Mythology</i> is 
                                not a deep dive into each God, it is the perfect introduction to the world as you are introduced to many of the important figures of the Norse pantheon.
                                Thor, the god of thunder, and Loki, the half-giant trickster god, are both well-known figures today, but how were they actually portrayed in the myths of old?
                                <br /><br />
                                Starting with the origins of the world, learn about the World Tree, Yggdrasil, and the nine worlds that surround it as Gaiman 
                                slowly unravels the journey to Ragnarok.
                                By the end, the reader will not want to leave Loki's wild ride.
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
                                She's a socialite who aspires to study anthropology. When her father offers her an opportunity to do just that at a prestigious university - an offer not to be taken lightly as a woman in 1950s Mexico, she finds herself at a crossroads. Her goal: to check up on her cousin Catalina after her father receives an ominous letter regarding Catalina's dire situation. Catalina had married a man named Virgil and moved into his family home called High Place, a house full of history. Noemí agrees to travel to High Place in order to checkup on Catalina, and she slowly unravels a haunting mystery filled with horror and unspeakable things.
                                <br /><br />
                                This book is a slow-burn so it might not be for everyone. A majority of the book is spent setting up the atmosphere of High Place and developing character relations. Moreno-Garcia sprinkles many hints here and there and sets everything up meticulously for the book's final act.
                                <br /><br />
                                <i>Mexican Gothic</i> is definitely a book to put on your reading list for fans of gothic horror, or anyone looking for an interesting read.
                            </div>
                        </article>

                        <h2>{kd.title} by {kd.author}</h2>
                        <article className="even" onClick={() => this.redirect(kd.id)}>
                            <div className="book-review">
                                At its core, <i>Kindred</i> is an examination on complacency and how easy it is to accept the status quo.
                                <br /><br />
                                <i>Kindred</i> is about Dana, a black woman living in 1970s California, who finds herself in a precarious situation when she is unwillingly portaled back to her past. Why is this happening to her? How is she linked to the past? 
                                <br /><br />
                                Time-travel is used as a vehicle to examine the themes and ideas surrounding the novel's setting. This book isn’t so much science fiction as it is a blend of different genres. If you're expecting hard science-fiction, you won't find it here. Instead, you will find a gripping, immersive novel that will tug at your emotions and challenge your preconceptions.
                                <br /><br />
                                Butler's prose is straightforward and cuts to the point. <i>Kindred</i> is a very quick and easy read and recommended for fans of history with a touch of sci-fi.
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
                                <i>The Institute</i> is about horrific things: kidnapped children and abused children, abusive adults, and murder. You won't find ghosts, killer clowns, or creepy cemeteries here. 
                                <br /><br />
                                King manages to combine varying viewpoints together to craft a satisfying tale. The story is told in a fairly linear fashion, but may jump around from one character to another. It is done well and contributes to the story, showcasing various events from different viewpoints without feeling overly padded. 
                                Much of the novel spends time with the main character Luke Ellis; however, <i>The Institute</i> begins with a man named Tim Jamieson, our kind-of-bland-somewhat-vanilla deuteragonist. 
                                You end up wondering how the two worlds eventually collide, but King manages to set-up the plot and carry it through convincingly.
                                <br /><br />
                                King manages to tell a story that will keep your attention, even during its weaker moments. He manages to wrap up the plot in a way that will leave most satisfied.
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
