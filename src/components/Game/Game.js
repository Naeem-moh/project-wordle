import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessesList from '../GuessesList/GuessesList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {

  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(word) {

    const guess = {
      id: crypto.randomUUID(),
      word
    }

    //7omar !
    setGuesses([...guesses, guess]);
  }


  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  )
}

export default Game;
