import React, { useEffect } from 'react';

// Available cards array
// Import Single Card Component (forEach)
// On Mount: Randomly render the cards in the main container.
// On Update: Count score and update card render

import { cardData } from '../data/cards.js';

import SingleCard from './Cards/singleCard.jsx';

const Main = ({ getCurrentScore, getBestScore }) => {
  // const [bestScore, setBestScore] = React.useState(0);
  // const [currentScore, setCurrentScore] = React.useState(0);

  const [currentCardArr, setCurrentCardArr] = React.useState([]);
  const [clickedCards, setClickedCards] = React.useState([]);

  const handleRound = (id) => {
    // Check for duplicate clicks
    if (id !== clickedCards.find((card) => card === id)) {
      setClickedCards((prevState) => [...prevState, id]);
      getCurrentScore();
    }

    if (id === clickedCards.find((card) => card === id)) {
      getCurrentScore(0);
      setClickedCards([]);
      getBestScore();
    }
  };

  useEffect(() => {
    if (currentCardArr === []) return;

    setCurrentCardArr(cardData.sort(() => Math.random() - 0.5));
  }, [clickedCards, currentCardArr]);

  return (
    <section className="relative pt-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-5 gap-4">
        {currentCardArr.map((card, cardIdx) => (
          <SingleCard key={cardIdx} {...card} handleRound={handleRound} />
        ))}
      </div>
    </section>
  );
};

export default Main;
