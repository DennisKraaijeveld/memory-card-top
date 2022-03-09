import React from 'react';

const Header = ({ bestScore, currentScore }) => {
  return (
    <div className="py-4 bg-slate-700 ">
      <div className="mx-auto max-w-7xl">
        <div className="text-slate-50">
          <p>Current Score: {currentScore ? currentScore : 0}</p>
          <p>Best Score: {bestScore ? bestScore : 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
