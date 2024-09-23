import React from 'react';

function GuessesList({ guesses }) {

  return (
    <div class="guess-results">
      {
        guesses.map(
          (guess) => {
            return <p key={guess.id} className="guess">{guess.word}</p>
          }
        )
      }

    </div>
  )
}

export default GuessesList;
