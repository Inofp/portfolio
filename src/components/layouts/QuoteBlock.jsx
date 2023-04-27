import Image from "next/image";
import { useState } from "react";

const quotes = [{ text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", }, { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", }, { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", },];

const QuoteBlock = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [likedQuotes, setLikedQuotes] = useState([]);
  const [likedVisible, setLikedVisible] = useState(false);

  const handleLike = () => {
    const currentQuote = quotes[currentQuoteIndex];
    if (!likedQuotes.includes(currentQuote)) {
      setLikedQuotes([...likedQuotes, currentQuote]);
    }
  };

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div>
      {!likedVisible && <h3>Code example (react + next.js):</h3>}
      <div className="quote-block">
        <p className="quote-text">{currentQuote.text}</p>
        <p className="quote-author">- {currentQuote.author}</p>
        <div className="quote-actions">
          <button className="quote-like" onClick={handleLike}>
            <Image
              src={
                likedQuotes.includes(currentQuote) ? "/white.png" : "/heart.svg"
              }
              alt={likedQuotes.includes(currentQuote) ? "liked" : "like"}
              width={18}
              height={18}
            />
            &nbsp;Like
          </button>
          <button
            className="quote-next"
            onClick={() =>
              setCurrentQuoteIndex((currentQuoteIndex + 1) % quotes.length)
            }
          >
            Next
          </button>
        </div>
        {likedVisible && likedQuotes.length > 0 && (
          <div className="liked-quotes">

            <p className="liked-header">You liked:</p>
            {likedQuotes.map((quote, index) => (
              <div className="liked-quote" key={index}>
                <p>"{quote.text}"</p>
                <p>- {quote.author}</p>
                {index !== likedQuotes.length - 1 && <hr />}
              </div>
            ))}
          </div>
        )}
        {likedQuotes.length > 0 && (
          <button
            className="show-btn"
            onClick={() => setLikedVisible(!likedVisible)}
          >
            {likedVisible ? "Hide liked quotes" : "Show liked quotes"}
          </button>
        )}
        <style jsx>{`
        .quote-block {
          border: 1px solid #ccc;
          border-left: 2px solid #000;
          padding: 16px;
          margin-bottom: 16px;
          position: relative;
        }
        .quote-text {
          font-size: 24px;
          font-style: italic;
          margin-bottom: 8px;
        }
        .quote-author {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .quote-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .quote-like {
          display: flex;
          align-items: center;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 16px margin: 0;
          padding: 0;
        }
        .quote-like:focus {
          outline: none;
        }
        .liked-quotes {
          border: 1px solid #000;
          border-radius: 8px;
          padding: 16px;
          margin-top: 16px;
          background-color: transparent;
        }
        .liked-header {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .liked-quote {
          margin-bottom: 8px;
        }
        .liked-quote p {
          font-size: 14px;
        }
        .hide-btn,
        .show-btn {
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 14px;
          margin-top: 8px;
          padding: 0;
        }
        .hide-btn:focus,
        .show-btn:focus {
          outline: none;
        }
        hr {
          margin-top: 8px;
          margin-bottom: 8px;
          border: none;
          border-top: 1px solid #ccc;
        }
        .quote-next {
          border: 1px solid #000;
          background-color: #000;
          border-radius: 4px;
          color: #fff;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .quote-next:hover {
          color: #000;
          background-color: transparent;
          
        }
        
      `}</style>
      </div>
    </div>
  );
};

export default QuoteBlock;