import Button from "./Button";
import "./Card.css";

function Card() {
    return (
        <div className="card">
            <div className="info">
                <div className="container">
                    <h2>Join our community</h2>
                    <h3>30-day, hassle-free money back guarantee</h3>
                    <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                </div>
            </div>

            <div className="pricing">
                <div className="container">
                    <h3>Monthly Subscription</h3>
                    <div>
                        <h1>$29</h1>
                        <span>per month</span>
                    </div>
                    <p>Full access for less than $1 a day</p>
                    <Button />
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <h3>Why Us</h3>
                    <p>Tutorials by industry experts</p>
                    <p>Peer & expert code review</p>
                    <p>Coding exercises</p>
                    <p>Access to our GitHub repos</p>
                    <p>Community forum</p>
                    <p>Flashcard decks</p>
                    <p>New videos every week</p>
                </div>
            </div>
        </div>
    );
}

export default Card;