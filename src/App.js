import { useState } from "react";
import Counter from "./components/counter/index";
import "./App.css";
import "./components/counter/counter.css";
import Quotes from "./components/quotes/index";

console.log(useState);

function App() {
  const [messageShowing, setMessageShowing] = useState(true);

  function toggleMessage() {
    setMessageShowing(!messageShowing);
  }

  return (
    <>
      <div className="App">
        <header>
          <h1>Working with state</h1>
          {messageShowing ? (
            <button className="btn btn--on" onClick={toggleMessage}>
              <div></div>
            </button>
          ) : (
            <button className="btn btn--off" onClick={toggleMessage}>
              <div></div>
            </button>
          )}

          {messageShowing ? <br /> : <div>Welcome to the app</div>}
          <div>
            <Counter />
          </div>
        </header>
        <footer>
          <Quotes />
        </footer>
      </div>
    </>
  );
}

export default App;
