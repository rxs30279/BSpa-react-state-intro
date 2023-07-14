import { useState } from "react";

function Quotes() {
  // initialize state for store the quote
  const [quote, setQuote] = useState(null);

  function getQuote() {
    //fetch request
    //store returned value
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setQuote(data[randomNumber]);
      });
  }

  return (
    <div className="quotes">
      {quote && <p>{quote.text}</p>}

      <button onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default Quotes;
