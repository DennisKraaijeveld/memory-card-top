import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function Layout() {
  const [bestScore, setBestScore] = React.useState(0);
  const [currentScore, setCurrentScore] = React.useState(0);

  const getCurrentScore = (score) => {
    if (score === 0) return setCurrentScore(0);

    setCurrentScore(currentScore + 1);
  };

  const getBestScore = () => {
    setBestScore(currentScore > bestScore ? currentScore : bestScore);
  };
  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Main getCurrentScore={getCurrentScore} getBestScore={getBestScore} />
    </div>
  );
}

export default Layout;
