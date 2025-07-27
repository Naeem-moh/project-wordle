import React from 'react';

function GuessesGrid(guesses) {
  return (
    <div class="guess-results">
      {guesses.guesses.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>))}
        
    </div>
  );
};

export default GuessesGrid;
