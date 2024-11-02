import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const quotes = [
  "You are the light of my life, the reason I wake up each day with a smile. Your love fills my heart with joy that no words can ever capture.",
  "With you, every day feels like Valentine’s Day. Your laughter, your warmth, and the sparkle in your eyes make my world so much brighter.",
  "I love you more than words can say. You are my forever and always, the greatest adventure of my life and the love I never knew I needed.",
  "From the moment I met you, my heart knew you were the one. You bring color to my world, and I am endlessly grateful for your love.",
  "Every moment spent with you is like a beautiful dream come true. You are my heart's deepest desire and the love that completes me.",
  "I never believed in perfect until I met you. You are my everything—my best friend, my love, and my partner in all that life brings.",
  "My love for you is boundless, like the stars in the night sky. Each day, my heart grows fuller, all because you’re in it.",
  "Your love is my safe haven, the anchor that keeps me steady even in life’s stormiest seas. I cherish every moment we share.",
  "You are the reason my heart feels full and my soul feels alive. Your love is the greatest gift, and I promise to treasure it forever.",
  "Every time I look into your eyes, I see my future, my happiness, and my home. You are the love of my life, now and always.",
];

function App() {
  const [quote, setQuote] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="container">
      <p className="humor-message">
        Psst...Dear Sumayyah! <br /> You're worth more than just this quote 😉
      </p>

      <h1 className="quote"> {quote}</h1>
      <button className="button" onClick={() => setShowModal(true)}>
        Click Me
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
