import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInut from '../GuessInut/GuessInut';
import GuessesGrid from '../GuessesGrid/GuessesGrid';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess])}

  return <>
    <GuessesGrid guesses={guesses} />
    <GuessInut addGuess={addGuess} />
  </>;
}

export default Game;
