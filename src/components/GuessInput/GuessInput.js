import React from 'react';

function GuessInput({ handleAddGuess }) {

  const [guessWord, setGuessWord] = React.useState('');

  function handleGuessChange(event) {
    setGuessWord(event.target.value.toUpperCase());
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    handleAddGuess(guessWord);

    setGuessWord('');
    console.log({ guessWord });
  }


  return (
    <form onSubmit={event => handleOnSubmit(event)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      {/* patterss should have a title property! */}
      <input maxLength={5} minLength={5} pattern="[a-zA-z]{5}" title='use a 5 letter word!' onChange={event => handleGuessChange(event)} value={guessWord} id="guess-input" type="text" />
    </form>

  )
}

export default GuessInput;
