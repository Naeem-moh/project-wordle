import React from 'react';
import { useForm } from "react-hook-form";

function GuessInut({addGuess}) {

  console.log(addGuess);
  const { register, setValue, handleSubmit} = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data.guess);
    addGuess(data.guess);
    setValue("guess", "");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        title='five characters word'
        maxLength={5}
        id="guess-input" type="text"
        {...register("guess", {
          required: true,
          minLength: 5,
          pattern: /^[A-Za-z]{5}$/,
          onChange: (e) => {
            setValue("guess", e.target.value.toUpperCase());
          }
        })} />
    </form>
  );
}

export default GuessInut;
